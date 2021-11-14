import "./App.css";
import Card from "./component/Card";

// import Img from "./component/Img";
// import image from "./component/images/Berylijn-profile.jpg";

function App() {
  return (
    <div className="App">
      {/* <Img src={image} /> */}
      <Card
        style={{ backgroundColor: "red" }}
        name="Beryl Ilenwabor"
        title="Front-end developer"
        description="Passionate about creativity"
      />
    </div>
  );
}

export default App;
