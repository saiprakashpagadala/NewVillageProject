import React from "react";
import "antd/dist/antd.css";
import "./screenone.css";
import { Table } from "antd";
import JsonData from "../../Dummy.json";

const Screenone = () => {
  const tableData = JsonData.map((eachData) => {
    return eachData.metadata;
  });

  const nw = JsonData.map((dt) => {
    return dt.particulars;
  });

  console.log(tableData);

  const columns = [
    {
      title: "State",
      dataIndex: "state",

      filters: tableData.map((newData) => {
        return { text: newData.state, value: newData.state };
      }),

      onFilter: (value, record) => record.state.indexOf(value) === 0,
    },

    {
      title: "District",
      dataIndex: "district",

      filters: tableData.map((newData) => {
        return { text: newData.district, value: newData.district };
      }),
      onFilter: (value, record) => record.district.indexOf(value) === 0,
    },

    {
      title: "Branch",
      dataIndex: "branch",
      filters: tableData.map((newData) => {
        return { text: newData.branch, value: newData.branch };
      }),

      //filters: tableData.filter(newData => [{text:newData.branch ,value:newData.branch}]),

      onFilter: (value, record) => record.branch.indexOf(value) === 0,
    },
    {
      title: "Staff",
      dataIndex: "staff",

      filters: tableData.map((newData) => {
        return { text: newData.staff, value: newData.staff };
      }),
      // filters: newArray.filter(newData => {
      // stData.push(newData.staff)
      // return [{text:stData ,value:stData}]
      // }),

      onFilter: (value, record) => record.staff.indexOf(value) === 0,
    },
    {
      title: "Village",
      dataIndex: "village",
    },
    {
      title: "Date of Surve",
      dataIndex: "dateOfSurvey",
    },
    {
      title: "New/Resubm",
      dataIndex: "newresubmit",
    },
    {
      title: "Resubmit",
      dataIndex: "resubmit",
    },
  ];

  const rowEvents = {
    onClick: (e, row) => {
      console.log(row);
    },
  };

  return (
    <div>
      <h1>Welcome to Screenone</h1>
      <div>
        <div>
          <Table
            rowEvents={rowEvents}
            columns={columns}
            dataSource={tableData}
            pagination={false}
          ></Table>
        </div>
      </div>
    </div>
  );
};

export default Screenone;
