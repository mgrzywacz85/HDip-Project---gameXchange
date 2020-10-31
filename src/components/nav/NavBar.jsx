import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutAction } from "../../app/reduxStore/actions/AuthActions";
import LoggedIn from "./loggingState/LoggedIn";
import LoggedOut from "./loggingState/LoggedOut";


const NavBar = ({ auth: { isAuthenticated, loading }, logoutAction }) => {

  const loggedIn = isAuthenticated;

  return (
    <Menu inverted fixed='top'>
      <Container>
        {loggedIn ? (
          <Menu.Item as={NavLink} exact to='/' header>
            <img src='/img/logo.png' alt='logo' style={{ marginRight: 12 }} />
            GameXchange Dublin
          </Menu.Item>
        ) : (
          <Menu.Item>
            <img src='/img/logo.png' alt='logo' style={{ marginRight: 12 }} />
            GameXchange Dublin
          </Menu.Item>
        )}

        {loggedIn && <Menu.Item as={NavLink} exact to='/posts' name='Posts' />}

        {loggedIn && (
          <Menu.Item as={NavLink} to='/newPost' name='New Post'>
            <Button basic color='blue' inverted content='Post Xchange' />
          </Menu.Item>
        )}

        {loggedIn ? (
          <LoggedIn LogOut={logoutAction} />
        ) : (
          <LoggedOut />
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
