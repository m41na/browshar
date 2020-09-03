import React from 'react';
import Headers from './Headers';
import Cookies from './Cookies';
import QueryString from './QueryString';
import PostData from './PostData';

const Request = ({request}) => {

    return (
        <div id="request_details">
            <div id='request_method'>{request.method}</div>
            <div id='request_url'>{request.url}</div>
            <div id='request_httpVersion'>{request.httpVersion}</div>
            <Cookies cookies={request.cookies} />
            <Headers headers={request.headers}/>
            <QueryString queryString={request.queryString} />
            {request?.postData && <PostData postData={request.postData} />}
            <div id='request_headersSize'>{request.headersSize}</div>
            <div id='request_bodySize'>{request.bodySize}</div>
            <div id='request_comment'>{request.comment}</div>
        </div>
    )
}

export default Request;