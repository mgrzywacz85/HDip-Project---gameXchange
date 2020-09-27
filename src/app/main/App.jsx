import React from "react";
import { Container } from "semantic-ui-react";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../home/HomePage";
import NavBar from "../../posts/nav/NavBar";
import PostDashboard from "../../posts/postDashboard/PostDashboard";
import PostForm from "../../posts/postForm/PostForm";
import PostDetails from "../../posts/postDetails/PostDetails";

export default function App() {
  const {key} = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage} />

      <Route
        path={"/(.+)"} //expression which helps separate the Home page from the NavBar
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
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
