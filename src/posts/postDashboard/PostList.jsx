import React from 'react';
import Post from './Post';

export default function PostList({posts, selectPost, deletePost}){
    return(
        <>
        {posts.map(post => (
            <Post post={post} key={post.id} selectPost={selectPost} deletePost={deletePost}/>
        )) }
        </>

    )
}