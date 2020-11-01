import React from 'react';
import { Grid } from 'semantic-ui-react';
import PostDetailsTitle from './PostDetailsTitle';
import PostDetailsMain from './PostDetailsMain';
import PostDetailsChat from './PostDetailsChat';
import { useSelector } from 'react-redux';

export default function PostDetails({match}){
    const detailedPost = useSelector(state => state.PostReducer.posts.find(selectedPost => selectedPost.id === match.params.id))
    
    return(
        <Grid centered>
            <Grid.Column width={10} >
                <PostDetailsTitle detailedPost={detailedPost} />
                <PostDetailsMain detailedPost={detailedPost} />
                <PostDetailsChat />
            </Grid.Column>
        </Grid>
    )

}