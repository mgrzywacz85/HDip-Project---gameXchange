import React from "react";
import { Segment, Button } from "semantic-ui-react";

export default function PostDetailsTitle() {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <h2>Description and photos</h2>
      </Segment>

      <Segment attached='bottom' clearing>
      <Button color='blue'>Accept Xchange</Button>
      <Button floated='right'>Delete</Button>
        

      </Segment>
    </Segment.Group>
  );
}
