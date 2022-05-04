import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = (props) => {
  const { type } = props;
  return type === "table" ? (
    <tr>
      <td
        colSpan={50}
        style={{
          textAlign: "center",
          padding: "1rem 0",
        }}
      >
        <Spinner animation="border" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </td>
    </tr>
  ) : (
    <div
      style={{
        textAlign: "center",
        padding: "1rem 0",
      }}
    >
      <Spinner animation="border" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
