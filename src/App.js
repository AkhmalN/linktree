import Reactlogo from "./logo.svg";
import "./App.css";
import myLogo from "./assets/Group 1.png";
import { DATA } from "./data";

function App() {


  const handleOnCLick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="App">
      <div className="App-section">
        <img src={myLogo} alt="logo" />
        <h4 className="text-name">Akhmal Novanda</h4>
        <p className="text-mo">
          “Every Day is an Opportunity to Learn and Grow”
        </p>
        <div className="box">
          {DATA.map((item, idx) => {
            return (
              <>
                <div className="button-content" key={idx} onClick={()=>handleOnCLick(item.url)}>
                  <div className="image">
                    <img src={item.logo} alt={item.label} />
                  </div>
                  <div className="text">
                    <p>{item.text}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="footer">
        <p>Tech Stack : </p>
        <img src={Reactlogo} className="App-logo" alt="logo" />
        </div>
        
      </div>
    </div>
  );
}

export default App;
