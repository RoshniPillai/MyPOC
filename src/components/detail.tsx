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

import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DownloadIcon from "@mui/icons-material/Download";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AuditLogTable from "./auditTable";
const useStyles = makeStyles({
  root: {
    height: 30,
    //width: 200,
    padding: 0,
    margin: 0,
    color: "#fff !important",
    fontSize: "12px !important",
    backgroundColor: "#616161 !important",
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
    //width: 10,
    backgroundColor: "",
    "&:hover": {
      // color: "red",
      // backgroundColor: "blue"
    },
    "& .MuiOutlinedInput-input": {
      color: "#ffffff",
      fontSize: "0.85rem",
      width: 110,
      padding: 8
    },
    "&.MuiInputAdornment-positionEnd": {
      color: "#ffffff"
    },
    //MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-1laqsz7-MuiInputAdornment-root
    "& .MuiInputLabel-root": {
      // color: "green"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      //  borderColor: "green"
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
    "$selected &": {
      color: "white"
    }
  },
  hover: {},
  selected: {}
});
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
        lineHeight: "19px",
        letterSpacing: 0,
        textAlign: "left",

        // fontSize: "0.875rem",
        // fontWeight: "700",
        border: 0
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
const StackItem = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  background: "#28292B",
  padding: theme.spacing(1),
  textAlign: "left",
  fontSize: 12,
  color: "#fff"
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  height: 30,
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
    fontSize: 13
  }
}));
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3)
  },
  "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
    color: "#fff"
  },
  "& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon": {
    color: "#fff"
  },
  "& .MuiInputBase-input": {
    borderRadius: "20px",
    position: "relative",
    backgroundColor: "#3D4044",
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    color: "#fff",
    "&:focus": {
      borderRadius: 20
    }
  }
}));
const theme = createTheme();

export default function DetailPage() {
  /*on table row click */
  const [selectedID, setSelectedID] = React.useState(0);
  console.log({ selectedID });

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
  const classes = useStyles();
  return (
    <>
      <React.Fragment>
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#000"
          }}
        >
          <Box
            sx={{
              bgcolor: "#232425",
              width: "80%",
              minHeight: "100vh",
              maxHeight: "100vh"
            }}
          >
            <Box
              sx={{
                background: "#148291",
                borderRadius: "4px 4px 0px 0px",
                height: "30px"
              }}
            >
              {/* <Typography className="heading" sx={{ p: 1, color: "#ffffff" }} >
              AUDIT
            </Typography> */}
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  textTransform: "uppercase",
                  fontSize: 16,
                  fontWeight: 700,
                  // lineHeight: 19,
                  // letterSpacing: 0,
                  textAlign: "left",

                  // margin: 0,
                  // height: "",
                  paddingLeft: 1,
                  color: "#fff"
                }}
              >
                AUDIT
              </Typography>
            </Box>
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
                          border: "1px solid red"
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            p: 1
                          }}
                        >
                          <Item>
                            <Typography variant="subtitle2" gutterBottom>
                              Audit results
                            </Typography>
                          </Item>
                          <Item>
                            <Typography variant="subtitle2" gutterBottom>
                              9 records found
                            </Typography>
                          </Item>
                          <Item>
                            <div>
                              <Button
                                sx={{ p: 0 }}
                                //onClick={handleClick}
                              >
                                <AutorenewIcon
                                  sx={{ color: "#fff" }}
                                  fontSize="small"
                                />
                              </Button>
                              {/* <Snackbar
                              open={open}
                              autoHideDuration={6000}
                              onClose={handleClose}
                              message="Table is being refreshed"
                              action={action}
                            /> */}
                            </div>
                          </Item>
                          <Item>
                            <Button
                              type="submit"
                              size="small"
                              variant="outlined"
                              sx={{
                                backgroundColor: "transparent",
                                color: "#fff",
                                borderColor: "#fff"
                              }}
                              // onClick={() => setValue(!value)}
                              startIcon={<ArrowBackIcon fontSize="small" />}
                            >
                              <Typography variant="caption">
                                New Query
                              </Typography>
                            </Button>
                          </Item>
                          <Item>
                            <DownloadIcon sx={{}} fontSize="small" />
                          </Item>
                        </Box>
                        <Box
                          sx={{
                            background: "#232425",
                            //height: 100,
                            minHeight: 100
                          }}
                        >
                          <Stack
                            direction={{
                              xs: "column",
                              sm: "row",
                              md: "row",
                              lg: "row"
                            }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
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
                                DateTime
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
                                  <FormControl sx={{ m: 0, width: 100 }}>
                                    <Select
                                      labelId="demo-multiple-chip-label"
                                      id="demo-multiple-chip"
                                      multiple
                                      value={personName}
                                      input={<BootstrapInput />}
                                      onChange={handleChange}
                                      // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
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
                                                backgroundColor: "#148291",
                                                color: "#fff",
                                                "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                                                  fontSize: 15,
                                                  color: "#fff"
                                                }
                                              }}
                                              // onClick={handleClick}
                                              // onDelete={handleDelete}
                                            />
                                          ))}
                                        </Box>
                                      )}
                                      MenuProps={MenuProps}
                                    >
                                      {names.map((name) => (
                                        <MenuItem
                                          key={name}
                                          value={name}
                                          style={getStyles(
                                            name,
                                            personName,
                                            theme
                                          )}
                                          className={classes.root}
                                        >
                                          {name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                    {/* <Select
                                     
                                      labelId="demo-multiple-chip-label"
                                      id="demo-multiple-chip"
                                      multiple
                                      value={personName}
                                      onChange={handleChange}
                                      input={
                                        <OutlinedInput
                                          id="select-multiple-chip"
                                          label="Chip"
                                        />
                                      }
                                      renderValue={(selected) => (
                                        <Box
                                          sx={{
                                            //backgroundColor: alpha(theme.palette.common.white, 0.15),
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
                                                backgroundColor: "#148291",
                                                color: "#fff"
                                              }}
                                            />
                                          ))}
                                        </Box>
                                      )}
                                      MenuProps={MenuProps}
                                    >
                                      {names.map((name) => (
                                        <MenuItem
                                          key={name}
                                          value={name}
                                          style={getStyles(
                                            name,
                                            personName,
                                            theme
                                          )}
                                        >
                                          {name}
                                        </MenuItem>
                                      ))}
                                    </Select> */}
                                  </FormControl>
                                </div>
                              </Typography>{" "}
                            </StackItem>
                            <StackItem>
                              <Typography variant="caption">Action</Typography>
                              <Search>
                                <SearchIconWrapper>
                                  <FilterAltOutlinedIcon fontSize="small" />
                                </SearchIconWrapper>
                                <StyledInputBase
                                  // placeholder="Search…"
                                  inputProps={{ "aria-label": "search" }}
                                />
                              </Search>
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
                              table row with ID {selectedID} is selected
                            </Typography>

                            {/* <DetailsTab /> */}
                          </>
                        )}
                      </Paper>
                    </Item1>
                  </Box>
                </div>
                {/* detail page end  */}
              </Box>
            </>
          </Box>
        </div>
      </React.Fragment>
    </>
  );
}
