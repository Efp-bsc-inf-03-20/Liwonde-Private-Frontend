import Navbar from "./components/Navbar";
import Footer from "./pages/Home/Footer";
import Herosection from "./pages/Home/hero";
import Partnership from "./pages/Home/Partnership";
import ServiceCard from "./pages/Home/ServiceCard";
import Shop from "./pages/Home/Shop";
import Testimony from "./pages/Home/Testmonial";
import AboutUs from "./pages/about-us/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Herosection />
        <ServiceCard />
        <AboutUs />
        <Shop />
        <Testimony />
        <Partnership />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
