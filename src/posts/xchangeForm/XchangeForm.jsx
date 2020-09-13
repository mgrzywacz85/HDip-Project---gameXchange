import cuid from 'cuid';
import React, {useState} from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

export default function XchangeForm({setFormOpen, setEvents, createEvent}){
    const initialValues = {
        title: '',
        description: '',
        preferredlocation: ''
    }
    const [values, setValues] = useState(initialValues);

    function handleNewXchangeSubmit(){
        var today = new Date();
        var currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        createEvent({...values, id: cuid(), date: currentDate, postedBy: 'Marcin', responders: []});
        setFormOpen(false);
    }

    function handleInputChange(event){
        const {name, value} = event.target;
        setValues({...values, [name]: value})
    }

    
    return(

        //Adding the clearing property helps align the buttons under the fields correctly
        <Segment clearing>
            <Header content='Post new Xchange' />
            <Form onSubmit={handleNewXchangeSubmit}>
                <Form.Field>
                    <input 
                    name='title'
                    type="text" 
                    placeholder='Xchange Title' 
                    value={values.title} onChange={event => handleInputChange(event)}/>
                </Form.Field>
                <Form.Field>
                    <input
                    name='description' 
                    type="text" 
                    placeholder='Description'
                    value={values.description} onChange={event => handleInputChange(event)} />
                </Form.Field>
                <Form.Field>
                    <input
                    name='preferredlocation' 
                    type="text" 
                    placeholder='Preferred Location'
                    value={values.preferredlocation} onChange={event => handleInputChange(event)} />
                </Form.Field>
                <Button onClick={() => setFormOpen(false)} type='submit' floated='right' content='Cancel'/>
                <Button type='submit' floated='right' content='Submit' color='blue' />
            </Form>
        </Segment>
    )
}