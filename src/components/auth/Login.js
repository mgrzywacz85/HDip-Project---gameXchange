import React, { useState } from "react";
import { Segment, Header, Form, Button, Grid, Icon, Item, Message } from "semantic-ui-react";

export default function Login() {
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

    console.log('Success');
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
                  value={email}
                  onChange={(form) => changeInput(form)}
                  required
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
