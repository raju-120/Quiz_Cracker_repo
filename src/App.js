import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Main from './Layout/Main';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Quiz from './Components/Quiz/Quiz';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quiz:id',
          element: <Quiz></Quiz>,
          loader: ({params}) => 
                fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
