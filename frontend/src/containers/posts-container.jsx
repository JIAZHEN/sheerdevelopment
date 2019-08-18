import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Posts from '../components/posts/posts'
import * as postActions from '../actions/post-actions'

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    pagination: state.posts.pagination
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(postActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
