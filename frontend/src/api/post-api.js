const fetch = require('node-fetch')
const qs = require('qs')
const ENDPOINT = 'http://localhost:3003/v1/'

class PostApi {
  static getAllPosts(req) {
    const query = qs.parse(req.url)
    return fetch(`${ENDPOINT}/posts?${qs.stringify(query)}`)
              .then(response => {
                return response.json()
              }).catch(error => {
                return error
              })
  }

  static getPost(req) {
    const query = qs.parse(req.url)
    return fetch(`${ENDPOINT}/post/${query.slug}`)
              .then(response => {
                return response.json()
              }).catch(error => {
                return error
              })
  }
}

export default PostApi
