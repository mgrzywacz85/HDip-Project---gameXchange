import React from 'react';
import { Grid } from 'semantic-ui-react';
import PostList from './PostList';
import { useSelector } from 'react-redux';
import { deletePost } from '../postRedux/PostActions';

export default function PostDashboard(){
    const {posts} = useSelector(state => state.postStore);
    
    // function handleCreatePost(post){
    //     setPosts([...posts, post])
    // }

    // function handleUpdatePost(updatedPost){
    //     //if the ID matches the post will be replaced
    //     //if the ID doesn't match, the original post will be returned
    //     setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
    // }

    // function handleDeletePost(postID){
    //     //setPosts(posts.filter(post => post.id !== postID));

    //     //this will iterate over all the events inside posts and will return all posts whose id doesn't match the selected ID
    //     //but the one that matches will not be returned, therefore all but the selected post will be returned
    //     //effectively removing the post with the selected ID
    // }

    return (
        <Grid centered>
            <Grid.Column width={12} >
                <PostList posts={posts} deletePost={deletePost}/>
            </Grid.Column>
        </Grid>
    )
}