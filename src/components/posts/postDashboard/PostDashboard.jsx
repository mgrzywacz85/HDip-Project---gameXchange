import React from "react";
import { Grid } from "semantic-ui-react";
import PostList from "./PostList";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts } from "../../../app/reduxStore/actions/PostActions";
import { useEffect } from "react";

const PostDashboard = ({ getPosts }) => {
  useEffect(() => {
      getPosts();
  }, [getPosts]);

  //previous handler functions no longer needed after moving to Redux

  return (
    <Grid centered>
      <Grid.Column width={10}>
        <PostList posts={(posts) => posts} />
      </Grid.Column>
    </Grid>
  );
};

PostDashboard.propTypes = {
    getPosts: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({

    auth: state.AuthReducer,
    posts: state.PostReducer.posts

});

export default connect(mapStateToProps, { getPosts })(PostDashboard);
