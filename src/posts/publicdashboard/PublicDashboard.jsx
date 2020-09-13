import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import PublicPostList from './PublicPostList';
import XchangeForm from '../xchangeForm/XchangeForm';
import {testing1} from '../../app/mockAPIForTesting/testing1';

export default function PublicPosts({formOpen, setFormOpen, selectPost, selectedPost
}){
    const [posts, setPosts] = useState(testing1);
    
    function handleCreatePost(post){
        setPosts([...posts, post])
    }

    return (
        <Grid>
            <Grid.Column width={10} >
                <PublicPostList posts={posts} selectPost={selectPost}/>
            </Grid.Column>
            <Grid.Column width={6} >
                {formOpen && 
                <XchangeForm 
                setFormOpen={setFormOpen} 
                setPosts={setPosts}
                createPost={handleCreatePost}
                selectedPost={selectedPost}
                key={selectedPost ? selectedPost.id : null}  //this refreshes the XchangeForm component whenever Post New or View is clicked
                />}
            </Grid.Column>
        </Grid>
    )
}