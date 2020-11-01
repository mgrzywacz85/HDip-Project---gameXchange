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
      <Grid.Column width={4}>
            <Segment>
                FILTER
            </Segment>

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
