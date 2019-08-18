import PostApi from '../api/post-api'

export const loadPosts = (req) => {
  return (dispatch) => {
    return PostApi.getAllPosts(req).then(({ posts, pagination }) => {
      dispatch({type: 'LOAD_POSTS_SUCCESS', posts})
    }).catch((error) => {
      throw(error)
    })
  }
}

export const loadPost = (req) => {
  return (dispatch) => {
    return PostApi.getPost(req).then((post) => {
      dispatch({type: 'LOAD_POST_SUCCESS', posts})
    }).catch((error) => {
      throw(error)
    })
  }
}

const actionsByPath = {
  '/': loadPosts,
  '/posts': loadPosts,
  '/post/': loadPost
}

export const actionFor = (req) => {
  const action = actionsByPath[req.path]
  return action ? action(req) : { type: 'IGNORE' }
}
