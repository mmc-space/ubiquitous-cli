# Routing using [react-router](https://reactrouter.com/en/6.6.1)


## example

### routes
```tsx
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/pages/error";

const WorkSpace = lazy(() => import("@/pages/workspace"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <WorkSpace />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default router;
```

### your app entry

```tsx
import { RouterProvider } from "react-router-dom";

import { Suspense } from "react";
import router from "@/router";

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<h1>loading...</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
```
