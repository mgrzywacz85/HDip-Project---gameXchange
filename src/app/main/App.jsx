import React from 'react';
import NavBar from '../../posts/nav/NavBar';
import { Container } from 'semantic-ui-react';
import PublicDashboard from '../../posts/publicDashboard/PublicDashboard';

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
