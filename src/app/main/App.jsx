import React from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../home/HomePage";
import NavBar from "../../posts/nav/NavBar";
import PostDashboard from "../../posts/postDashboard/PostDashboard";
import PostForm from "../../posts/postForm/PostForm";
import PostDetails from "../../posts/postDetails/PostDetails";

export default function App() {

  return (
    <>
      <Route exact path='/' component={HomePage} />

      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/posts' component={PostDashboard} />
              <Route path='/posts/:id' component={PostDetails} />
              <Route path='/newPost' component={PostForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}
