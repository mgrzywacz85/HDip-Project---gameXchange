import React, { useState } from "react";
import { Segment, Header, Form, Button, Grid, Icon } from "semantic-ui-react";

export default function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = values;

  function changeInput(form) {
    const { name, value } = form.target;
    setValues({ ...values, [name]: value });
  }

  function submitForm(form) {
    form.preventDefault(); //validation

    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log(values);
    }
  }

  return (
    //Adding the clearing property helps align the buttons under the fields correctly
    <Grid centered>
      <Grid.Column width={10}>
        <Segment clearing>
          <Header as='h2' icon textAlign='center'>
            <Icon name='users' />
            <Header.Content style={{ marginTop: 10 }}>Register</Header.Content>
            <Form onSubmit={(form) => submitForm(form)} centered>
              <Form.Field>
                <input
                  name='name'
                  type='text'
                  placeholder='Enter your first and last name'
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
                  placeholder='Enter your e-mail'
                  value={email}
                  onChange={(form) => changeInput(form)}
                  required
                />
              </Form.Field>
              <Form.Field>
                <input
                  name='password'
                  type='text'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(form) => changeInput(form)}
                  required
                />
              </Form.Field>
              <Form.Field>
                <input
                  name='password2'
                  type='text'
                  placeholder='Enter your password again to confirm'
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
}
