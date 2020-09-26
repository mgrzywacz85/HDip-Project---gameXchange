export const createPost = ({post}) => {
   return{
       type: 'CREATE_POST',
       payload: post
   }
}

export const updatePost = ({post}) => {
    return{
        type: 'UPDATE_POST',
        payload: post
    }
 }

 export const deletePost = ({postID}) => {
    return{
        type: 'DELETE_POST',
        payload: postID
    }
 }