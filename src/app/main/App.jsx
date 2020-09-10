import React, {useState} from 'react';
import NavBar from '../../posts/nav/NavBar';
import { Container } from 'semantic-ui-react';
import PublicDashboard from '../../posts/publicDashboard/PublicDashboard';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <PublicDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>      
    </>
  );
}
