import React from 'react';

const Comment = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div>
            <p>{name}: {email}</p>
        </div>
    );
};

export default Comment;