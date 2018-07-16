import createHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'

// Creating our history object relative to our development environment
const history = process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHistory()

export default history
