const router = require('express').Router()
const NewsAPI = require('newsapi')
const apikey = require('../../secrets')
const newsapi = new NewsAPI(apikey);
module.exports = router;

// Get first 20 top headlines by country code
router.get('/:country', (req, res, next) => {
  newsapi.v2.topHeadlines({
    country: req.params.country
  }).then(articles => {
    res.send(articles).status(200)
  });
})

// Error handling
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
