import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCommentToPost } from '../../../app/reduxStore/actions/PostActions';
import {Segment, Comment, Form, Button} from 'semantic-ui-react';

const PostCommentForm = ({postID, addCommentToPost}) => {
    
    const [text, setText] = useState('');     
    
    return(
        <Segment>
        <Comment.Group>
        <Form onSubmit={e => {
            e.preventDefault();
            addCommentToPost(postID, {text});
            setText('');
        }}>
          <Form.TextArea onChange={e => setText(e.target.value)} />
          <Button content='Add Reply' labelPosition='left' icon='edit' color='violet' />
        </Form>
      </Comment.Group>
      </Segment>
    )
}

PostCommentForm.propTypes = {

    addCommentToPost: PropTypes.func.isRequired

}

export default connect(null, { addCommentToPost })(PostCommentForm);