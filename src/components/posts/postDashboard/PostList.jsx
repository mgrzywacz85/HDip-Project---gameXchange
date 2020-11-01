import React from "react";
import Post from "./Post";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PostList = ({ posts }) =>  {

  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
}

PostList.propTypes = {
  getPosts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({

  auth: state.AuthReducer,
  posts: state.PostReducer.posts

});

export default connect(mapStateToProps)(PostList);
