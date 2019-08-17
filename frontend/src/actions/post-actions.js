import PostApi from '../api/post-api'

export const loadPosts = () => {
  return (dispatch) => {
    return PostApi.getAllPosts().then(({ posts, pagination }) => {
      dispatch({type: 'LOAD_POSTS_SUCCESS', posts})
    }).catch((error) => {
      throw(error)
    })
  }
}
