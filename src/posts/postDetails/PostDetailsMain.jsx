import React from "react";
import { Segment, Button } from "semantic-ui-react";

export default function PostDetailsTitle({detailedPost}) {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <h3>{detailedPost.description}</h3>
        <p/>
        <h4>... and photos will go here.</h4>
      </Segment>

      <Segment attached='bottom' clearing>
      <Button color='blue'>Accept Xchange</Button>
      <Button floated='right'>Delete</Button>
        

      </Segment>
    </Segment.Group>
  );
}
