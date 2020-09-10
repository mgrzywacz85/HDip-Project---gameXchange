import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

export default function NavBar({setFormOpen}) {

    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/img/logo.png" alt="logo" style={{marginRight: 12}}/>
                    GameXchange Dublin
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={() => setFormOpen(true)} basic color='blue' inverted content='Post Xchange'/>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login'/>
                    <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}