import { createBrowserRouter } from "react-router-dom";
import Main from "../layer/Main/Main";
import Home from "../pages/Home";
import HistoryPage from "../pages/HistoryPage";
import About from "../pages/About";
import Login from "../pages/sharedPage/Login";
import NotFound from "../pages/sharedPage/NotFound";
import Dashboard from "../layer/Dashboard/Dashboard";
import AddContent from "../pages/dashboard/AddContent";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import SingleCardDetail from "../components/SingleCardDetail";
import ContentList from "../pages/dashboard/ContentList";
import UpdateContent from "../pages/dashboard/UpdateContent";

export const router = createBrowserRouter([
    {
      path: "/Home",
      element: <Main/>,
      children:[
        {
            path:"/Home",
            element:<Home/>
        },
        {
            path:"History",
            element:<HistoryPage/>
        },
        {
            path:"SingleCard/:id",
            element:<SingleCardDetail/>,
            loader:async({params})=> await fetch(`http://localhost:5000/food/${params.id}`)
        },
        {
            path:"About",
            element:<About/>
        },
      ]
    },
    {
        path:"/Dashboard",
        element:<Dashboard/>,
        children:[
           
        {
            path:"/Dashboard",
            element:<AdminDashboard/>
        },
        {
            path:"AddContent",
            element:<AddContent/>
        },
        {
            path:"ContentList",
            element:<ContentList/>
        },
        {
            path:"UpdateContent/:contentId",
            element:<UpdateContent/>
        },
    
    ]
    },
    {
        path:"",
        element:<Login/>
    },
    {
        path:"*",
        element:<NotFound/>
    },
  ]);