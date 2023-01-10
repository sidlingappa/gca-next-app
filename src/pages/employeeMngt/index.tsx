import GPSTable from "../../components/table";
import React, { useEffect, useState } from "react";
import theme from "../../styles/theme/theme";
import NavBar from "../../components/navbar";
import { Grid, Box, MuiThemeProvider } from "@mui/material";
import { NextPage, NextPageContext } from "next";
import useSWR from "swr";
import {
  columns,
  options,
  theme as bulkTableTheme,
} from "../../config/employees-table";
export interface TableData {
  firstName: string;
  lastName: string;
  error?: string;
}
const EmployeeMngt: NextPage & { auth?: boolean } = () => {
  // const [data, setData] = useState<TableData[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [employees, setEmployees] = useState<any>([["Loading Data..."]]);
  const getEmpInfo = async () => {
    const result = await fetch(`/api/employees/all`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "asid-services-app": `cd05f2b8-b222-4068-a78d-749fffeced76`,
      },
    });
    const data = await result.json();
    if (result.ok) {
      setEmployees(data["response"]["results"]);
    } else {
      router.push("/login");
    }
  };
  useEffect(() => {
    getEmpInfo();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar></NavBar>
      <Grid item sx={{ margin: 10 }}>
        <GPSTable
          title="Employee Management"
          data={employees}
          columns={columns}
          options={options}
        />
      </Grid>
    </Box>
  );
};
EmployeeMngt.auth = true;
export default EmployeeMngt;
