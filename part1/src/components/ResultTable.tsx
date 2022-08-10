import { useEffect, useState } from "react";
import { createStyles, Table, ScrollArea } from "@mantine/core";
import axios from "axios";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "#f2f2f2",
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

export function ResultTable() {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
        console.log(response.headers.link);
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ScrollArea
      sx={{
        height: 600,
        width: 1000,
        borderRadius: "8px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table sx={{ minWidth: 700 }}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>No.</th>
            <th>Issue</th>
            <th>Posted By</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row) => (
              <tr key={row.id}>
                <td>{row.number}</td>
                <td>{row.title}</td>
                <td>{row.user.login}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
