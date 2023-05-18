import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Theme, useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import DetailPage from "./detail";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
const theme = createTheme();
const useStyles = makeStyles({
  select: {
    "& ul": {
      padding: 0
    },
    "& li": {
      fontSize: 62
    }
  },

  root: {
    height: 30,
    //width: 200,
    paddingTop: 0,
    margin: 0,
    borderRadius: 20,
    color: "#fff !important",
    backgroundColor: "#3D4044 !important",
    fontSize: "12px !important",
    "& ul.MuiList-root.MuiList-padding.MuiMenu-list.css-6hp17o-MuiList-root-MuiMenu-list": {},
    "& .css-6hp17o-MuiList-root-MuiMenu-list": {},
    "&:hover": {
      color: "#fff",
      backgroundColor: "#148291 !important"
    },
    "&:selected": {
      color: "#fff"
      // backgroundColor: "red"
    },
    "& .css-w6qulv-MuiInputBase-root .MuiInputBase-input:focus": {}
  },
  root1: {
    backgroundColor: "#3D4044",
    background: "#3D4044",
    borderRadius: "20px",
    //height: "40px",
    width: "209px",
    minWidth: "209px !important",
    paddingLeft: 8,
    fontSize: 8,
    "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd.MuiInputAdornment-outlined.MuiInputAdornment-sizeMedium ": {
      position: "absolute",
      left: 0
    },
    // color: "success.main",
    "& .MuiSvgIcon-root": { color: "#ffffff", width: 15 },
    "&:hover": {
      // color: "red",
      // backgroundColor: "blue"
    },
    "& .MuiOutlinedInput-input": {
      color: "#ffffff",
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 19,
      letterSpacing: 0,
      textAlign: "left",
      // paddingLeft: 40,
      padding: "10px 20px 10px 40px"
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
    // " & .MuiFormControl-root.MuiTextField-root.makeStyles-root1-63.css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
    //   width: 209,
    //   maxWidth: 209,
    //   overflowX: "hidden",
    //   overflowY: "hidden",
    //   minWidth: 209
    // },
    // "&  .MuiStack-root.css-nen11g-MuiStack-root .MuiStack-root .MuiFormControl-root.MuiTextField-root.makeStyles-root1-123": {
    //   background: "pink"
    //   //  min-width: 209px;
    //   // max-width: 209px;
    //   // overflow-x: hidden;
    //   // overflow-y: hidden;
    // }
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "25ch"
  }
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
        width: "426px",
        /* height: 105px; */
        /* left: 553px; */
        background: "#3D4044",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 8
      }
    }
  }
};

