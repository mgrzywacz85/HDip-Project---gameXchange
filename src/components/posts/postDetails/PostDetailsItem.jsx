import React from "react";
import { Grid, Segment, Item, Comment, Header } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PostCommentForm from "./PostCommentForm";
import PostComment from './PostComment';

const PostDetailsItem = ({ post: {_id, title, description, photo, comments, user }, auth } ) => {

  return (    

     <Grid centered>
      <Grid.Column width={10}>
        <Segment.Group>
          <Segment attached='top'>
            <h1>{title}</h1>
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

          <Segment attached='bottom' clearing>
          </Segment>
        </Segment.Group>

        <Segment>
    <Comment.Group>
    <Header as='h2' dividing>
      Comments
    </Header>
        {comments.map(comment => (
          <PostComment key={comment._id} comment={comment} postID={_id} postUser={user} />
        ))}
            </Comment.Group>
      </Segment>

        <PostCommentForm postID={_id}/>
      </Grid.Column>
    </Grid> 
);

};

PostDetailsItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    auth: state.AuthReducer,
    post: state.PostReducer.post
  });
  
  export default connect(mapStateToProps, { })(PostDetailsItem);