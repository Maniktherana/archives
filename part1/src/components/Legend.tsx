import React from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  Pagination,
  Loader,
  Tooltip,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  openLabel: {
    color: "#306427",
    backgroundColor: "#bef0d6",
    height: "25px",
    width: "40px",
    borderRadius: "5px",
    margin: "0 5px",
    fontWeight: "bold",
  },

  closedLabel: {
    color: "#8c2823",
    backgroundColor: "#eccecb",
    height: "25px",
    width: "40px",
    borderRadius: "5px",
    margin: "0 5px",
  },

  divLegend: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
  },
}));

const Legend = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.divLegend}>
      <p>Legend:</p>
      <Tooltip
        label="Open issue"
        events={{ hover: true, focus: true, touch: true }}
      >
        <div className={classes.openLabel}></div>
      </Tooltip>
      <Tooltip
        label="Closed issue"
        events={{ hover: true, focus: true, touch: true }}
      >
        <div className={classes.closedLabel}></div>
      </Tooltip>
    </div>
  );
};

export default Legend;
