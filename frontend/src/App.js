import AppLayout from "./components/AppLayout";
import { Routes, Route } from "react-router-dom";
import Task from "./components/Task";
import { Toaster } from "react-hot-toast";
function App() {

  return (
    <AppLayout>
  {/* Toaster for Notifications */}
  <Toaster position="top-right" gutter={8} />

  {/* Routes Setup */}
  <Routes>
    <Route path="/:projectId" element={<Task />} />

    {/* Default Route for No Project Selected */}
    <Route
      path="/"
      element={
        <div className="flex flex-col items-center justify-center w-full h-screen p-4 overflow-hidden">
          {/* Updated Image Size & Responsiveness */}
          <img
            src="./image/welcome.svg"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl"
            alt="Welcome"
          />

          {/* Heading Style Update */}
          <h1 className="mt-6 text-xl md:text-2xl lg:text-3xl font-bold text-pink-600 text-center">
            Select or Create a New Project
          </h1>
        </div>
      }
    />
  </Routes>
</AppLayout>

  );
}

export default App;
