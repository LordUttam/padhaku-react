import { Routes, Route } from "react-router-dom";
import { LandingPage } from "pages";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </>
  );
};
