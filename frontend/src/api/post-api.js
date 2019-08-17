const fetch = require('node-fetch')

class PostApi {
  static getAllPosts() {
    return fetch('http://localhost:3003/v1/posts')
              .then(response => {
                return response.json()
              }).catch(error => {
                return error
              })
  }
}

export default PostApi
