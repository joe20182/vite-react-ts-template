import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@/router'

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <div className="links">
        <Link to="/about">About</Link>&nbsp;
        <Link to="/about/A">About Nested</Link>
      </div>
      <div className="page-wrapper">
        <Suspense fallback={<div>Loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
      </div>
    </div>
  )
}

export default App
