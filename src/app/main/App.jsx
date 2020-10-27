import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { Route, useLocation } from "react-router-dom";
import NavBar from "../../components/posts/nav/NavBar";
import PostDashboard from "../../components/posts/postDashboard/PostDashboard";
import PostForm from "../../components/posts/postForm/PostForm";
import PostDetails from "../../components/posts/postDetails/PostDetails";
import LandingPage from "../../components/landing/LandingPage";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import Alert from '../alert/Alert';
import AuthToken from '../utils/AuthToken';
import { loadUserAction } from "../reduxStore/actions/AuthActions";
import store from '../../app/reduxStore/configureStore';

if (localStorage.token) {
  AuthToken(localStorage.token);
}

export default function App() {
  const { key } = useLocation();

  useEffect(() => {
    store.dispatch(loadUserAction());
  });

  return (
    <>
      <Route exact path='/' component={LandingPage} />

      <Route
        path={"/(.+)"} //expression which helps separate the Home page from the NavBar
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/posts' component={PostDashboard} />
              <Route path='/posts/:id' component={PostDetails} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route
                path={["/newPost", "/edit/:id"]}
                component={PostForm}
                locationKey={key}
              />
              <Alert />              
            </Container>
          </>
        )}
      />
    </>
  );
}
