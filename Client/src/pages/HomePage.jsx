import H_About from "../components/HomeComponents/H_About";
import H_Home from "../components/HomeComponents/H_Hero";
import Navbar from "../components/Navbar";
import H_Subscription from "../components/HomeComponents/H_Subscription";
import H_Awareness from "../components/HomeComponents/H_Awareness";
import Footer from "../components/Footer";
import H_Pollution from "../components/HomeComponents/H_Pollution";



function HomePage() {
  return (
    <div>
      <Navbar />
      <H_Home />
      <H_Awareness />
      <H_Pollution />
      <H_About />
      <H_Subscription />
      <Footer />
    </div>
  );
}

export default HomePage;