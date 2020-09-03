import React from "react";

const Cache = ({ cache }) => {
  return (
    <div id="cache_details">
      <div id="cache_beforeRequest">
        <BeforeRequest after_request={cache.before_request} />
      </div>
      <div id="cache_afterRequest">
        <AfterRequest after_request={cache.after_request} />
      </div>
      <div id="cache_comment">{cache.comment}</div>
    </div>
  );
};

const AfterRequest = ({ after_request }) => {
  return (
    <div id="after_request_details">
      <div id="after_request_expires">{after_request?.expires}</div>
      <div id="after_request_lastAccess">{after_request?.lastAccess}</div>
      <div id="after_request_eTag">{after_request?.eTag}</div>
      <div id="after_request_hitCount">{after_request?.hitCount}</div>
      <div id="after_request_comment">{after_request?.comment}</div>
    </div>
  );
};

const BeforeRequest = ({ before_request }) => {
  return (
    <div id="before_request_details">
      <div id="before_request_expires">{before_request?.expires}</div>
      <div id="before_request_lastAccess">{before_request?.lastAccess}</div>
      <div id="before_request_eTag">{before_request?.eTag}</div>
      <div id="before_request_hitCount">{before_request?.hitCount}</div>
      <div id="before_request_comment">{before_request?.comment}</div>
    </div>
  );
};

export default Cache;
