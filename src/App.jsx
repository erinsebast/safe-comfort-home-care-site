import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Careers from "./pages/Careers";
import Home from "./pages/Home";

function App() {
  const currentPath = window.location.pathname;
  const CurrentPage = currentPath === "/careers" ? Careers : Home;

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <Navbar />
      <CurrentPage />
      <Footer />
    </div>
  );
}

export default App;
