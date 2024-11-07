import "./asset/css/style.css";
import Header from "./component/header";
import Main from "./component/main";
import Footer from "./component/footer";
const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
