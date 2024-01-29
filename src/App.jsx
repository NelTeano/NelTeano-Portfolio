import { Route, Routes } from 'react-router-dom'

// PAGES
import Homepage from './pages/Home'

function App() {
  
  const routes = [

    {
      pathname: "/",
      element: Homepage
    },
  ]

  

  return (
    <>
        <Routes>
          {routes.map((route, index)=> (
            <Route key={index} path={route.pathname} element={<route.element />} />
          ))}
        </Routes>
    </>
  )
}

export default App
