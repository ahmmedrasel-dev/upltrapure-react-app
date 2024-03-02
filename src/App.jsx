import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routes";
import { useEffect, useState } from "react";
import Loader from "./components/Shared/Loader/Loader";
import { Toaster } from "react-hot-toast";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
      <Toaster />
    </>
  );
}

export default App;
