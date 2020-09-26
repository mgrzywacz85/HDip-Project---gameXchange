import React from "react";
import { Segment } from "semantic-ui-react";

export default function PostDetailsTitle({ post }) {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <h1>{post.title}</h1>
      </Segment>
    </Segment.Group>
  );
}
