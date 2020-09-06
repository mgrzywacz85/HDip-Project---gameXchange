import React from 'react';
import PublicPosts from '../../posts/publicdashboard/PublicDashboard';
import NavBar from '../../posts/nav/NavBar';
import { Container } from 'semantic-ui-react';
import PublicDashboard from '../../posts/publicdashboard/PublicDashboard';

export default function App() {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <PublicDashboard />
      </Container>      
    </>
  );
}
