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
import { setAlert } from "../../app/reduxStore/actions/AlertActions";
import { loginAction } from "../../app/reduxStore/actions/AuthActions";
import { Redirect } from "react-router-dom";

const Login = ({ loginAction, isAuthenticated }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;

  function changeInput(form) {
    const { name, value } = form.target;
    setValues({ ...values, [name]: value });
  }

  function submitForm(form) {
    form.preventDefault(); //validation
    loginAction({ email, password });
  }

  // Redirect to Posts Dashboard if user is authenticated

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
            <Header.Content style={{ marginTop: 10 }}>Login</Header.Content>
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
                  name='email'
                  type='text'
                  placeholder='E-mail'
                  centered
                  value={email}
                  onChange={(form) => changeInput(form)}
                  style={{ marginTop: 20 }}
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

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  loginAction: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.AuthReducer.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, loginAction })(Login);
