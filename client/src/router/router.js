import { createBrowserRouter } from "react-router-dom";
import ProjectBoard from "../components/ProjectsBoard";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/project_board",
        element: <ProjectBoard />,
      },
      {
        path: "/user_info",
        element: <h1 style={{ color: "white" }}>Hello User!</h1>,
      },
    ],
  },
]);

export default router;
