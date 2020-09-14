import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import LoggedOut from "../loggingState/LoggedOut";
import LoggedIn from "../loggingState/LoggedIn";
import { useState } from "react";

export default function NavBar({ setFormOpen }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/img/logo.png' alt='logo' style={{ marginRight: 12 }} />
          GameXchange Dublin
        </Menu.Item>
        <Menu.Item as={NavLink} exact to='/posts' name='Posts' />

        {loggedIn && (
          <Menu.Item as={NavLink} to='/newPost' name='New Post'>
            <Button basic color='blue' inverted content='Post Xchange' />
          </Menu.Item>
        )}

        {/* the above will only display the New Post option for users
                who are logged in */}

        {loggedIn ? (
          <LoggedIn setLoggedIn={setLoggedIn} />
        ) : (
          <LoggedOut setLoggedIn={setLoggedIn} />
        )}
        {/* the above will check if the user is logged in */}
      </Container>
    </Menu>
  );
}
