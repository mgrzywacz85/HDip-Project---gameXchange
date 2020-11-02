import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../../app/reduxStore/actions/PostActions";
import {
  Grid,
  Segment,
  Header,
  Form,
  Button,
  Dropdown,
} from "semantic-ui-react";
import { setAlert } from "../../../app/reduxStore/actions/AlertActions";

const PostForm = ({ addPost }) => {
  const categoryOptions = [
    {
      key: "Playstation 4",
      text: "Playstation 4",
      value: "Playstation 4",
    },
    {
      key: "Nintendo Switch",
      text: "Nintendo Switch",
      value: "Nintendo Switch",
    },
    {
      key: "Xbox One",
      text: "Xbox One",
      value: "Xbox One",
    },
    {
      key: "Playstation 3",
      text: "Playstation 3",
      value: "Playstation 3",
    },
    {
      key: "Xbox 360",
      text: "Xbox 360",
      value: "Xbox 360",
    },
    {
      key: "Nintendo 3DS",
      text: "Nintendo 3DS",
      value: "Nintendo 3DS",
    },
  ];

  const [values, setValues] = useState({
    category: "",
    title: "",
    description: "",
    preferredlocation: "",
    photo: "",
  });

  const { category, title, description, preferredlocation, photo } = values;

  function changeInput(form) {
    const { name, value } = form.target;
    setValues({ ...values, [name]: value });
  }

  const dropdownChange = (form, data) => {
    this.setState({ [data.name]: data.value });
  }

  function submitForm(form) {
    form.preventDefault(); //validation
    addPost({ category, title, description, preferredlocation, photo });
  }

  return (

    //Adding the clearing property helps align the buttons under the fields correctly
    <Grid centered>
      <Grid.Column width={10}>
        <Segment clearing>
          <Header size='large' content='Create Xchange' />
          <Form onSubmit={(form) => submitForm(form)} centered>
            <Dropdown
              name='category'
              placeholder='Select category'
              selection
              fluid
              options={categoryOptions}
              onChange={dropdownChange}
            />
            <Form.Field>
              <input
                name='title'
                type='text'
                placeholder='Title'
                value={title}
                onChange={(form) => changeInput(form)}
                style={{ marginTop: 14 }}
              />
            </Form.Field>
            <Form.Field>
              <input
                name='description'
                type='text'
                placeholder='Description'
                value={description}
                onChange={(form) => changeInput(form)}
              />
            </Form.Field>
            <Form.Field>
              <input
                name='preferredlocation'
                type='text'
                placeholder='Preferred location for meet-up'
                value={preferredlocation}
                onChange={(form) => changeInput(form)}
              />
            </Form.Field>
            <Form.Field>
              <input
                name='photo'
                type='text'
                placeholder='Link to item photo'
                value={photo}
                onChange={(form) => changeInput(form)}
              />
            </Form.Field>
            <Button type='submit' floated='right' content='Cancel' />
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
};

PostForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.AuthReducer.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, addPost })(PostForm);
