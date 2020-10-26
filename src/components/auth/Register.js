import React, { useState } from "react";
import {
  Segment,
  Header,
  Form,
  Button,
  Grid,
  Icon,
  Item,
  Message,
} from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

 const [ message, setMessage ] = useState("Enter your details");

  const { name, email, password, password2 } = values;

  function changeInput(form) {
    const { name, value } = form.target;
    setValues({ ...values, [name]: value });
  }

  function submitForm(form) {
    form.preventDefault(); //validation

    if (password !== password2) {
      console.log("Passwords do not match");
      setMessage("Passwords do not match");
    } else {
      console.log(values);
    }
  }

  return (
    //Adding the clearing property helps align the buttons under the fields correctly
    <Grid centered>
      <Grid.Column width={8}>
        <Segment clearing>
          <Header as='h2' icon textAlign='center'>
            <Icon name='users' />
            <Header.Content style={{ marginTop: 10 }}>Register</Header.Content>
            <Item>
              <Item.Content>
                <Message size='tiny' style={{ marginTop: 20, fontSize: 14 }}>
                  {message}
                </Message>
              </Item.Content>
            </Item>
            <Form onSubmit={(form) => submitForm(form)} centered>
              <Form.Field>
                <input
                  name='name'
                  type='text'
                  placeholder='First and Last name'
                  centered
                  value={name}
                  onChange={(form) => changeInput(form)}
                  style={{ marginTop: 20 }}
                  required
                />
              </Form.Field>
              <Form.Field>
                <input
                  name='email'
                  type='text'
                  placeholder='E-mail'
                  value={email}
                  onChange={(form) => changeInput(form)}
                  required
                />
              </Form.Field>
              <Form.Field>
                <input
                  name='password'
                  type='text'
                  placeholder='Password'
                  value={password}
                  onChange={(form) => changeInput(form)}
                  required
                />
              </Form.Field>
              <Form.Field>
                <input
                  name='password2'
                  type='text'
                  placeholder='Confirm password'
                  value={password2}
                  onChange={(form) => changeInput(form)}
                  required
                />
              </Form.Field>
              <Button type='submit' floated='right' content='Cancel' />
              <Button
                type='submit'
                floated='right'
                content='Submit'
                color='violet'
              />
            </Form>
          </Header>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect()(Register);
