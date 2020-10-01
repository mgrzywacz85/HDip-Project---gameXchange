import React from "react";
import { List, Image } from "semantic-ui-react";

export default function PostResponder({ responder }) {
  return (
    <List.Item>
      <Image size='mini' circular src={responder.userphotoURL} />
    </List.Item>
  );
}
