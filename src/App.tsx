import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./containers/Detail";
import Home from "./containers/Home";
import { Provider } from "react-redux";
import { Store } from "./reducers/store";
import "./App.css"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/:id",
      Component: Detail,
    },
  ]);
  return (
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
