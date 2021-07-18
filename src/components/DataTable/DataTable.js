import { TableWrapper } from "./DataTable.styled";
import { get } from "lodash";

const DataTable = (props) => {
  const heading = get(props, "data.heading", null);
  const data = get(props, "data.data", null);

  return (
    <TableWrapper striped bordered hover>
      <thead>
        <tr>
          {heading &&
            heading.map((headingValue, index) => {
              return <th> {headingValue}</th>;
            })}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((tdData, index) => {
            return (
              <tr>
                {tdData.map((tdValue, index) => {
                  return <td>{tdValue}</td>;
                })}
              </tr>
            );
          })}
      </tbody>
    </TableWrapper>
  );
};

export default DataTable;
