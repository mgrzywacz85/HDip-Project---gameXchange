import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Loader, Comment, Button, Segment } from "semantic-ui-react";
import Moment from "react-moment";
import {
  acceptXchange,
  completeXchange,
  deleteCommentFromPost,
} from "../../../app/reduxStore/actions/PostActions";

const PostComment = ({
  acceptXchange,
  completeXchange,
  deleteCommentFromPost,
  postUser,
  postID,
  postIsAccepted,
  postIsCompleted,
  comment,
  auth,
}) => {
  return comment === null ? (
    <Loader />
  ) : (
    <Segment clearing>
      <Comment>
        <Comment.Avatar src={comment.avatar} />
        <Comment.Content>
          <Comment.Author as='a'>{comment.name}</Comment.Author>
          <Comment.Metadata>
            <div>
              <Moment format='DD/MM/YYYY'>{comment.date}</Moment>
            </div>
          </Comment.Metadata>

          {!auth.loading &&
            auth.user._id === postUser &&
            comment.user !== auth.user._id &&
            !postIsAccepted &&
            !postIsCompleted && (
              <Button.Group floated='right'>
                <Button
                  onClick={() => acceptXchange(postID, comment._id)}
                  color='green'
                  inverted
                  content='Accept Xchange'
                  style={{ right: 0 }}
                />
              </Button.Group>
            )}

          {!auth.loading &&
            auth.user._id !== postUser &&
            comment.user === auth.user._id &&
            comment.isSelected &&
            postIsAccepted &&
            !postIsCompleted && (
              <Button.Group floated='right'>
                <Button
                  onClick={() => completeXchange(postID, comment._id)}
                  color='green'
                  inverted
                  content='Xchange Successful'
                  style={{ right: 0 }}
                />
              </Button.Group>
            )}

          {!auth.loading && postIsAccepted && !postIsCompleted && comment.isSelected && (
            <Button.Group floated='right'>
              <Button
                color='yellow'
                content='Xchange Pending'
                style={{ right: 0 }}
              />
            </Button.Group>
          )}

          {!auth.loading && postIsCompleted && comment.isSelected && (
            <Button.Group floated='right'>
              <Button
                color='green'
                content='Xchange Successful'
                style={{ right: 0 }}
              />
            </Button.Group>
          )}

          {!auth.loading && comment.user === auth.user._id && !postIsAccepted && !postIsCompleted && (
            <Button.Group floated='right'>
              <Button
                onClick={() => deleteCommentFromPost(postID, comment._id)}
                inverted
                color='red'
                content='Delete comment'
                style={{ right: 0 }}
              />
            </Button.Group>
          )}

          <Comment.Text size='big'>{comment.text}</Comment.Text>
        </Comment.Content>
      </Comment>
    </Segment>
  );
};

PostComment.propTypes = {
  postID: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteCommentFromPost: PropTypes.func.isRequired,
  acceptXchange: PropTypes.func.isRequired,
  completeXchange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps, {
  deleteCommentFromPost,
  acceptXchange,
  completeXchange,
})(PostComment);
