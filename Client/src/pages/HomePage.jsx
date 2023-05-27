import H_About from "../components/HomeComponents/H_About";
// import ContactModal from "../components/ContactModal";
import H_Home from "../components/HomeComponents/H_Hero";
import Navbar from "../components/Navbar";
import H_Skill from "../components/HomeComponents/H_Skill";
import H_Project from "../components/HomeComponents/H_Project";
import Footer from "../components/Footer";



function HomePage() {
  return (
    <div>
      <Navbar />
      <H_Home />
      <H_About />
      <H_Skill />
      <H_Project />
      <Footer />
      {/* <ContactModal /> */}
    </div>
  );
}

export default HomePage;