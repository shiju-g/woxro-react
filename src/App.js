import "./index.css";
import NewsHeader from "./components/NewsHeader";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Services from "./Services";
import Contact from "./Contact";

const navData = [
  {
    id: 1,
    text: "Home",
  },
  {
    id: 2,
    text: "About Us",
  },
  {
    id: 3,
    text: "Services",
  },
  {
    id: 8,
    text: "Technology",
  },
  {
    id: 4,
    text: "Careers",
  },
  {
    id: 5,
    text: "Blogs",
  },
  {
    id: 6,
    text: "Our Works",
  },
  {
    id: 7,
    text: "Contact Us",
  },
];

function App() {
  return (
    <div className="bg-black min-h-screen">
      <div className="lg:container mx-auto">
        <NewsHeader />
        <Header data={navData} />
        <Banner />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default App;
