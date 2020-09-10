import React from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

export default function XchangeForm({setFormOpen}){
    return(

        //Adding the clearing property helps align the buttons under the fields correctly
        <Segment clearing>
            <Header content='Post new Xchange' />
            <Form>
                <Form.Field>
                    <input type="text" placeholder='Xchange Title' />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Description' />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Preferred Location' />
                </Form.Field>
                <Button onClick={() => setFormOpen(false)} type='submit' floated='right' content='Cancel'/>
                <Button type='submit' floated='right' content='Submit' color='blue' />
            </Form>
        </Segment>
    )
}