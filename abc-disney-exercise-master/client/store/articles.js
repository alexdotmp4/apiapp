import axios from 'axios'

// Action Types
const GET_ARTICLES = 'GET_ARTICLES'

// Action Creators
const getArticles = articles => ({type: GET_ARTICLES, articles})

// Thunks
export const fetchArticles = country => {
  return (dispatch) => {
    return axios.get(`/api/${country}`)
      .then(res => (res.data))
      .then(articles => (dispatch(getArticles(articles))))
      .catch(err => console.error('error fetching articles', err))
  }
}

// Reducer (return all relevant articles and update the store)
const reducer = (articles = [], action) => {
  switch (action.type){
    case GET_ARTICLES:
      return action.articles
    default:
      return articles
  }
}

export default reducer
