import cuid from "cuid";
import React, { useState } from "react";
import { Segment, Header, Form, Button, Grid } from "semantic-ui-react";
import { useDispatch, useSelector} from 'react-redux';
import {updatePost, createPost} from '../postRedux/PostActions';

export default function PostForm({ match, history }) {
  const dispatch = useDispatch();

  const selectedPost = useSelector(state => state.postStore.posts.find(post => post.id === match.params.id))

  const initialValues = selectedPost ?? {
    title: "",
    description: "",
    preferredlocation: "",
  };

  const [values, setValues] = useState(initialValues);

  function submitNewPost() {
    var today = new Date();
    var currentDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    selectedPost
      ? dispatch(updatePost({ ...selectedPost, ...values }))
      : dispatch(createPost({
          ...values,
          id: cuid(),
          userPhotoURL: "././img/user.png",
          date: currentDate,
          postedBy: "User",
          responders: [],
        }));
        history.push('/posts');
  }

  function changeInput(post) {
    const { name, value } = post.target;
    setValues({ ...values, [name]: value });
  }

  return (
    //Adding the clearing property helps align the buttons under the fields correctly
    <Grid centered>
      <Grid.Column width={10}>
        <Segment clearing>
          <Header
            size='large'
            content={selectedPost ? "Edit Xchange" : "Create Xchange"}
          />
          <Form onSubmit={submitNewPost}>
            <Form.Field>
              <input
                name='title'
                type='text'
                placeholder='Xchange Title'
                value={values.title}
                onChange={(post) => changeInput(post)}
              />
            </Form.Field>
            <Form.Field>
              <input
                name='description'
                type='text'
                placeholder='Description'
                value={values.description}
                onChange={(post) => changeInput(post)}
              />
            </Form.Field>
            <Form.Field>
              <input
                name='preferredlocation'
                type='text'
                placeholder='Preferred Location'
                value={values.preferredlocation}
                onChange={(post) => changeInput(post)}
              />
            </Form.Field>
            <Button              
              type='submit'
              floated='right'
              content='Cancel'
            />
            <Button
              type='submit'
              floated='right'
              content='Submit'
              color='blue'
            />
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
