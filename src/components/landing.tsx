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
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import DetailPage from "./detail";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
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
    //padding: '10px',
    //paddingLeft: 20,
    backgroundColor: "#616161 !important",
    "& ul.MuiList-root.MuiList-padding.MuiMenu-list.css-6hp17o-MuiList-root-MuiMenu-list": {
      // paddingTop: "0 !important"
    },
    "& .css-6hp17o-MuiList-root-MuiMenu-list": {
      //paddingTop: "100 !important"
    },
    "&:hover": {
      color: "#fff",
      backgroundColor: "#148291 !important"
    },
    "&:selected": {
      color: "#fff"
      // backgroundColor: "red"
    },
    "& .css-w6qulv-MuiInputBase-root .MuiInputBase-input:focus": {
      //  boxShadow: 0
    }
  },
  root1: {
    backgroundColor: "#616161",
    "&:hover": {
      // color: "red",
      // backgroundColor: "blue"
    },
    "& .MuiOutlinedInput-input": {
      color: "#ffffff"
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
    style: {
      //color: "red",
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Oliver ",
  "Wilson",
  "April",
  "Ralph ",
  "Omar",
  "Carlos Abbott",
  "Miriam ",
  "Bradley",
  "Virginia ",
  "Kelly"
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
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
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
  const [value, setValue] = React.useState(true);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#232425", height: "100vh" }}>
          <Box
            sx={{
              background: "#148291",
              // borderRadius: "4px 4px 0px 0px",
              height: "30px"
            }}
          >
            <Typography className="heading" sx={{ pl: 1, color: "#ffffff" }}>
              AUDIT
            </Typography>
          </Box>
          {value === true ? (
            <>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                sx={{ color: "#ffffff" }}
              >
                <Box
                // sx={{ width: "100%" }}
                >
                  <Stack
                    spacing={2}
                    sx={{ border: "1px solid red", textAlign: "left" }}
                  >
                    <Typography className="subHeading" gutterBottom>
                      New audit query
                    </Typography>
                    <Typography className="title" gutterBottom>
                      Select a date range
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Stack spacing={0}>
                        <Typography className="subTitle" gutterBottom>
                          From
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            sx={{
                              color: "#fff",
                              borderRadius: 8,
                              padding: 0
                            }}
                            components={["DateTimePicker", "DateTimePicker"]}
                          >
                            <DateTimePicker
                              sx={{
                                background: "#3D4044",
                                borderRadius: "20px",
                                height: "40px",
                                width: "426px",
                                color: "success.main",
                                "& .MuiSvgIcon-root": { color: "#ffffff" }
                              }}
                              className={classes.root1}
                              //  label="Controlled picker"
                              value={fromDate}
                              onChange={(newValue) => setFromDate(newValue)}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Stack>
                      <Stack spacing={0}>
                        <Typography className="subTitle" gutterBottom>
                          To
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            sx={{
                              // backgroundColor: "pink",
                              color: "#fff",
                              borderRadius: 8,
                              padding: 0
                            }}
                            components={["DateTimePicker", "DateTimePicker"]}
                          >
                            <DateTimePicker
                              sx={{
                                width: 300,
                                color: "success.main",
                                "& .MuiSvgIcon-root": {
                                  color: "#ffffff"
                                }
                              }}
                              className={classes.root1}
                              //  label="Controlled picker"
                              value={ToDate}
                              onChange={(newValue) => setToDate(newValue)}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Stack>
                    </Stack>
                    <FormControl
                      sx={{ m: 1, width: 426, height: 40, padding: 0 }}
                    >
                      <Typography className="title" gutterBottom>
                        Select type of event or activity
                      </Typography>
                      {/* <InputLabel sx={{ }} id="demo-multiple-chip-label">Select users</InputLabel>  */}
                      <Select
                        sx={{
                          backgroundColor: alpha(
                            theme.palette.common.white,
                            0.15
                          )
                        }}
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={eventName}
                        onChange={handleChangeEventName}
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
                                  color: "#fff"
                                }}
                              />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                        {eventnames.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, eventName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, width: 300 }}>
                      <Typography className="title" gutterBottom>
                        Select entity or asset
                      </Typography>
                      <Select
                        sx={{
                          backgroundColor: alpha(
                            theme.palette.common.white,
                            0.15
                          )
                        }}
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={entityName}
                        onChange={handleChangeEntityName}
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
                                  color: "#fff"
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
                            key={name}
                            value={name}
                            style={getStyles(name, entityName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 300 }}>
                      <Typography className="title" gutterBottom>
                        Select users
                      </Typography>
                      {/* <InputLabel sx={{ }} id="demo-multiple-chip-label">Select users</InputLabel>  */}
                      <Select
                        // sx={{
                        //   backgroundColor: alpha(
                        //     theme.palette.common.white,
                        //     0.15
                        //   )
                        //   // "&:hover": {
                        //   //   backgroundColor: alpha(
                        //   //     theme.palette.common.white,
                        //   //     0.25
                        //   //   )
                        //   // }
                        // }}
                        sx={{
                          border: 0,
                          //width: 300,
                          // color: 'success.main',
                          "& #demo-customized-select": {
                            border: 0,
                            borderRadius: 8
                          },
                          "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                            color: "#fff"
                          },
                          "& .MuiSelect-iconOpen": {
                            display: "block",
                            color: "#fff"
                          }
                        }}
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={personName}
                        // input={<BootstrapInput />}
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
                                  color: "#fff"
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
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormControl sx={{ m: 0, width: 426 }} variant="standard">
                        <Select
                          sx={{
                            border: 0,
                            //width: 300,
                            // color: 'success.main',
                            "& #demo-customized-select": {
                              border: 0,
                              borderRadius: 8
                            },
                            "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                              color: "#fff"
                            },
                            "& .MuiSelect-iconOpen": {
                              display: "block",
                              color: "#fff"
                            }
                          }}
                          className={classes.root}
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          // value={age}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                // bgcolor: "pink",
                                "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                                  padding: 0,
                                  borderRadius: 10
                                }
                                // "& .MuiMenuItem-root": {
                                //   padding: 2
                                // }
                              }
                            }
                          }}
                        >
                          <MenuItem
                            // sx={{
                            //   "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                            //     backgroundColor: "red",
                            //     padding: 0
                            //   },
                            //   "& ul.MuiList-root": {
                            //     backgroundColor: "red",
                            //     padding: 0
                            //   },
                            //   "& .MuiList-padding": {
                            //     backgroundColor: "red",
                            //     padding: 0
                            //   },
                            //   "& .MuiMenu-list": {
                            //     backgroundColor: "red",
                            //     padding: 0
                            //   }
                            // }}
                            className={classes.root}
                            value="{1}"
                          >
                            User 1
                          </MenuItem>
                          <MenuItem className={classes.root} value={2}>
                            User 2
                          </MenuItem>
                          <MenuItem className={classes.root} value={3}>
                            User 3
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </FormControl>
                    <Button
                      type="submit"
                      //fullWidth
                      variant="contained"
                      sx={{ mt: 2, mb: 2, backgroundColor: "#148291" }}
                      onClick={() => setValue(!value)}
                    >
                      START QUERY
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </>
          ) : (
            // <h1> detail screen</h1>
            <DetailPage />
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
}
