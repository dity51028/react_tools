import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { router } from "./routes"


function App() {
  const route = createBrowserRouter(router)
  
  return (
    <>
    <RouterProvider router={route}/>

     
    </>
  )
}

export default App
