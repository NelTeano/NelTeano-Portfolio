import { Route, Routes } from 'react-router-dom'


// PAGES
import HomepagePage from './pages/Home/Home'
import ProjectsPage from './pages/Projects/Projects'
import ContactsPage from './pages/Contacts/Contacts'

function App() {
  
  const routes = [

    {
      pathname: "/",
      element: HomepagePage
    },
    {
      pathname: "/Projects",
      element: ProjectsPage
    },
    {
      pathname: "/Contact",
      element: ContactsPage
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
