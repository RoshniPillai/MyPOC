import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import AuditLogTable from "./auditTable";
function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        //p: 1,
        //m: 1,
        // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.500'),
        color: "#ffffff",
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx
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
        p: 1,
        m: 0.5,
        // bgcolor: (theme) =>
        //   theme.palette.mode === "dark" ? "#101010" : "grey.100",
        // color: (theme) =>
        //   theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx
      }}
      {...other}
    />
  );
}
export default function DetailPage() {
  /*on table row click */
  const [selectedID, setSelectedID] = React.useState(0);
  console.log({ selectedID });
  return (
    <>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Item1 sx={{ width: "70%" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1
                }}
              >
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1
                }}
              >
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                m: 1,
                borderRadius: 1
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  // p: 1,
                  // m: 1,
                  // bgcolor: 'background.paper',
                  borderRadius: 1
                }}
              >
                <Item>
                  <Typography p={1} variant="subtitle2" gutterBottom>
                    Audit results
                  </Typography>
                </Item>
                <Item>
                  <Typography p={1} variant="subtitle2" gutterBottom>
                    9 records found
                  </Typography>
                </Item>
                <Item>
                  <div>
                    <Button
                    //onClick={handleClick}
                    >
                      <AutorenewIcon
                        sx={{ p: 1, color: "#fff" }}
                        fontSize="large"
                      />
                    </Button>
                  </div>
                </Item>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  // p: 1,
                  // m: 1,
                  //bgcolor: 'background.paper',
                  borderRadius: 1
                }}
              >
                <Item>
                  <Button
                    type="submit"
                    size="small"
                    variant="outlined"
                    sx={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      borderColor: "#fff",
                      mt: 1
                    }}
                    // onClick={() => setValue(!value)}
                    startIcon={<ArrowBackIcon fontSize="small" />}
                  >
                    <Typography variant="caption">New Query</Typography>
                  </Button>
                </Item>
                <Item>
                  <MoreVertIcon sx={{ p: 1 }} fontSize="large" />
                </Item>
              </Box>
            </Box>
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                m: 0
              }}
              // sx={{
              //   display: "flex",
              //   flexDirection: "row",
              //   justifyContent: "space-between",
              //   // justifyContent: 'flex-start',
              //   // p: 1,
              //   // m: 1,
              //   bgcolor: "#3d444e"
              //   //  borderRadius: 1,
              // }}
            >
              <Item>
                <Typography p={1} variant="subtitle2" gutterBottom>
                  Audit results
                </Typography>
              </Item>
              <Item>
                <Typography p={1} variant="subtitle2" gutterBottom>
                  9 records found
                </Typography>
              </Item>
              <Item>
                <div>
                  <Button
                  //onClick={handleClick}
                  >
                    <AutorenewIcon
                      sx={{ p: 1, color: "#fff" }}
                      fontSize="large"
                    />
                  </Button>
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
                    borderColor: "#fff",
                    mt: 1
                  }}
                  // onClick={() => setValue(!value)}
                  startIcon={<ArrowBackIcon fontSize="small" />}
                >
                  <Typography variant="caption">New Query</Typography>
                </Button>
              </Item>
              <Item>
                <MoreVertIcon sx={{ p: 1 }} fontSize="small" />
              </Item>
            </Box> */}
          </Item1>
          <Item1 sx={{ width: "30%" }}>
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
                <Typography
                  variant="body2"
                  component="div"
                  display="block"
                  sx={{ p: 1 }}
                >
                  Select a row to see more details
                </Typography>
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
    </>
  );
}
