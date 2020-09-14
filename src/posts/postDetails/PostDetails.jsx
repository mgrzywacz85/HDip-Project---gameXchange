import React from 'react';
import { Grid } from 'semantic-ui-react';
import PostDetailsTitle from './PostDetailsTitle';
import PostDetailsMain from './PostDetailsMain';
import PostDetailsChat from './PostDetailsChat';
import PostDetailsSide from './PostDetailsSide';

export default function PostDetails(){
    return(
        <Grid>
            <Grid.Column width={10}>
                <PostDetailsTitle />
                <PostDetailsMain />
                <PostDetailsChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <PostDetailsSide />
            </Grid.Column>
        </Grid>
    )

}