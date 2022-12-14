import { useEffect, useState } from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  Pagination,
  Loader,
} from "@mantine/core";
import Legend from "./Legend";
import axios from "axios";

const useStyles = createStyles((theme) => ({
  input: {
    width: "100%",
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    padding: theme.spacing.xs,
    fontSize: theme.fontSizes.sm,
  },

  divSearch: {
    width: "60%",
    alignSelf: "center",
  },

  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
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
    fontWeight: "bold",
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
    margin: "10px 20px 0 20px",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",

    [theme.fn.largerThan("md")]: {
      justifyContent: "center",
    },
  },

  searchGroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
    },
  },

  scrolled: {
    boxShadow: theme.shadows.lg,
  },

  pagination: { marginTop: "10px", display: "flex", justifyContent: "center" },
}));

export function ResultTable() {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues?page=${currentPage}`
        );
        setLoading(false);
        setData(response.data);
      } catch (err) {
        // setError(err.message);
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
        <div className={classes.searchGroup}>
          <form className={classes.divSearch}>
            <input
              className={classes.input}
              placeholder="Search issues"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
            />
          </form>
          {/* <Search search={search} setSearch={setSearch} /> */}
          <Legend />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
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
                      <div className={classes.loader}>
                        <Loader size="lg" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {data &&
                    data
                      .filter((val) => {
                        if (search === "") {
                          return val;
                        } else if (
                          val.title.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map(({ id, number, title, user, state }) => (
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
      </div>
      {/* add margin between table and pagination */}
      <div className={classes.pagination}>
        <Pagination page={currentPage} onChange={handlePageChagne} total={10} />
      </div>
    </div>
  );
}
