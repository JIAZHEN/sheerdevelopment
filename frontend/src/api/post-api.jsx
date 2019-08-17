class PostApi {
  static getAllPosts() {
    return fetch('http://localhost:5000/v1/posts').then(response => {
              return response.json()
            }).catch(error => {
              return error
            })
  }
}

export default PostApi
