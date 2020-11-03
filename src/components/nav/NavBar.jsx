import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container, Button, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutAction } from "../../app/reduxStore/actions/AuthActions";

import { Link } from "react-router-dom";

const NavBar = ({ auth: { isAuthenticated, loading }, logoutAction }) => {

  const loggedIn = isAuthenticated;

  function logOutNow(){
    logoutAction();
    window.location.reload();
  }

  return (
    <Menu inverted fixed='top'>
      <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src='/img/logo.png' alt='logo' style={{ marginRight: 12 }} />
            GameXchange Dublin
          </Menu.Item>


        <Menu.Item as={NavLink} exact to='/posts' name='Posts' />

        {loggedIn && !loading && (
          <Menu.Item as={NavLink} to='/newPost' name='New Post'>
            <Button basic color='blue' inverted content='Post Xchange' />
          </Menu.Item>
        )}

        {loggedIn && !loading ? (
              <Menu.Item position='right'>
              <Dropdown pointing='top right' text='Menu'>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/newPost' text='Create Xchange' />
                        <Dropdown.Item onClick={logOutNow} text='Log out' />
                    </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
        ) : (
          <Menu.Item position='right'>
          <Button as={Link} to='/login'
          basic 
          inverted 
          content='Login' />
          <Button as={Link} to='/register'
            basic
            inverted
            content='Register'
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
        )}
        {/* the above will check if the user is logged in */}
      </Container>
    </Menu>
  );
};

NavBar.propTypes = {
  logoutAction: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps, { logoutAction })(NavBar);
