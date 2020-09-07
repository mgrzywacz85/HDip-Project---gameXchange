import React from 'react';
import PublicPost from './PublicPost';

export default function PublicPostList({events}){
    return(
        <>
        {events.map(event => (
            <PublicPost event={event} key={event.id} />
        )) }
        </>

    )
}