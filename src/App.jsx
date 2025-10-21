import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import "./App.css"


export default function App() {
  return (
    <div className="container">
      <div className="inner">
        <div className="row">
          <Card1 />
          <Card2 />
        </div>
        <div className="row">
          <Card3 />
          <Card4 />
        </div>
      </div>
      <Card5 />
    </div>
  );
}
