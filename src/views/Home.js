import Contact from "../sections/contact";
import Digital from "../sections/digital";
import Footer from "../sections/footer";
import Header from "../sections/header";
import Main from "../sections/main";
import Services from "../sections/services"

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Services />
      <Digital />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
