import { useSelector } from "react-redux";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const showHeader = useSelector((state) => state.slice.showHeader);
  const showFooter = useSelector((state) => state.slice.showFooter);
  return (
    <div className="h-screen">
      {showHeader && <Header />}
      <Body />
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
