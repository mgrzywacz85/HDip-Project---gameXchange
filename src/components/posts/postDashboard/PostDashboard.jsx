import React from "react";
import { Grid, Segment, Button } from "semantic-ui-react";
import Post from "./Post";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts } from "../../../app/reduxStore/actions/PostActions";
import { useEffect, useState } from "react";

const PostDashboard = ({ getPosts, postStore: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const [cat, setCat] = useState("Playstation 4");

  return (
    <Grid centered>
      <Grid.Column width={10}>


        {posts.map((post) =>  (
              <Post key={post.id} post={post} />
            )
        )}

      </Grid.Column>
      <Grid.Column width={3}>
        <Segment.Group textAlign='center'>
          <Segment attached='top' textAlign='center' color='grey'>
            <h4>Show by Category:</h4>
          </Segment>
          <Segment attached='top' textAlign='center' color='grey'>
            <Button
              style={{ marginBottom: 10 }}
              inverted
              color='purple'
              content='Playstation 4'
            ></Button>
            <Button
              style={{ marginBottom: 10 }}
              inverted
              color='purple'
              content='Nintendo Switch'
            ></Button>
            <Button
              style={{ marginBottom: 10 }}
              inverted
              color='purple'
              content='Xbox One'
            ></Button>
            <Button
              style={{ marginBottom: 10 }}
              inverted
              color='purple'
              content='Playstation 5'
            ></Button>
            <Button
              style={{ marginBottom: 10 }}
              inverted
              color='purple'
              content='Xbox Series'
            ></Button>
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
  postStore: state.PostReducer,
});

export default connect(mapStateToProps, { getPosts })(PostDashboard);
