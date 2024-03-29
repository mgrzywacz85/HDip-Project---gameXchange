import React from "react";
import {
  Grid,
  Segment,
  Item,
  Comment,
  Header,
  Loader,
  Button,
} from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PostCommentForm from "./PostCommentForm";
import PostComment from "./PostComment";

const PostDetailsItem = ({
  post: {
    _id,
    title,
    description,
    photo,
    comments,
    user,
    isAccepted,
    isCompleted,
  },
  auth,
}) => {
  return auth.loading || _id === null ? (
    <Loader />
  ) : (
    <Grid centered>
      <Grid.Column width={10}>
        <Segment.Group>
          <Segment attached='top' clearing>
            <h1>
              {title}{" "}

              {!auth.loading && isAccepted && !isCompleted && (
                <Button.Group floated='right'>
                  <Button
                    color='yellow'          
                    content='Xchange Pending'
                    style={{ right: 0 }}
                  />
                </Button.Group>
              )}

              {!auth.loading && isCompleted && (
                <Button.Group floated='right'>
                  <Button
                    color='green'
                    content='Xchange Successful'
                    style={{ right: 0 }}
                  />
                </Button.Group>
              )}
            </h1>
          </Segment>
        </Segment.Group>

        <Segment.Group>
          <Segment attached='top'>
            <h3>{description}</h3>
            <p />
            <Item>
              <Item.Image size='large' src={photo} />
            </Item>
          </Segment>

          <Segment attached='bottom' clearing></Segment>
        </Segment.Group>

        <Segment>
          <Comment.Group>
            <Header as='h2' dividing>
              Comments
            </Header>
            {comments.map((comment) => (
              <PostComment
                key={comment._id}
                comment={comment}
                postID={_id}
                postUser={user}
                postIsCompleted={isCompleted}
                postIsAccepted={isAccepted}
                auth={auth}
              />
            ))}
          </Comment.Group>
        </Segment>

        {auth.isAuthenticated && !isCompleted && <PostCommentForm postID={_id} />}

        {!auth.isAuthenticated && !isAccepted && !isCompleted && <Segment>
          <Comment>
            Log in to comment
          </Comment>
          
          </Segment>}

      </Grid.Column>
    </Grid>
  );
};

PostDetailsItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
  post: state.PostReducer.post,
  posts: state.PostReducer,
});

export default connect(mapStateToProps, {})(PostDetailsItem);
