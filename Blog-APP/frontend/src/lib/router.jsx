import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import Post from "../pages/posts";
import { CreatePost } from "../pages/create";
import { UpdatePost } from "../pages/update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: ":id/",
    element: <Post />
  },
  {
    path: "/create",
    element: <CreatePost/>
  },
  {
    path: ":id/update",
    element:<UpdatePost />
  }
]);

export default router;