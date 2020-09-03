import React from 'react';

const Content = ({content}) => {

    return (
        <div id="content_details">
            <div id='content_size'>{content.size}</div>
            <div id='content_compression'>{content.compression}</div>
            <div id='content_mimeType'>{content.mimeType}</div>
            <div id='content_text'>{content.text}</div>
            <div id='content_comment'>{content.comment}</div>
        </div>
    )
}

export default Content;