import React from "react";
import { Link } from "react-router-dom";
import { Segment, Button } from "semantic-ui-react";

export default function PostDetailsTitle({ detailedPost }) {

  return (
    <Segment.Group>
      <Segment attached='top'>
        <h3>{detailedPost.description}</h3>
        <p />
        <h4>... and photos will go here.</h4>
      </Segment>

      <Segment attached='bottom' clearing>
        <Button color='blue'>Accept Xchange</Button>
        <Button as={Link} to={`/edit/${detailedPost.id}`} floated='right'>
          Edit
        </Button>
      </Segment>
    </Segment.Group>
  );
}
