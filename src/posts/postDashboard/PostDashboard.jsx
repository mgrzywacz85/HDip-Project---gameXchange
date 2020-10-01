import React from 'react';
import { Grid } from 'semantic-ui-react';
import PostList from './PostList';
import { useSelector } from 'react-redux';

export default function PostDashboard(){
    const {posts} = useSelector(state => state.postStore);
    
    //previous handler functions no longer needed after moving to Redux

    return (
        <Grid  centered>
            <Grid.Column width={10} >
                <PostList posts={posts}/>
            </Grid.Column>
        </Grid>
    )
}