import React from "react";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";

export default function LandingPage({ history }) {
  return (
    <Segment className='homepage' inverted vertical textAlign='center'>
      <Container>
        <Header inverted as='h1' style={{ fontSize: 30 }}>
          Welcome to
        </Header>
        <Header inverted as='h1' style={{ fontSize: 60 }}>
          GameXchange Dublin
        </Header>
        <Button
          onClick={() => history.push("/login")}
          size='big'
          inverted
          style={{ marginTop: 20 }}
        >
          Login
        </Button>

        <Button
          onClick={() => history.push("/register")}
          size='big'
          inverted
          style={{ marginTop: 10, marginLeft: 10 }}
        >
          Register
        </Button>

        <Header inverted as='h3' style={{ fontSize: 20 }}>
         
        </Header>

        <Button
          onClick={() => history.push("/posts")}
          size='big'
          icon='right arrow'
          inverted
        >
          View posts
          <Icon name='right arrow' />
        </Button>
      </Container>
    </Segment>
  );
}
