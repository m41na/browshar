import React from "react";

const QueryString = ({ queryString }) => {
  return (
    <div id="queryString_details">
      {queryString &&
        queryString.map((param, i) => (
          <div key={i} className="query_param">
            <div className="queryString_name">{param.name}</div>
            <div className="queryString_value">{param.value}</div>
            <div className="queryString_comment">{param.comment}</div>
          </div>
        ))}
    </div>
  );
};

export default QueryString;
