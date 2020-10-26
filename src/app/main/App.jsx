import React from "react";
import { Container } from "semantic-ui-react";
import { Route, useLocation } from "react-router-dom";
import NavBar from "../../components/posts/nav/NavBar";
import PostDashboard from "../../components/posts/postDashboard/PostDashboard";
import PostForm from "../../components/posts/postForm/PostForm";
import PostDetails from "../../components/posts/postDetails/PostDetails";
import LandingPage from "../../components/landing/LandingPage";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

export default function App() {
  const {key} = useLocation();

  return (
    <>
      <Route exact path='/' component={ LandingPage } />

      <Route
        path={"/(.+)"} //expression which helps separate the Home page from the NavBar
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/posts' component={PostDashboard} />
              <Route path='/posts/:id' component={PostDetails} />
              <Route path={['/newPost','/edit/:id']} component={PostForm} locationKey={key} />
            </Container>
          </>
        )}
      />
    </>
  );
}
