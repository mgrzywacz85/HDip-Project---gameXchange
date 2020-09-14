import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

export default function LoggedOut({LogOut}) {
  return (
    <Menu.Item position='right'>
      <Dropdown pointing='top right' text='Menu'>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/newPost' text='Create Xchange' />
                <Dropdown.Item onClick={LogOut} text='Log out' />
            </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
