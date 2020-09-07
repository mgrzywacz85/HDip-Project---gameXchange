import React from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

export default function PostForm(){
    return(

        //Adding the clearing property helps align the buttons under the fields correctly
        <Segment clearing>
            <Header content='Post new Xchange' />
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
                    <input type="date" placeholder='Xchange Date' />
                </Form.Field>
                <Button type='submit' floated='right' content='Cancel'/>
                <Button type='submit' floated='right' content='Submit' color='blue' />
            </Form>
        </Segment>
    )
}