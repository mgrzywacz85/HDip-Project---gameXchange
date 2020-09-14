import React from "react";
import { Segment } from "semantic-ui-react";

export default function PostDetailsTitle() {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <h1>Post title</h1>
      </Segment>
    </Segment.Group>
  );
}
