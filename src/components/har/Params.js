import React from "react";

const Params = ({ params }) => {
  return (
    <div id="params_details">
      {params &&
        params.map((param, i) => (
          <div key={i} className="param_details">
            <div className="params_name">{param.name}</div>
            <div className="params_value">{param.value}</div>
            <div className="params_fileName">{param.fileName}</div>
            <div className="params_contentType">{param.contentType}</div>
            <div className="params_comment">{param.comment}</div>
          </div>
        ))}
    </div>
  );
};

export default Params;
