import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import PublicPostList from './PublicPostList';
import XchangeForm from '../xchangeForm/XchangeForm';
import {testing1} from '../../app/mockAPIForTesting/testing1';

export default function PublicPosts({formOpen, setFormOpen}){
    const [events, setEvents] = useState(testing1);

    return (
        <Grid>
            <Grid.Column width={10} >
                <PublicPostList events={events} />
            </Grid.Column>
            <Grid.Column width={6} >
                {formOpen && 
                <XchangeForm setFormOpen={setFormOpen}/>}
            </Grid.Column>
        </Grid>
    )
}