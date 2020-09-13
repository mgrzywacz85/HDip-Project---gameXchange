import cuid from 'cuid';
import React, {useState} from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

export default function XchangeForm({setFormOpen, setPosts, createPost, selectedPost}){
    
    
    const defaultValues = selectedPost ?? {
        title: '',
        description: '',
        preferredlocation: ''
    }

    
    const [values, setValues] = useState(defaultValues);

    function handleSubmitNewPost(){
        var today = new Date();
        var currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        createPost({...values, id: cuid(), userPhotoURL: '././img/user.png', date: currentDate, postedBy: 'Marcin', responders: []});
        setFormOpen(false);
    }

    function handleChangeInput(post){
        const {name, value} = post.target;
        setValues({...values, [name]: value})
    }

    
    return(

        //Adding the clearing property helps align the buttons under the fields correctly
        <Segment clearing>
            <Header content={selectedPost ? 'Edit Xchange' : 'Post new Xchange'} />
            <Form onSubmit={handleSubmitNewPost}>
                <Form.Field>
                    <input 
                    name='title'
                    type="text" 
                    placeholder='Xchange Title' 
                    value={values.title} onChange={post => handleChangeInput(post)}/>
                </Form.Field>
                <Form.Field>
                    <input
                    name='description' 
                    type="text" 
                    placeholder='Description'
                    value={values.description} onChange={post => handleChangeInput(post)} />
                </Form.Field>
                <Form.Field>
                    <input
                    name='preferredlocation' 
                    type="text" 
                    placeholder='Preferred Location'
                    value={values.preferredlocation} onChange={post => handleChangeInput(post)} />
                </Form.Field>
                <Button onClick={() => setFormOpen(false)} type='submit' floated='right' content='Cancel'/>
                <Button type='submit' floated='right' content='Submit' color='blue' />
            </Form>
        </Segment>
    )
}