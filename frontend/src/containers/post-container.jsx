import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Post from '../components/posts/post'

const mapStateToProps = state => {
  return {
    post: state.posts.post
  }
}

export default connect(mapStateToProps)(Post)
