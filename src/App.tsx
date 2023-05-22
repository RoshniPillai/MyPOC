import "./styles.css";
import DemoPage from "./demo";
import LandingPage from "./components/landing";
// import DetailPage from "./components/detail";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function App() {
  return (
    <div className="App">
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
            // width: "80%",
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
            <Typography
              component="div"
              gutterBottom
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                textTransform: "uppercase",
                fontSize: 16,
                fontWeight: 700,
                textAlign: "left",
                paddingLeft: 1,
                color: "#fff"
                //lineHeight: 19,
              }}
            >
              Audit
            </Typography>
          </Box>

          <LandingPage />
        </Box>
      </div>
    </div>
  );
}
