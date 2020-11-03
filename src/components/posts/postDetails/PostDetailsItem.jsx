import React from "react";
import { Grid, Segment, Item } from "semantic-ui-react";
import PostDetailsChat from "./PostDetailsChat";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PostDetailsItem = ({ post, auth } ) => {

  return (    

     <Grid centered>
      <Grid.Column width={10}>
        <Segment.Group>
          <Segment attached='top'>
            <h1>{post.title}</h1>
          </Segment>
        </Segment.Group>

        <Segment.Group>
          <Segment attached='top'>
            <h3>{post.description}</h3>
            <p />
            <Item>
              <Item.Image size='large' src={post.photo} />
            </Item>
          </Segment>

          <Segment attached='bottom' clearing>
          </Segment>
        </Segment.Group>

        <PostDetailsChat />
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
