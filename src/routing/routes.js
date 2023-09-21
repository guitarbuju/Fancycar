import MainLayout from "../components/MainLayout";
import Home from '../pages/Home.jsx'
import Cars from '../pages/Cars.jsx'
import Detail from '../pages/Detail.jsx'
import Checkout from '../pages/Checkout.jsx'
import About from "../pages/About";
import Contact from "../pages/Contact";
import Hey from "../pages/Hey";



const routes =[{
path:'/',
Component:MainLayout,
children:[
    {
        index:true,
        Component:Home
    },
    {
        path:'/about',
        Component:About
    },
    {
        path:'/cars',
        Component:Cars
    },
    {
        path: "/detail",
        Component: Detail,
      },

      {
        path: "/checkout",
        Component: Checkout,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/hey",
        Component: Hey,
      },

      
]



}
]

export default routes





