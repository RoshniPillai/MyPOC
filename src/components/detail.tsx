import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import Pagination from "@mui/material/Pagination";
import { rows } from "./data";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SyncIcon from "@mui/icons-material/Sync";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DownloadIcon from "@mui/icons-material/Download";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DetailPanelView from "./detailPanel";
import LandingPage from "./landing";
import LoadingSpinner from "./spinner";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Tooltip from "@mui/material/Tooltip";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Hidden } from "@mui/material";

const useStyles = makeStyles({
  root: {
    height: 30,
    //width: 200,
    padding: 0,
    margin: 0,
    color: "#fff !important",
    fontSize: "12px !important",
    backgroundColor: "#3D4044 !important",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#148291 !important"
    },
    "&:selected": {
      color: "#fff",
      backgroundColor: "gray"
    }
  },
  root1: {
    backgroundColor: "#3D4044",
    background: "#3D4044",
    borderRadius: "6px",
    //height: "40px",
    // width: "209px",
    minWidth: "100px !important",
    paddingLeft: 8,
    fontSize: 12,
    "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd.MuiInputAdornment-outlined.MuiInputAdornment-sizeMedium ": {
      position: "absolute",
      left: -10
    },
    "& .MuiSvgIcon-root": { color: "#ffffff", width: 15 },
    "& .MuiOutlinedInput-input": {
      color: "#ffffff",
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 19,
      letterSpacing: 0,
      fontStyle: "normal",
      textAlign: "left",
      padding: "5px 0px 5px 30px"
    },
    "&.MuiInputAdornment-positionEnd": {
      color: "#ffffff"
    }
  },

  /* table styling */
  table: {
    minWidth: 700
  },
  tableRow: {
    "&$selected, &$selected:hover": {
      backgroundColor: "#148291 !important"
    }
  },
  tableCell: {
    border: 0,
    borderBottom: "none",
    "$selected &": {
      color: "white"
    }
  },
  hover: {},
  selected: {}
});
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    padding: 8,
    // paddingTop: 0,
    // paddingBottom: 0,
    border: 0,
    color: theme.palette.common.white
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  padding: "0 20px",
  "&:nth-of-type(odd)": {
    //  backgroundColor: theme.palette.action.hover,
    backgroundColor: "#121212"
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#232425"
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

const MenuProps = {
  PaperProps: {
    sx: {
      // bgcolor: "pink",
      "& .css-6hp17o-MuiList-root-MuiMenu-list": {
        padding: 0,
        borderRadius: 10,
        backgroundColor: "#3D4044"
      },
      "& .MuiList-root.MuiList-padding.MuiMenu-list": {
        padding: 0,
        width: "auto",
        /* height: 105px; */
        /* left: 553px; */
        background: "#3D4044",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 8
      }
    }
  }
};
const eventnames = [
  "Assignments & Circuits ",
  "Map Editing",
  "Notifications",
  "Asset Health ",
  "Assset Config",
  "User Config"
];
const actionnames = ["Update ", "Delete", "Asset loading"];
const names = ["Oliver ", "Wilson", "April", "Ralph "];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        //p: 1,
        //m: 1,
        // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.500'),
        color: "#ffffff",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "40px",
        letterSpacing: 0,
        textAlign: "left",
        border: 0,
        border: "1px solid red",
        margin: "auto 0",
        padding: 0
        // ...sx
      }}
      {...other}
    />
  );
}
function Item1(props: BoxProps) {
  const { sx, ...other } = props;

  return (
    <Box
      sx={{
        // p: 1,
        m: 1,
        // bgcolor: (theme) =>
        //   theme.palette.mode === "dark" ? "#101010" : "grey.100",
        // color: (theme) =>
        //   theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        color: "#ffffff",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "19px",
        letterSpacing: 0,
        textAlign: "left",
        ...sx
      }}
      {...other}
    />
  );
}
const StackItem = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  background: "transparent",
  padding: theme.spacing(1),
  textAlign: "left",
  fontSize: 12,
  color: "#fff"
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // borderRadius: theme.shape.borderRadius,
  //backgroundColor: alpha(theme.palette.common.white, 0.15),
  background: "#28292B",
  borderRadius: "6px",
  "&:hover": {
    // backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  height: 24,
  [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    //padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: 12
  }
}));
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(0)
  },
  "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
    color: "#fff"
  },
  "& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon": {
    color: "#fff"
  },
  "& .MuiInputBase-input": {
    borderRadius: "6px",
    position: "relative",
    backgroundColor: "#28292B",
    fontFamily: "Roboto",
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0em",
    padding: 0,
    color: "#fff",
    "&:focus": {
      borderRadius: "6px"
    }
  }
}));

