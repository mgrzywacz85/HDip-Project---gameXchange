import React from 'react';
import { Grid } from 'semantic-ui-react';
import PublicPostList from './PublicPostList'

export default function PublicPosts(){
    return (
        <Grid>
            <Grid.Column width={10} >
                <PublicPostList />
            </Grid.Column>
            <Grid.Column width={6} >
                <h2>Right column</h2>   
            </Grid.Column>
        </Grid>
    )
}