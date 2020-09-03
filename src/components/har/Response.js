import React from 'react';
import Headers from './Headers';
import Cookies from './Cookies';
import Content from './Content';

const Response = ({response}) => {

    return (
        <div id="response_details">
            <div id='response_status'>{response.status}</div>
            <div id='response_statusText'>{response.statusText}</div>
            <div id='response_httpVersion'>{response.httpVersion}</div>
            <Cookies cookies={response.cookies} />
            <Headers headers={response.headers}/>
            {null && <Content content={response.content} />}
            <div id='response_headersSize'>{response.headersSize}</div>
            <div id='response_bodySize'>{response.bodySize}</div>
            <div id='response_comment'>{response.comment}</div>
        </div>
    )
}

export default Response;