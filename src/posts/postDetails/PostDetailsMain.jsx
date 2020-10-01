import React from "react";
import { Link } from "react-router-dom";
import { Segment, Button, Item } from "semantic-ui-react";

export default function PostDetailsTitle({ detailedPost }) {

  return (
    <Segment.Group>
      <Segment attached='top'>
        <h3>{detailedPost.description}</h3>
        <p />
        <Item>
          <Item.Image size='large' src={detailedPost.photo} />
        </Item>
      </Segment>

      <Segment attached='bottom' clearing>
        <Button color='violet'>Accept Xchange</Button>
        <Button as={Link} to={`/edit/${detailedPost.id}`} floated='right'>
          Edit
        </Button>
      </Segment>
    </Segment.Group>
  );
}