export default function DetailPage() {
  const theme = createTheme();

  /* go back to landing page */
  const [value, setValue] = React.useState(true);
  /* sipnner */
  const [isLoading, setIsLoading] = React.useState(false);
  const showSpinner = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    // setIsLoading(true);
    // fetch("https://reqres.in/api/users?page=0")
    //   .then((respose) => respose.json())
    //   .then((respose) => {
    //     setUsers(respose.data)
    //  });
  };
  /* for calender */
  const [fromDate, setFromDate] = React.useState<Dayjs | null>(
    dayjs("2023-04-17T15:30")
  );
  console.log("new date selected is", fromDate);
  const [ToDate, setToDate] = React.useState<Dayjs | null>(
    dayjs("2023-04-17T15:30")
  );
  console.log("new date selected is", ToDate);
  /*on table row click */
  const [selectedID, setSelectedID] = React.useState(0);
  console.log({ selectedID });
  /* for select boxes */
  const [eventName, setEventName] = React.useState<string[]>([]);

  const handleChangeEventName = (
    event: SelectChangeEvent<typeof eventName>
  ) => {
    const {
      target: { value }
    } = event;
    setEventName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  /* for select boxes */
  const [actionName, setActionName] = React.useState<string[]>([]);

  const handleChangeActionName = (
    event: SelectChangeEvent<typeof actionName>
  ) => {
    const {
      target: { value }
    } = event;
    setActionName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  /*for chip */
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  /*for chip */
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const classes = useStyles();
  return (
    <>
      <React.Fragment>
        {value === true ? (
          <>
            {/* detail page start  */}
            <div style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <Item1
                  sx={{
                    width: "70%",
                    //width: 1168,
                    background: "#52575D"
                  }}
                >
                  <Box
                    sx={{
                      // display: "flex",
                      // flexDirection: "row",
                      // justifyContent: "space-between",
                      maxHeight: 939,
                      height: "100%"
                      // border: "1px solid red"
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        p: 0,
                        padding: "0 20px"
                      }}
                    >
                      <Item>
                        <Typography className="subHeading" component="div">
                          Audit results
                        </Typography>
                      </Item>
                      <Item>
                        <Typography
                          component="div"
                          sx={{
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "19px"
                          }}
                        >
                          {rows.length} records found
                        </Typography>
                      </Item>
                      <Item>
                        <div>
                          <Button
                            sx={{ p: 0 }}
                            onClick={showSpinner}
                            disabled={isLoading}
                          >
                            <SyncIcon sx={{ color: "#fff" }} fontSize="small" />
                          </Button>
                        </div>
                      </Item>
                      <Item>
                        <Button
                          type="submit"
                          size="small"
                          variant="outlined"
                          className="btn-secondary"
                          onClick={() => setValue(!value)}
                          startIcon={<ArrowBackIcon fontSize="small" />}
                        >
                          <Typography variant="caption">New Query</Typography>
                        </Button>
                      </Item>
                      <Item>
                        <Tooltip
                          title="Export to Excel"
                          placement="right-start"
                        >
                          <Button sx={{ p: 0 }}>
                            <DownloadIcon
                              sx={{ color: "#fff" }}
                              fontSize="medium"
                            />
                          </Button>
                        </Tooltip>
                      </Item>
                    </Box>
                    <Box
                      sx={{
                        background: "#3D4044",
                        padding: "0 12px"
                        //height: 100,
                        // minHeight:90
                      }}
                    >
                      <Stack
                        direction={{
                          xs: "column",
                          sm: "row",
                          md: "row",
                          lg: "row"
                        }}
                        spacing={{ xs: 1, sm: 2, md: 3, lg: 2 }}
                      >
                        <StackItem>
                          <Stack>
                            <Typography variant="caption">
                              Date{" "}
                              <ArrowDownwardIcon
                                sx={{ fontSize: 12 }}
                                fontSize="small"
                              />
                            </Typography>

                            <Stack
                              direction="row"
                              spacing={0}
                              sx={{
                                height: 24,
                                bgcolor: "#28292B",
                                borderRadius: "6px",
                                padding: "0 !important",
                                overflow: "hidden"
                              }}
                            >
                              <Box display="flex" flex-direction="row">
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <DemoContainer
                                    sx={{
                                      // border: "1px solid yellow",
                                      height: 24,
                                      overflow: "hidden",
                                      padding: 0,
                                      borderRadius: "6px"
                                    }}
                                    components={[
                                      "DateTimePicker",
                                      "DateTimePicker"
                                    ]}
                                  >
                                    <DateTimePicker
                                      //inputFormat="DD/MM/YY"
                                      sx={{ backgroundColor: "#28292B" }}
                                      className={classes.root1}
                                      label=""
                                      value={fromDate}
                                      onChange={(newValue) =>
                                        setFromDate(newValue)
                                      }
                                      components={{
                                        OpenPickerIcon: CalendarTodayOutlinedIcon
                                      }}
                                    />
                                  </DemoContainer>
                                </LocalizationProvider>
                                {/* <Box>{"-"}</Box> */}
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <DemoContainer
                                    components={[
                                      "DateTimePicker",
                                      "DateTimePicker"
                                    ]}
                                    sx={{
                                      // border: "1px solid yellow",
                                      borderRadius: "6px",
                                      height: 24,
                                      overflow: "hidden",
                                      padding: 0
                                    }}
                                  >
                                    <DateTimePicker
                                      //inputFormat="DD/MM/YY"
                                      sx={{ backgroundColor: "#28292B" }}
                                      className={classes.root1}
                                      label=""
                                      value={fromDate}
                                      onChange={(newValue) =>
                                        setFromDate(newValue)
                                      }
                                      components={{
                                        OpenPickerIcon: CalendarTodayOutlinedIcon
                                      }}
                                    />
                                  </DemoContainer>
                                </LocalizationProvider>
                              </Box>
                            </Stack>
                          </Stack>
                        </StackItem>
                        <StackItem>
                          <Typography variant="caption">ID</Typography>
                          <Search>
                            <SearchIconWrapper>
                              <SearchIcon fontSize="small" />
                            </SearchIconWrapper>
                            <StyledInputBase
                              // placeholder="Search…"
                              inputProps={{ "aria-label": "search" }}
                            />
                          </Search>
                        </StackItem>
                        <StackItem>
                          <Typography
                            variant="caption"
                            id="demo-multiple-chip-label"
                          >
                            Event Types
                            <div>
                              <FormControl sx={{ m: 0, width: 150 }}>
                                <Select
                                  labelId="demo-multiple-chip-label"
                                  id="demo-multiple-chip"
                                  multiple
                                  value={personName}
                                  input={<BootstrapInput />}
                                  onChange={handleChange}
                                  sx={{ padding: 0, borderRadius: 6 }}
                                  renderValue={(selected) => (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 0.5
                                      }}
                                    >
                                      {selected.map((value) => (
                                        <Chip
                                          key={value}
                                          label={value}
                                          sx={{
                                            // background: "#00A3BF",
                                            padding: "2px 4px",
                                            backgroundColor: "#148291",
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            lineHeight: "24px",
                                            height: 20,
                                            color: "#fff",
                                            borderRadius: "4px",
                                            fontSize: 12,
                                            "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                                              fontSize: 12,
                                              color: "#fff"
                                            }
                                          }}
                                          onClick={handleClick}
                                          onDelete={handleDelete}
                                        />
                                      ))}
                                    </Box>
                                  )}
                                  MenuProps={MenuProps}
                                >
                                  {eventnames.map((name) => (
                                    <MenuItem
                                      className={classes.root}
                                      key={name}
                                      value={name}
                                      style={getStyles(name, eventName, theme)}
                                    >
                                      {name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </div>
                          </Typography>{" "}
                        </StackItem>
                        <StackItem>
                          <Typography variant="caption">Action</Typography>
                          {/* <Search>
                            <SearchIconWrapper>
                              <FilterAltOutlinedIcon fontSize="small" />
                            </SearchIconWrapper>
                            <StyledInputBase
                              // placeholder="Search…"
                              inputProps={{ "aria-label": "search" }}
                            />
                          </Search> */}
                          <FormControl sx={{ m: 0, width: 120 }}>
                            <Select
                              labelId="demo-multiple-chip-label"
                              id="demo-multiple-chip"
                              multiple
                              value={actionName}
                              input={<BootstrapInput />}
                              onChange={handleChangeActionName}
                              sx={{ padding: 0, borderRadius: 6 }}
                              renderValue={(selected) => (
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5
                                  }}
                                >
                                  {selected.map((value) => (
                                    <Chip
                                      key={value}
                                      label={value}
                                      sx={{
                                        // background: "#00A3BF",
                                        padding: "2px 4px",
                                        backgroundColor: "#148291",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        lineHeight: "24px",
                                        height: 20,
                                        color: "#fff",
                                        borderRadius: "4px",
                                        fontSize: 12,
                                        "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                                          fontSize: 12,
                                          color: "#fff"
                                        }
                                      }}
                                      onClick={handleClick}
                                      onDelete={handleDelete}
                                    />
                                  ))}
                                </Box>
                              )}
                              MenuProps={MenuProps}
                            >
                              {actionnames.map((name) => (
                                <MenuItem
                                  className={classes.root}
                                  key={name}
                                  value={name}
                                  style={getStyles(name, actionnames, theme)}
                                >
                                  {name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </StackItem>
                        <StackItem>
                          <Typography variant="caption">Entity</Typography>
                          <Search>
                            <SearchIconWrapper>
                              <SearchIcon fontSize="small" />
                            </SearchIconWrapper>
                            <StyledInputBase
                              // placeholder="Search…"
                              inputProps={{ "aria-label": "search" }}
                            />
                          </Search>
                        </StackItem>
                        <StackItem>
                          <Typography variant="caption">User</Typography>
                          <Search>
                            <SearchIconWrapper>
                              <SearchIcon fontSize="small" />
                            </SearchIconWrapper>
                            <StyledInputBase
                              // placeholder="Search…"
                              inputProps={{ "aria-label": "search" }}
                            />
                          </Search>
                        </StackItem>
                      </Stack>
                    </Box>
                    {isLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <>
                        <Box>
                          <Paper
                            square
                            sx={{
                              width: "100%",
                              overflow: "hidden",
                              borderRadius: 0,
                              backgroundColor: "#52575D",
                              minHeight: 450
                            }}
                          >
                            <TableContainer
                              component={Paper}
                              //sx={{ maxHeight: 340 }}
                            >
                              <Table
                                sx={{ minWidth: 700, minHeight: 0 }}
                                aria-label="customized table"
                              >
                                {/* <TableHead>
                                  <TableRow>
                                    <StyledTableCell>Date</StyledTableCell>
                                    <StyledTableCell align="left">
                                      ID
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                      Entity Type
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                      Entity
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                      Action
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                      User
                                    </StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                  </TableRow>
                                </TableHead> */}
                                <TableBody sx={{ maxHeight: 120 }}>
                                  {rows.map((row) => (
                                    <StyledTableRow
                                      //key={row.date}
                                      // onClick={() => setSelectedRow(!selectedRow)}
                                      key={row.id}
                                      onClick={() => {
                                        setSelectedID(row.id);
                                        console.log(
                                          "selected row is",
                                          selectedID
                                        );
                                      }}
                                      selected={selectedID === row.id}
                                      classes={{
                                        hover: classes.hover,
                                        selected: classes.selected
                                      }}
                                      className={classes.tableRow}
                                      // classes={{
                                      //   root: classes.tableRowRoot,
                                      //   selected: classes.tableRowSelected
                                      // }}
                                      sx={{
                                        "&:last-child td, &:last-child th": {
                                          border: 0
                                        }
                                      }}
                                    >
                                      <StyledTableCell
                                        component="th"
                                        scope="row"
                                        width="100px"
                                      >
                                        {row.date}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
                                        {row.id}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
                                        {row.entityType}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
                                        {row.entity}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
                                        {row.action}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
                                        {row.user}
                                      </StyledTableCell>
                                      {/* <StyledTableCell align="left">
                                    <MoreVertIcon
                                      sx={{ }}
                                      fontSize="small"
                                    />
                                  </StyledTableCell> */}
                                    </StyledTableRow>
                                  ))}
                                </TableBody>
                                {/* <TableFooter>
                          <TableRow>
                            <TablePagination
                              rowsPerPageOptions={
                                [
                                  // 5,
                                  // 10,
                                  // 25,
                                  // { label: "All", value: -1 }
                                ]
                              }
                              colSpan={8}
                              count={rows.length}
                              rowsPerPage={rowsPerPage}
                              page={page}
                              SelectProps={{
                                inputProps: {
                                  "aria-label": "rows per page"
                                },
                                native: true
                              }}
                              onPageChange={handleChangePage}
                              onRowsPerPageChange={handleChangeRowsPerPage}
                              ActionsComponent={TablePaginationActions}
                            />
                          </TableRow>
                        </TableFooter> */}
                              </Table>
                            </TableContainer>
                          </Paper>
                          <Box
                            sx={{
                              backgroundColor: "#52575D",
                              "&  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
                                color: "#ffffff",
                                backgroundColor: "#148291",
                                borderRadius: 1
                              }
                            }}
                            //m={1}
                            p={1}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Pagination
                              sx={{ textAlign: "center" }}
                              count={1}
                              showFirstButton
                              showLastButton
                            />
                          </Box>
                        </Box>
                      </>
                    )}
                  </Box>
                </Item1>
                <Item1
                  sx={{
                    width: "30%",
                    //width: 388,
                    height: 371,
                    boxSizing: "border-box",
                    // position: absolute;
                    // width: 388px;
                    minHeight: 371,
                    border: "1px solid #3D4044"
                  }}
                >
                  <Paper
                    variant="outlined"
                    sx={{
                      backgroundColor: "transparent",
                      // borderColor: "#3d444e",
                      color: "#fff",
                      textAlign: "center"
                    }}
                  >
                    {selectedID === 0 ? (
                      <>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          //minHeight="80vh"
                          sx={{
                            color: "#ffffff"
                            //margin: "0 auto"
                          }}
                        >
                          {/* <img src="./info-square.png" width = '12px' alt="" /> */}
                          <Typography
                            variant="body2"
                            component="div"
                            display="block"
                            sx={{ p: 1 }}
                          >
                            Select a row to see more details
                          </Typography>
                        </Box>
                      </>
                    ) : (
                      <>
                        <Typography
                          mt={1}
                          variant="body2"
                          component="div"
                          display="block"
                          // sx={{ color: "#148291" }}
                        >
                          Record with ID {selectedID} is selected
                        </Typography>
                        <DetailPanelView />
                      </>
                    )}
                  </Paper>
                </Item1>
              </Box>
            </div>
            {/* detail page end  */}
          </>
        ) : (
          <LandingPage />
        )}
      </React.Fragment>
    </>
  );
}
