import Layout from "./components/layout/Layout"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Explore from './components/explore/Explore';
import Installapp from './components/Installapp/Installapp';
import Home from "./components/home/Home";
 import Displayalbum from "./components/displayalbum/Displayalbum";
import Acount from "./components/acount/Acount";





function App() {
  const router= createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<Layout/>}>
      <Route index element={<Home />} />
         <Route path="albums" element={<Home/>}>  </Route>
          <Route path='/album/:id' element={<Displayalbum/>}/> 
          
                <Route path='explore' element={<Explore/>}></Route>
       <Route path='install' element={<Installapp/>}></Route>
       <Route path='acount' element={<Acount/>}></Route>

      </Route>
    
    )
)
 

  return (
 <>
 <RouterProvider router={router}>  </RouterProvider>
 {/* <Layout/> */}
 </>
  )
}

export default App

