import { Table } from "antd";
import "antd/dist/antd.css";
import { COLUMNS, PAGINATION } from "../utils/utils.js";

export default function Countries({ countries, loading }) {
  
    return (
    <div>
      <Table
        dataSource={countries}
        columns={COLUMNS}
        bordered={true}
        loading={loading}
        pagination={PAGINATION}
        rowKey={(country) => country.name}
      />
    </div>
  );
}