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
              return <th key={`th-${index}`}> {headingValue}</th>;
            })}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((tdData, index) => {
            return (
              <tr key={`tr-${index}`}>
                {tdData.map((tdValue, index) => {
                  return <td key={`td-${index}`}>{tdValue}</td>;
                })}
              </tr>
            );
          })}
      </tbody>
    </TableWrapper>
  );
};

export default DataTable;
