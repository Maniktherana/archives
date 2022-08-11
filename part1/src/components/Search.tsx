import React from "react";
import { createStyles, Input } from "@mantine/core";

const useStyles = createStyles(() => ({
  divSearch: {
    width: "60%",
    margin: "10px 20px 0 20px",
  },
}));

const Search = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.divSearch}>
      <Input placeholder="Search issues" />
    </div>
  );
};

export default Search;
