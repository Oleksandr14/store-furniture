import { Route, Routes } from "react-router-dom";

import { lazy } from "react";

import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
