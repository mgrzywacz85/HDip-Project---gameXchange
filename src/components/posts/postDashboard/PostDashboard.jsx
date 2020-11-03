import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import Post from "./Post";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts } from "../../../app/reduxStore/actions/PostActions";
import { useEffect } from "react";

const PostDashboard = ({ getPosts, postStore: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  
  return (
    <Grid centered>
      <Grid.Column width={10}>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Grid.Column>
      <Grid.Column width={3} >
      <Segment.Group textAlign='center'>
      <Segment attached='top' textAlign='center' color='grey' >
        <h4>FILTER</h4>
      </Segment>
    </Segment.Group>
      </Grid.Column>
    </Grid>
  );
};

PostDashboard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postStore: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
  postStore: state.PostReducer
});

export default connect(mapStateToProps, { getPosts })(PostDashboard);
