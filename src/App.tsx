import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./router";
import {Suspense} from "react";


const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
