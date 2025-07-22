import { createBrowserRouter, RouterProvider } from "react-router";

import { childrenRoutes } from "./utils/childrenRoutes";

import PageLayout from "./layouts/PageLayout";

import NotFound from "./pages/NotFound";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: childrenRoutes,
    errorElement: <NotFound />,
  },
]);

console.log("Router initialized with routes:", childrenRoutes);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
