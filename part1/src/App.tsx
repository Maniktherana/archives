import { createStyles, MantineProvider } from "@mantine/core";
import { ResultTable } from "./components/ResultTable";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ResultTable />
    </MantineProvider>
  );
}
