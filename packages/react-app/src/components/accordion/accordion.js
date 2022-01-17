import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordion.css";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion-page">
      <div className="accordion">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "33%", flexShrink: 20 }}
              className="questions"
            >
              Question 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              className="questions"
              sx={{ width: "33%", flexShrink: 0 }}
            >
              Is XurgI Single?????
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              All the single XURG'S, all the single XURG'S All the single
              XURG'S, all the single XURG'S All the single XURG'S, all the
              single XURG'S All the single XURG'S Cause if you liked it then you
              should have put a BID on it If you liked it then you shoulda put a
              BID on it Don't be mad once you see that he's FLEXIN it If you
              liked it then you shoulda put a BID on it Oh, oh, oh If you liked
              it then you should have put a BID on it If you liked it then you
              shoulda put a BID on it Don't be mad once you see that he' FLEXIN
              it If you liked it then you shoulda put a BID on it
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              className="questions"
            >
              Question 3
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              className="questions"
            >
              Question 4
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              className="questions"
            >
              Question 5
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              className="questions"
            >
              Question 6
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              className="questions"
            >
              Question 7
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              className="questions"
            >
              Question 8
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              className="questions"
            >
              Question 9
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              bgcolor: "#2c0280", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              className="questions"
            >
              Question 10
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#2c0280e1", // use summary background color
              color: "white", // use summary default color
            }}
          >
            <Typography className="anwsers">
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
