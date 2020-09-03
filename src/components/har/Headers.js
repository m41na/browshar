import React from "react";

const Headers = ({ headers }) => {
  return (
    <div id="headers_details">
      {headers &&
        headers.map((header, i) => (
          <div key={i} className="header_details">
            <div className="header_name">{header.name}</div>
            <div className="header_value">{header.value}</div>
            <div className="header_comment">{header.comment}</div>
          </div>
        ))}
    </div>
  );
};

export default Headers;
