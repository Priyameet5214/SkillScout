import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Certificate from "./pages/Certificate";
import Certificate1 from "./pages/Certificate1";
import Internship from "./pages/Internship";
import Internship1 from "./pages/Internship1";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import Login1 from "./pages/Login1";
import Login2 from "./pages/Login2";
import TopPage from "./pages/TopPage";
import TopPage1 from "./pages/TopPage1";
import TopPage2 from "./pages/TopPage2";
import SimpleIconscisco from "./pages/SimpleIconscisco";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/certificate":
        title = "";
        metaDescription = "";
        break;
      case "/internship1":
        title = "";
        metaDescription = "";
        break;
      case "/internship":
        title = "";
        metaDescription = "";
        break;
      case "/analytics":
        title = "";
        metaDescription = "";
        break;
      case "/login1":
        title = "";
        metaDescription = "";
        break;
      case "/login2":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/top-page2":
        title = "";
        metaDescription = "";
        break;
      case "/top-page":
        title = "";
        metaDescription = "";
        break;
      case "/top-page1":
        title = "";
        metaDescription = "";
        break;
      case "/simpleiconscisco":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Certificate />} />

      <Route path="/certificate" element={<Certificate1 />} />

      <Route path="/internship1" element={<Internship />} />

      <Route path="/internship" element={<Internship1 />} />

      <Route path="/analytics" element={<Analytics />} />

      <Route path="/login1" element={<Login />} />

      <Route path="/login2" element={<Login1 />} />

      <Route path="/login" element={<Login2 />} />

      <Route path="/top-page2" element={<TopPage />} />

      <Route path="/top-page" element={<TopPage1 />} />

      <Route path="/top-page1" element={<TopPage2 />} />

      <Route path="/simpleiconscisco" element={<SimpleIconscisco />} />
    </Routes>
  );
}
export default App;
