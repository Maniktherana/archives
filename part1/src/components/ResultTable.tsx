import { useEffect, useState } from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  Pagination,
  Loader,
  Tooltip,
} from "@mantine/core";
import axios from "axios";

const useStyles = createStyles((theme) => ({
  open: {
    color: "#306427",
    backgroundColor: "#bef0d6",
    padding: "2px 5px",
    borderRadius: "5px",
  },

  closed: {
    color: "#8c2823",
    backgroundColor: "#eccecb",
    padding: "2px 5px",
    borderRadius: "5px",
  },

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

  div: {
    margin: "70px 20px 0 20px",
    padding: 10,
    display: "flex",
    alignItems: "center",
    overflow: "scroll",

    [theme.fn.largerThan("md")]: {
      justifyContent: "center",
    },
  },

  scrolled: {
    boxShadow: theme.shadows.lg,
  },
}));

export function ResultTable() {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues?page=${currentPage}`
        );
        setLoading(false);
        setData(response.data);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [currentPage]);

  const handlePageChagne = (page: number) => {
    setCurrentPage(page);
    setLoading(true);
  };

  return (
    <div>
      <div className={classes.div}>
        <ScrollArea
          sx={{
            height: 600,
            width: 1000,
            borderRadius: "8px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
          onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        >
          <Table sx={{ minWidth: 300, height: 500 }}>
            <thead
              className={cx(classes.header, { [classes.scrolled]: scrolled })}
            >
              <tr>
                <th>No.</th>
                <th>Issue</th>
                <th>Posted By</th>
              </tr>
            </thead>
            {loading ? (
              // display a loading indicator in the middle of the table
              <tbody>
                <tr>
                  <td colSpan={3}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <Loader size="lg" />
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {data &&
                  data.map(({ id, number, title, user, state }) => (
                    <tr key={id}>
                      {state === "open" ? (
                        <td>
                          <span className={classes.open}>{number}</span>
                        </td>
                      ) : (
                        <td>
                          <span className={classes.closed}>{number}</span>
                        </td>
                      )}
                      <td>{title}</td>
                      <td>{user.login}</td>
                    </tr>
                  ))}
              </tbody>
            )}
          </Table>
        </ScrollArea>
      </div>
      {/* add margin between table and pagination */}
      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <Pagination page={currentPage} onChange={handlePageChagne} total={10} />
      </div>
    </div>
  );
}
