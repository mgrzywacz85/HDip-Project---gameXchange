import React from 'react';
import { Grid } from 'semantic-ui-react';
import PostDetailsTitle from './PostDetailsTitle';
import PostDetailsMain from './PostDetailsMain';
import PostDetailsChat from './PostDetailsChat';

export default function PostDetails(){
    return(
        <Grid centered>
            <Grid.Column width={10} >
                <PostDetailsTitle />
                <PostDetailsMain />
                <PostDetailsChat />
            </Grid.Column>
        </Grid>
    )

}