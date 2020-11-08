import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Loader, Comment, Button, Segment } from "semantic-ui-react";
import Moment from "react-moment";

const PostComment = ({ postUser, postID,  comment, auth }) => {
  return comment === null ? (
    <Loader />
  ) : (
    <Segment clearing>
      <Comment>
        <Comment.Avatar src={comment.avatar} />
        <Comment.Content>
          <Comment.Author as='a'>{comment.name}</Comment.Author>
          <Comment.Metadata>
            <div><Moment format='DD/MM/YYYY'>{comment.date}</Moment></div>
          </Comment.Metadata>

        {auth.user._id === postUser && comment.user !== auth.user._id &&
          <Button.Group floated='right'>
            <Button color='purple' content='Accept Xchange' style={{ right: 0 }} />
          </Button.Group>}

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
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps, {})(PostComment);
