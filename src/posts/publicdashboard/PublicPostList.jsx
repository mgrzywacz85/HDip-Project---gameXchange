import React from 'react';
import PublicPost from './PublicPost';

export default function PublicPostList({posts, selectPost}){
    return(
        <>
        {posts.map(post => (
            <PublicPost post={post} key={post.id} selectPost={selectPost}/>
        )) }
        </>

    )
}