import Navbar from "./components/Navbar";
import Footer from "./pages/Home/Footer";
import Herosection from "./pages/Home/Herosection";
import Partnership from "./pages/Home/Partnership";
import ServiceCard from "./pages/Home/ServiceCard";
import Shop from "./pages/Home/Shop";
import Testimony from "./pages/Home/Testmonial";
import AboutUs from "./pages/aboutus/page";
export default function Home() {
  return (
    <div className="w-full justify-center align-center">
      {/* <Navbar /> */}
      <Herosection />
      <ServiceCard />
      <AboutUs />
      <Shop />
      <Testimony />
      <Partnership />
      <Footer />
    </div>
  );
}
