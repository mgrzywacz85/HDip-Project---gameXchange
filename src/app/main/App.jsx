import React, {useState} from 'react';
import NavBar from '../../posts/nav/NavBar';
import { Container } from 'semantic-ui-react';
import PublicDashboard from '../../posts/publicDashboard/PublicDashboard';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

    function handleSelectPost(post){
    setSelectedPost(post);
    setFormOpen(true);
  }

    function handleOpenNewPostForm() {
      setSelectedPost(null);
      setFormOpen(true);
    }



  return (
    <>
      <NavBar setFormOpen={handleOpenNewPostForm} />
      <Container className='main'>
        <PublicDashboard 
        formOpen={formOpen} 
        setFormOpen={setFormOpen} 
        selectPost={handleSelectPost}
        selectedPost={selectedPost}
        />
      </Container>      
    </>
  );
}
