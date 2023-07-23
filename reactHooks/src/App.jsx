import "./App.scss";

import "react-toastify/dist/ReactToastify.css";
import HeadComponent from "./views/headComponent";
import FootComponent from "./views/FootComponent";
import ContentComponent from "./views/ContentComponent";

function App() {
  return (
    <>
      <HeadComponent></HeadComponent>
      <ContentComponent></ContentComponent>
      <FootComponent></FootComponent>
    </>
  );
}

export default App;
