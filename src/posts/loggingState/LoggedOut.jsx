import React from "react";
import { Menu, Button } from "semantic-ui-react";

export default function LoggedOut({setLoggedIn}) {
  return (
    <Menu.Item position='right'>
      <Button 
      onClick={() => setLoggedIn(true)}
      basic 
      inverted 
      content='Login' />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
}
