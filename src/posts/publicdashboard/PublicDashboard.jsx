import React from 'react';
import { Grid } from 'semantic-ui-react';
import PublicPostList from './PublicPostList';
import XchangeForm from '../xchangeForm/XchangeForm'

export default function PublicPosts(){
    return (
        <Grid>
            <Grid.Column width={10} >
                <PublicPostList />
            </Grid.Column>
            <Grid.Column width={6} >
                <XchangeForm />
            </Grid.Column>
        </Grid>
    )
}