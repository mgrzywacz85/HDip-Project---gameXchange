import React from "react";
import { Grid, Segment, Button, Item, List } from "semantic-ui-react";
import Post from "./Post";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts } from "../../../app/reduxStore/actions/PostActions";
import { useEffect, useState } from "react";

const PostDashboard = ({ getPosts, postStore: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const [values, setValues] = useState({
    catSelected: "",
    filter: false,
  });

  function setCatValue(cat, filter) {
    setValues({ ...values, catSelected: cat, filter: filter });
  }

  const { catSelected, filter } = values;

  return (
    <Grid centered>
      {filter ? (
        <Grid.Column width={10}>
          {posts.map(
            (post) =>
              filter &&
              post.category === catSelected && (
                <Post key={post.id} post={post} />
              )
          )}
        </Grid.Column>
      ) : (
        <Grid.Column width={10}>
          {posts.map((post) => !filter && <Post key={post.id} post={post} />)}
        </Grid.Column>
      )}
      <Grid.Column width={3}>
        <Segment.Group textAlign='center'>
          <Segment attached='top' textAlign='center' color='grey' >
            <h4>Category:</h4>
          </Segment>
          <Segment attached='top' textAlign='center' color='grey' centered>
            <List divided>
              <List.Item>
          <Button
              onClick={() => setCatValue("", false)}
              style={{ marginBottom: 10 }}
              color='purple'
              content='Show All'
            ></Button>
            </List.Item>
            <List.Item>
            <Button
              onClick={() => setCatValue("Playstation 4", true)}
              inverted
              style={{ marginTop: 10, marginBottom: 10 }}
              color='violet'
              content='Playstation 4'
            ></Button>
            </List.Item>
            <Item>
            <Button
              onClick={() => setCatValue("Nintendo Switch", true)}
              inverted
              style={{ marginTop: 10, marginBottom: 10 }}
              color='violet'
              content='Nintendo Switch'
            ></Button>
            </Item>
            <Item>
            <Button
              onClick={() => setCatValue("Xbox One", true)}
              inverted
              style={{ marginTop: 10, marginBottom: 10 }}
              color='violet'
              content='Xbox One'
            ></Button>
            </Item>
            <Item>
            <Button
              onClick={() => setCatValue("Playstation 5", true)}
              inverted
              style={{ marginTop: 10, marginBottom: 10 }}
              color='violet'
              content='Playstation 5'
            ></Button>
            </Item>
            <Item>
            <Button
              onClick={() => setCatValue("Xbox Series", true)}
              inverted
              style={{ marginTop: 10, marginBottom: 10 }}
              color='violet'
              content='Xbox Series'
            ></Button>
            </Item>
            </List>
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
