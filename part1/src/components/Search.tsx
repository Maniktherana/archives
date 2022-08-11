import React from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  Pagination,
  Loader,
  Input,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  divSearch: {
    width: "60%",
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
