import { createBrowserRouter } from "react-router-dom";
import AddTask from "../pages/addtask";
import TodaysTask from "../pages/today";

const router = createBrowserRouter([
    {
        path : "/",
        element: <AddTask/ >
    },
    {
        path: "/today",
        element: <TodaysTask />
    }
]);

export default router;