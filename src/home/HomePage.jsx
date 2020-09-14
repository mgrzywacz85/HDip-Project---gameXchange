import React from "react";
import { Segment, Container, Header, Button } from "semantic-ui-react";

export default function HomePage({ history }) {
  return (
    <Segment className='homepage' inverted vertical textAlign='center'>
      <Container>
        <Header inverted as='h1' style={{ fontSize: 60 }}>
          GameXchange Dublin
        </Header>
          <Button
            onClick={() => history.push("/posts")}
            size='big'
            inverted
            style={{ marginTop: 50 }}
          >
            Login
          </Button>
      </Container>
    </Segment>
  );
}
