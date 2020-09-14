import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../home/HomePage";
import NavBar from "../../posts/nav/NavBar";
import PostDashboard from "../../posts/postDashboard/PostDashboard";
import PostForm from "../../posts/postForm/PostForm";
import PostDetails from "../../posts/postDetails/PostDetails";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  function handleSelectPost(post) {
    setSelectedPost(post);
    setFormOpen(true);
  }

  function handleOpenNewPostForm() {
    setSelectedPost(null);
    setFormOpen(true);
  }  

  return (
    <>
      <Route exact path='/' component={HomePage} />

      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar setFormOpen={handleOpenNewPostForm} />
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
