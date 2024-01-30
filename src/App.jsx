import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Result from "./components/Result/Result";

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/result', element: <Result /> },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
