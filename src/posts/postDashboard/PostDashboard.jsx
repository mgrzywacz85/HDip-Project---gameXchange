import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import PostList from './PostList';
import XchangeForm from '../postForm/PostForm';
import {testing1} from '../../app/mockAPIForTesting/testing1';

export default function PostDashboard({formOpen, setFormOpen, selectPost, selectedPost
}){
    const [posts, setPosts] = useState(testing1);
    
    function handleCreatePost(post){
        setPosts([...posts, post])
    }

    function handleUpdatePost(updatedPost){
        //if the ID matches the post will be replaced
        //if the ID doesn't match, the original post will be returned
        setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
        selectPost(null);
    }

    function handleDeletePost(postID){
        setPosts(posts.filter(post => post.id !== postID));

        //this will iterate over all the events inside posts and will return all posts whose id doesn't match the selected ID
        //but the one that matches will not be returned, therefore all but the selected post will be returned
        //effectively removing the post with the selected ID
    }

    return (
        <Grid>
            <Grid.Column width={10} >
                <PostList posts={posts} selectPost={selectPost} deletePost={handleDeletePost}/>
            </Grid.Column>
            <Grid.Column width={6} >
                {formOpen && 
                <XchangeForm 
                setFormOpen={setFormOpen} 
                setPosts={setPosts}
                createPost={handleCreatePost}
                updatePost={handleUpdatePost}
                selectedPost={selectedPost}
                key={selectedPost ? selectedPost.id : null}  //this refreshes the XchangeForm component whenever Post New or View is clicked
                />}
            </Grid.Column>
        </Grid>
    )
}