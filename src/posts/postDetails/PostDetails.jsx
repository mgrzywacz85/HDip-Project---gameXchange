import React from 'react';
import { Grid } from 'semantic-ui-react';
import PostDetailsTitle from './PostDetailsTitle';
import PostDetailsMain from './PostDetailsMain';
import PostDetailsChat from './PostDetailsChat';
import { useSelector } from 'react-redux';

export default function PostDetails({match}){
    const post = useSelector(state => state.post.posts.find(post => post.id === match.params.id))
    
    return(
        <Grid centered>
            <Grid.Column width={10} >
                <PostDetailsTitle post={post} />
                <PostDetailsMain post={post} />
                <PostDetailsChat />
            </Grid.Column>
        </Grid>
    )

}