const names = [
  "Oliver ",
  "Wilson",
  "April",
  "Ralph "
  // "Omar",
  // "Carlos Abbott",
  // "Miriam ",
  // "Bradley",
  // "Virginia ",
  // "Kelly"
];
const eventnames = [
  "Assignments & Circuits ",
  "Map Editing",
  "Notifications",
  "Asset Health ",
  "Assset Config",
  "User Config"
];
const entitynames = ["E1 ", "E2", "E3", "E4"];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
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
    //padding: "10px 26px 10px 12px",
    // transition: theme.transitions.create(["border-color", "box-shadow"]),
    // fontFamily: [
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    // ].join(','),
    "&:focus": {
      borderRadius: 20
      //  borderColor: "#80bdff",
      //  boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    },
    "&:after": {
      // color: 'red',
    }
  }
}));
export default function LandingPage() {
  const theme = useTheme();
  const classes = useStyles();

  /* for calender */
  const [fromDate, setFromDate] = React.useState<Dayjs | null>(
    dayjs("2023-04-17T15:30")
  );
  console.log("new date selected is", fromDate);
  const [ToDate, setToDate] = React.useState<Dayjs | null>(
    dayjs("2023-04-17T15:30")
  );
  console.log("new date selected is", ToDate);

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
  const [entityName, setEntityName] = React.useState<string[]>([]);

  const handleChangeEntityName = (
    event: SelectChangeEvent<typeof entityName>
  ) => {
    const {
      target: { value }
    } = event;
    setEntityName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
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
  /* start query button */
  const [value, setValue] = React.useState(false);
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container maxWidth="lg" sx={{ bgcolor: "pink" }}> */}

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
          {value === true ? (
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
                <Box
                  sx={{
                    width: 426,
                    border: "1px solid yellow",
                    textAlign: "left",
                    marginTop: 8
                  }}
                >
                  <Stack spacing={2}>
                    {/* <Typography className="subHeading" guterBottom>
                      New audit query
                    </Typography>
                    <Typography className="title" gutterBottom>
                      Select a date range
                    </Typography> */}
                    <Typography component="h5" variant="h5">
                      New audit query
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Select a date range
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Stack spacing={0}>
                        {/* <Typography className="subTitle" gutterBottom>
                          From
                        </Typography> */}
                        <Typography variant="caption" gutterBottom>
                          From
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            sx={{ width: 209, fontSize: 8 }}
                            components={["DateTimePicker", "DateTimePicker"]}
                          >
                            <DateTimePicker
                              className={classes.root1}
                              //  label="Controlled picker"
                              value={fromDate}
                              onChange={(newValue) => setFromDate(newValue)}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Stack>
                      <Stack spacing={0}>
                        {/* <Typography className="subTitle" gutterBottom>
                          To
                        </Typography> */}
                        <Typography variant="caption" gutterBottom>
                          To
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            sx={{ width: 209, fontSize: 8 }}
                            components={["DateTimePicker", "DateTimePicker"]}
                          >
                            <DateTimePicker
                              className={classes.root1}
                              //  label="Controlled picker"
                              value={ToDate}
                              onChange={(newValue) => setToDate(newValue)}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Stack>
                    </Stack>
                    <FormControl sx={{ m: 1, width: 426 }}>
                      {/* <Typography className="title" gutterBottom>
                        Select type of event or activity
                      </Typography> */}
                      <Typography mb={1} variant="subtitle2" gutterBottom>
                        Select type of event or activity
                      </Typography>
                      <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={eventName}
                        onChange={handleChangeEventName}
                        input={<BootstrapInput />}
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
                                onClick={handleClick}
                                onDelete={handleDelete}
                                sx={{
                                  backgroundColor: "#148291",
                                  color: "#fff",
                                  "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                                    fontSize: 15,
                                    color: "#fff"
                                  }
                                }}
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

                    <FormControl sx={{ m: 1, width: 426 }}>
                      {/* <Typography className="title" gutterBottom>
                        Select entity or asset
                      </Typography> */}
                      <Typography mb={1} variant="subtitle2" gutterBottom>
                        Select entity or asset
                      </Typography>
                      <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={entityName}
                        onChange={handleChangeEntityName}
                        input={<BootstrapInput />}
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
                                onClick={handleClick}
                                onDelete={handleDelete}
                              />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                        {entitynames.map((name) => (
                          <MenuItem
                            className={classes.root}
                            key={name}
                            value={name}
                            style={getStyles(name, entityName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 426 }}>
                      {/* <Typography className="title" gutterBottom>
                        Select users
                      </Typography> */}
                      <Typography mb={1} variant="subtitle2" gutterBottom>
                        Select users
                      </Typography>
                      {/* <InputLabel sx={{ }} id="demo-multiple-chip-label">Select users</InputLabel>  */}
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
                                onClick={handleClick}
                                onDelete={handleDelete}
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
                            style={getStyles(name, personName, theme)}
                            className={classes.root}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Box pt={2} display="flex" justifyContent="flex-end">
                      <Button
                        className="btn"
                        type="submit"
                        //fullWidth
                        variant="contained"
                        sx={{
                          "&:hover": {
                            backgroundColor: "none"
                          }
                        }}
                        onClick={() => setValue(!value)}
                      >
                        START QUERY
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </>
          ) : (
            // <h1> detail screen</h1>
            <DetailPage />
          )}
        </Box>
      </div>
      {/* </Container> */}
    </React.Fragment>
  );
}
