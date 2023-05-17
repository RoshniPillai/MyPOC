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
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
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
export default function LandingPage() {
  const theme = useTheme();

  /* for calender */
  const [fromDate, setFromDate] = React.useState<Dayjs | null>(
    dayjs("2023-04-17T15:30")
  );
  console.log("new date selected is", fromDate);
  const [ToDate, setToDate] = React.useState<Dayjs | null>(
    dayjs("2023-04-17T15:30")
  );
  console.log("new date selected is", ToDate);

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
              borderRadius: "4px 4px 0px 0px",
              height: "30px"
            }}
          >
            <Typography
              className="heading"
              variant="subtitle1"
              // display="block"
              gutterBottom
              sx={{ margin: 0, height: "", padding: 1, color: "#fff" }}
              //
            >
              AUDIT
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{ color: "#ffffff" }}
          >
            {value === true ? (
              <>
                <Box
                // sx={{ width: "100%" }}
                >
                  <Stack spacing={2}>
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
                            components={["DateTimePicker", "DateTimePicker"]}
                          >
                            <DateTimePicker
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
                            components={["DateTimePicker", "DateTimePicker"]}
                          >
                            <DateTimePicker
                              //  label="Controlled picker"
                              value={ToDate}
                              onChange={(newValue) => setToDate(newValue)}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Stack>
                    </Stack>
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
              </>
            ) : (
              <h1> detail screen</h1>
            )}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
