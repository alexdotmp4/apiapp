import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchArticles } from '../store'
import Article from './Article'

class USA extends Component {
  // Use local state to keep track of currently selected country
  constructor(props){
    super(props)
    this.state = {
      currentCountry: null
    }
    this.countryName = this.countryName.bind(this)
  }

  // On component mount, set local state and grab top 20 articles based on current country
  componentDidMount() {
    this.setState({ currentCountry: this.props.match.params.country },
      () => { this.props.fetchArticles(this.state.currentCountry) })
  }

  // When the component updates, check to see if the URI has changed
  // If it has, reset state and grab new headlines
  componentDidUpdate() {
    if (this.state.currentCountry !== this.props.match.params.country){
      this.setState({ currentCountry: this.props.match.params.country },
        () => { this.props.fetchArticles(this.state.currentCountry) })
    }
  }

  // Using the two-letter country code, return a human-readable country for display purposes
  countryName(code) {
    switch (code) {
      case 'be':
        return "Belgium"
      case 'br':
        return "Brazil"
      case 'hr':
        return "Croatia"
      case 'gb':
        return "England"
      case 'fr':
        return "France"
      case 'ru':
        return "Russia"
      case 'se':
        return "Sweden"
      case 'uy':
        return "Uruguay"
      case 'us':
        return "United States"
      default:
        return `Invalid country: ${code}`
    }
  }

  render() {
    let currentCountryName = this.countryName(this.state.currentCountry)
    console.log('articles: ', this.props.articles)
    return (
      <div>
        <div className='f2 avenir fl w-100 center pt4'>Articles from {currentCountryName}</div>
          <div className='fl w-100'>
          {!this.props.articles || this.props.articles.length === 0 ?
            <div className='article bg-light-gray fl w-100 center pa3'>
              <div className='f3 avenir'>No articles to see here :(</div>
            </div> :
            // Map through all returned articles and generate an article component for each one
            this.props.articles.map(article => {
              return <Article key={article.title} articleInfo={article} />
            })
          }
        </div>
      </div>
    )
  }
}

// Map all fetched articles from store to props
const mapState = (state) => {
  let sortedArticles = null

  if (state.articles.articles) {
    sortedArticles = state.articles.articles.sort((a,b) => {
      let dateA = new Date(a.publishedAt)
      let dateB = new Date(b.publishedAt)
      return dateA < dateB ? 1 : -1
    })
  }

  return { articles: sortedArticles }
}

// Map thunk to props
const mapDispatch = { fetchArticles }

export default withRouter(connect(mapState, mapDispatch)(USA))
