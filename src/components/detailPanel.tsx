import * as React from "react";
import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const ItemStack = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  backgroundColor: "none",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff"
}));

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "",
  //border: '1px solid',
  //borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(0.5),
  borderRadius: "4px",
  textAlign: "left",
  fontSize: "0.8rem"
}));

export default function DetailsTab() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12}>
          <Stack direction="row" spacing={2}>
            <ItemStack>
              <AddLocationOutlinedIcon fontSize="large" />
            </ItemStack>
            <ItemStack>
              <Typography variant="body2" gutterBottom>
                Assignment Event
                <br />
                Asset loaded from EX123
              </Typography>
            </ItemStack>
            <ItemStack>
              <MoreVertIcon sx={{ p: 1 }} fontSize="small" />
            </ItemStack>
          </Stack>
        </Grid>
        <Grid xs={6}>
          <Item>Executed by</Item>
        </Grid>
        <Grid xs={6}>
          <Item>System</Item>
        </Grid>
        <Grid xs={6}>
          <Item>Circuit created</Item>
        </Grid>
        <Grid xs={6}>
          <Item>--</Item>
        </Grid>
        <Grid xs={6}>
          <Item>Material</Item>
        </Grid>
        <Grid xs={6}>
          <Item>HG</Item>
        </Grid>
        <Grid xs={6}>
          <Item>Payload</Item>
        </Grid>
        <Grid xs={6}>
          <Item>243T</Item>
        </Grid>
        <Grid xs={6}>
          <Item>Source</Item>
        </Grid>
        <Grid xs={6}>
          <Item>ABC</Item>
        </Grid>
        <Grid xs={12} mt={2}>
          <div>
            <Typography
              pl={1}
              variant="body2"
              gutterBottom
              sx={{ textAlign: "left" }}
            >
              User Activity
            </Typography>
            <Accordion
              style={{
                backgroundColor: "#3d444e",
                color: "#fff",
                textAlign: "left"
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon fontSize="small" htmlColor="#fff" />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography pr={2} variant="body2">
                  icon
                </Typography>
                <Typography variant="body2">username</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              style={{
                backgroundColor: "#3d444e",
                color: "#fff",
                textAlign: "left"
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon fontSize="small" htmlColor="#fff" />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography pr={2} variant="body2">
                  icon
                </Typography>
                <Typography variant="body2">username</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
