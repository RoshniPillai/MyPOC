import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function LandingPage() {
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
          >
            <>
              <Typography component="h5" variant="h5" gutterBottom>
                New audit query
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Select a date range
              </Typography>
            </>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
