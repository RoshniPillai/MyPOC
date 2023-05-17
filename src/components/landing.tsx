import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function LandingPage() {
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
                <Box sx={{ width: "100%" }}>
                  <Stack spacing={2}>
                    <Typography className="subHeading" gutterBottom>
                      New audit query
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Select a date range
                    </Typography>
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
