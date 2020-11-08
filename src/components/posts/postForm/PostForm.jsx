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
} from "semantic-ui-react";
import { setAlert } from "../../../app/reduxStore/actions/AlertActions";

const PostForm = ({ addPost, history }) => {

  const[cat,setCat] = useState("Playstation 4");

  const [values, setValues] = useState({
    category: "Playstation 4",
    title: "",
    description: "",
    preferredlocation: "",
    photo: ""
  });

  const { category, title, description, preferredlocation, photo } = values;

  function changeInput(form) {
    const { name, value } = form.target;
    setValues({ ...values, [name]: value });
  }

  function changeCat(cat) {
    const { value } = cat.target;
    setValues({ ...values, category: value });
  }

  function setCatValue(cat){
    setCat(cat);
    setValues({...values, category: cat});
  }

  function submitForm(form) {
    form.preventDefault(); //validation
    addPost({ category, title, description, preferredlocation, photo });
    history.push('/posts/');
    window.location.reload();
  }

  return (

    //Adding the clearing property helps align the buttons under the fields correctly
    <Grid centered>
      <Grid.Column width={10}>
        <Segment clearing>
          <Header size='large' content='Create Xchange' />
          <Segment clearing >
            <Button onClick={() => setCatValue("Playstation 4")} color='blue' content='Playstation 4'></Button>
            <Button onClick={() => setCatValue("Nintendo Switch")} color='red'  content='Nintendo Switch'></Button>
            <Button onClick={() => setCatValue("Xbox One")} color='green' content='Xbox One'></Button>
            <Button onClick={() => setCatValue("Playstation 5")} color='blue' content='Playstation 5'></Button>
            <Button onClick={() => setCatValue("Xbox Series")} color='green' content='Xbox Series'></Button>
          </Segment>
          <Form onSubmit={(form) => submitForm(form)} centered>
          <Form.Field>
              <input
                name='category'
                type='text'
                placeholder='Category'
                value={cat}
                onChange={(e) => changeCat(e)}
              />
            </Form.Field>
            <Form.Field>
              <input
                name='title'
                type='text'
                placeholder='Title'
                value={title}
                onChange={(form) => changeInput(form)}
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
                placeholder='External link to item photo'
                value={photo}
                onChange={(form) => changeInput(form)}
              />
            </Form.Field>
            <Button type='submit' floated='right' color='red' content='Cancel' />
            <Button
              type='submit'
              floated='right'
              content='Submit'
              color='violet'
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
