import React from 'react';

const PageTimings = ({pageTimings}) => {

    return (
        <div id="pageTimings_details">
            <div id='pageTimings_onContentLoad'>{pageTimings.onContentLoad}</div>
            <div id='pageTimings_onLoad'>{pageTimings.onLoad}</div>
            <div id='pageTimings_comment'>{pageTimings.comment}</div>
        </div>
    )
}

export default PageTimings;