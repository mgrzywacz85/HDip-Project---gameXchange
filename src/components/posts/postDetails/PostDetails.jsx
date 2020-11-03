import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSelectedPost } from "../../../app/reduxStore/actions/PostActions";
import { Loader } from 'semantic-ui-react';
import PostDetailsItem from "./PostDetailsItem";

const PostDetails = ({ getSelectedPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getSelectedPost(match.params.id);
  },[getSelectedPost, match.params.id]);
    

  return loading || post === null ? <Loader /> : 
  
    <Fragment>
        <PostDetailsItem post={post} />
  </Fragment>
};

PostDetails.propTypes = {
  getSelectedPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.PostReducer,
});

export default connect(mapStateToProps, { getSelectedPost })(PostDetails);
