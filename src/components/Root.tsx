import Particles from "./Particles";
import { useTheme } from "./theme-provider";
import { Outlet, useRouterState } from "@tanstack/react-router";
import Nav from "./Nav";
import { Suspense } from "react";

function Root() {
  const { theme } = useTheme();
  const isLoading = useRouterState({ select: (state) => state.isLoading });

  return (
    <div className="relative min-h-screen w-full dark:bg-black bg-white overflow-x-hidden">
      {/* Full-screen background */}
      {theme === "dark" && <Particles className="fixed inset-0 z-[0]" />}

      {/* Responsive Navbar */}
      <Nav />

      {/* Overlay content */}
      <div className="relative pt-20 w-full">
        {/* Route-to-route loader */}
        {isLoading && (
          <div className="fixed top-0 left-0 w-full bg-purple-500 text-white p-2 text-center z-50 animate-pulse">
            Loading...
          </div>
        )}

        {/* Initial + route lazy loader */}
        <Suspense
          fallback={
            <div className="fixed top-0 left-0 w-full bg-purple-500 text-white p-2 text-center z-50 animate-pulse">
              Initial Loading...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default Root;
