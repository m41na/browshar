import React from "react";

const Cookies = ({ cookies }) => {
  return (
    <div id="cookies_details">
      {cookies &&
        cookies.map((cookie, i) => (
          <div key={i} className="cookie_details">
            <div className="cookie_name">{cookie.name}</div>
            <div className="cookie_value">{cookie.value}</div>
            <div className="cookie_path">{cookie.path}</div>
            <div className="cookie_domain">{cookie.domain}</div>
            <div className="cookie_expires">{cookie.expires}</div>
            <div className="cookie_httpOnly">{cookie.httpOnly}</div>
            <div className="cookie_secure">{cookie.secure}</div>
            <div className="cookie_comment">{cookie.comment}</div>
          </div>
        ))}
    </div>
  );
};

export default Cookies;
