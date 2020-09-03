import React from "react";

const Timings = ({ timings }) => {
  return (
    <div id="timings_details">
      <div id="timings_blocked">{timings.blocked}</div>
      <div id="timings_dns">{timings.dns}</div>
      <div id="timings_connect">{timings.connect}</div>
      <div id="timings_send">{timings.send}</div>
      <div id="timings_wait">{timings.wait}</div>
      <div id="timings_receive">{timings.receive}</div>
      <div id="timings_ssl">{timings.ssl}</div>
      <div id="timings_comment">{timings.comment}</div>
    </div>
  );
};

export default Timings;
