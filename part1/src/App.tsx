import { createStyles, MantineProvider } from "@mantine/core";
import { ResultTable } from "./components/ResultTable";

const useStyles = createStyles((theme) => ({
  div: {
    margin: "70px 20px 0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function App() {
  const { classes } = useStyles();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className={classes.div}>
        <ResultTable />
      </div>
    </MantineProvider>
  );
}
