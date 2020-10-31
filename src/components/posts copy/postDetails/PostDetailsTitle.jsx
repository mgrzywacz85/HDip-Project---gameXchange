import React from "react";
import { Segment } from "semantic-ui-react";

export default function PostDetailsTitle({ detailedPost }) {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <h1>{detailedPost.title}</h1>
      </Segment>
    </Segment.Group>
  );
}
