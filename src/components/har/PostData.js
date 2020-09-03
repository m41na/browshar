import React from 'react';
import Params from './Params';

const PostData = ({postData}) => {

    return (
        <div id="postData_details">
            <div id='postData_mimeType'>{postData.mimeType}</div>
            <Params params={postData.params} />
            <div id='postData_text'>{postData.text}</div>
            <div id='postData_comment'>{postData.comment}</div>
        </div>
    )
}

export default PostData;