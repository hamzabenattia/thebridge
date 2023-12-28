import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './Page/Admin/Dashboard';
import Home from './Page/Home';
import AddItem from './Page/Admin/AddItem';
import Sidebar from './components/Sidebar';
import Edit from './Page/Admin/Edit';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
   {
    path: "dashboard",
    element: <Sidebar/>,
    children: [
      {
        path: "all",
        element: <Dashboard/>,
      },
      {
        path: "add",
        element: <AddItem/>,
      },
      {
        path: "edit/:id",
        element: <Edit/>,
      }
    ],
  },
 

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App
