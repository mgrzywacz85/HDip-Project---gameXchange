import React from 'react';
import { Segment, Header, Form } from 'semantic-ui-react';

export default function PostForm(){
    return(
        <Segment>
            <Header content='Create new Xchange' />
            <Form>
                <Form.Field>
                    <input type="text" placeholder='Your Xchange Title' />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Description' />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Looking for' />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Xchange Location' />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Xchange Date' />
                </Form.Field>
            </Form>
        </Segment>
    )
}