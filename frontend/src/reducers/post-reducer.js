import initialState from './initial-state';

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_POSTS_SUCCESS':
      state.posts = action.posts
      return state
    case 'LOAD_POST_SUCCESS':
      state.post = action.post
      return state
    default:
      return state
  }
}

export default postReducer
