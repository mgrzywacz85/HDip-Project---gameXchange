import { CREATE_POST, DELETE_POST, UPDATE_POST } from "./postsConstants";

export function createPost(post){
   return{
       type: CREATE_POST,
       payload: post
   }
}

export function updatePost(post){
    return{
        type: UPDATE_POST,
        payload: post
    }
 }

 export function deletePost(postID){
    return{
        type: DELETE_POST,
        payload: postID
    }
 }