import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/layout';
import Home from './Components/home/home';
import About from './Components/about/about';
import Portfolio from './Components/portfolio/portfolio';
import Contacts from './Components/contacts/contacts';
import PageNotFound from './Components/pageNotFound/pageNotFound';

export default function App() {

  let router = createBrowserRouter([
      {
        path: '', element: <Layout/>, children:[
          {index: true, element: <Home />},
          {path: 'about', element: <About />},
          {path: 'portfolio', element: <Portfolio />},
          {path: 'contacts', element: <Contacts />},
          {path: '*', element: <PageNotFound />}
      ]}
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
