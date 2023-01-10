import startCase from "lodash/startCase";
import { Typography } from "@mui/material";

export const columns = [
  {
    label: "First Name",
    name: "firstName",
    options: {
      customBodyRender: (v: any) => {
        const value = v ? v.toUpperCase() : "";
        return (
          <Typography component={"span"} variant="inherit">
            {value}
          </Typography>
        );
      },
      setCellProps: () => ({ style: { width: "170px", maxWidth: "170px" } }),
    },
  },
  {
    label: "Last Name",
    name: "lastName",
    options: {
      customBodyRender: (v: any) => {
        const value = v ? startCase(v.toLowerCase()) : "";
        return (
          <Typography
            component={"span"}
            variant="inherit"
            className={`${value.toLowerCase()} status`}
          >
            {value}
          </Typography>
        );
      },
      setCellProps: () => ({ style: { width: "110px", maxWidth: "110px" } }),
    },
  },
  {
    label: "Error",
    name: "error",
    options: {
      sort: false,
      display: false,
      customBodyRender: (v: any) => {
        const value = v ? v : "- -";
        return (
          <Typography component={"span"} variant="inherit">
            {value}
          </Typography>
        );
      },
    },
  },
];

export const options = {
  print: true,
  download: true,
  filter: false,
  search: false,
  viewColumns: false,
  tableBodyMaxHeight: "250px",
};

export const theme = {
  overrides: {
    MUIDataTable: {
      paper: {
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: 0,
      },
      tableRoot: {
        "& .status": {
          fontWeight: "bold",
        },
        "& .success": {
          color: "#ACACAC",
        },
        "& .failure": {
          color: "red",
        },
      },
    },
    MuiTableCell: {
      head: {
        backgroundColor: "#324048 !important",
        color: "#FFF",
      },
    },
    MUIDataTableHeadCell: {
      data: {
        color: "#FFF !important",
      },
      sortAction: {
        "& span svg": {
          color: "#FFF !important",
        },
      },
    },
  },
};
