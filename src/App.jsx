import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  const currentPath = window.location.pathname;
  const pageRoutes = {
    "/careers": Careers,
    "/contact": Contact,
    "/privacy": Privacy,
    "/terms": Terms,
  };
  const CurrentPage = pageRoutes[currentPath] ?? Home;

  useEffect(() => {
    function scrollToCurrentHash() {
      if (!window.location.hash) {
        return;
      }

      const target = document.querySelector(window.location.hash);

      if (target) {
        target.scrollIntoView({ block: "start" });
      }
    }

    requestAnimationFrame(scrollToCurrentHash);
    window.addEventListener("hashchange", scrollToCurrentHash);

    return () => {
      window.removeEventListener("hashchange", scrollToCurrentHash);
    };
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <Navbar />
      <CurrentPage />
      <Footer />
    </div>
  );
}

export default App;
