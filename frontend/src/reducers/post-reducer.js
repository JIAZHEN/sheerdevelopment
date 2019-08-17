import initialState from './initial-state';

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_POSTS_SUCCESS':
      return Object.assign({}, state, { posts: action.posts })
    default:
      return state
  }
}

export default postReducer
