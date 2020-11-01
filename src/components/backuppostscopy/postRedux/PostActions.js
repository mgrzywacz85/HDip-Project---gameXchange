export function createPost(post) {
  return {
    type: 'CREATE_POST',
    payload: post,
  }
}

export function updatePost(post) {
  return {
    type: "UPDATE_POST",
    payload: post,
  }
}

export function deletePost(post) {
  return {
    type: "DELETE_POST",
    payload: post,
  }
}
