import { useState } from "react";
import "./App.css";

function App() {
  let [weight, setWeight] = useState(0);
  let [height, setHeight] = useState(0);
  let [bmi, setBmi] = useState("");
  let [message, setMessage] = useState("");

  let handleCalBMI = function (e) {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi < 24.9) {
        setMessage("Your weight is normal");
      } else if (bmi < 29.9) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  };
  let Reload = function () {
    window.location.reload();
  };

  return (
    <div>
      <div className="container">
        <h2>BMI Calculator</h2>

        <form onSubmit={handleCalBMI}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (in)</label>
            <input
              type="text"
              placeholder="Enter Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Submit
          </button>

          <button className="btn" type="submit" onClick={Reload}>
            Reload
          </button>

          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
