import Community from "./pages/Community";
import Home from "./pages/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home/>,
  },
  {
    path:"/community-funding",
    element:<Community/>
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
