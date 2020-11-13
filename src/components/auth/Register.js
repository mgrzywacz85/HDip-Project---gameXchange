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
import { setAlert} from "../../app/reduxStore/actions/AlertActions";
import { registerAction } from "../../app/reduxStore/actions/AuthActions";
import { NavLink, Redirect } from "react-router-dom";

const Register = ({ setAlert, registerAction, isAuthenticated }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    avatar: ""
  });

  const { name, email, avatar, password, password2 } = values;

  function changeInput(form) {
    const { name, value } = form.target;
    setValues({ ...values, [name]: value });
  }

  function submitForm(form) {
    form.preventDefault(); //validation

    if (password !== password2) {
      setAlert("Passwords do not match", 'show');
    } else {
      registerAction({ name, email, avatar, password });
    }
  }

  if (isAuthenticated) {
    return <Redirect to='/posts' />;
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
                  Enter your details
                </Message>
              </Item.Content>
            </Item>

            <Form onSubmit={(form) => submitForm(form)} centered>
              <Form.Field>
                <input
                  name='name'
                  type='text'
                  placeholder='Username'
                  centered
                  value={name}
                  onChange={(form) => changeInput(form)}
                  style={{ marginTop: 20 }}
                  
                />
              </Form.Field>
              <Form.Field>
                <input
                  name='email'
                  type='text'
                  placeholder='E-mail'
                  value={email}
                  onChange={(form) => changeInput(form)}
                  
                />
              </Form.Field>              
              <Form.Field>
                <input
                  name='password'
                  type='text'
                  placeholder='Password'
                  value={password}
                  onChange={(form) => changeInput(form)}
                  
                />
              </Form.Field>
              <Form.Field>
                <input
                  name='password2'
                  type='text'
                  placeholder='Confirm password'
                  value={password2}
                  onChange={(form) => changeInput(form)}
                  
                />
              </Form.Field>
              <Form.Field>
              <input
                name='avatar'
                type='text'
                placeholder='External link to your avatar photo'
                value={avatar}
                onChange={(form) => changeInput(form)}
              />
            </Form.Field>
              <Button as={NavLink} exact to='/posts' floated='right' content='Cancel' />
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
  registerAction: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.AuthReducer.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registerAction })(Register);
