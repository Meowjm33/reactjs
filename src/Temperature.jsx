import { useState } from "react"


function Temperature() {
    const[temperature,setTemperature]= useState('')
    const[unit,setUnit]= useState('C')
    const[result,setResult]= useState(null)
    const convertTemperature = () => {
    if (temperature === "")//temperature diyeko chaina bhane!
       {
      alert("Please enter a temperature");
      return;
    }

    const temp = parseFloat(temperature);//parseFloat le float or integer jun data sanga pani kaam garcha
    let converted = {}; //array bala object

    if (unit === "C") {
      converted = {
        C: temp,
        F: (temp * 9) / 5 + 32,
        K: temp + 273.15,
      };
    } else if (unit === "F") {
      converted = {
        C: ((temp - 32) * 5) / 9,
        F: temp,
        K: ((temp - 32) * 5) / 9 + 273.15,
      };
    } else {
      converted = {
        C: temp - 273.15,
        F: ((temp - 273.15) * 9) / 5 + 32,
        K: temp,
      };
    }

    setResult({
      C: converted.C.toFixed(2),//2 DP samma matra answer dincha toFixed(2) le
      F: converted.F.toFixed(2),
      K: converted.K.toFixed(2),
    });
  };
  return (
    <div className="bg-gradient-to-r from-green-400 to-orange-300 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-10">
                <h2 className="text-2xl font-bold text-center mb-7 ">Temperature Converter</h2>
                {/* input */}
                
                    <input type="number" placeholder="Enter temperature" value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}className="w-full border-2  p-3 rounded-md"></input>
                
                
                  <select value={unit}
                  onChange={(e) => setUnit(e.target.value)} className="w-full border-2  p-3 rounded-md font-semibold">
                  <option>Celsius (&deg;C)</option>
                  <option>Farenheit (&deg;F)</option>
                  <option>Kelvin (K)</option>
                  </select>
                
                <button onClick={convertTemperature}className="bg-blue-800 my-3 p-3 w-full border-2 rounded-lg text-cyan-50">Convert</button>
                {/* Results */}
                {result && (
                <div className="mt-6 space-y-2 text-center">
                <p><strong>Celsius:</strong> {result.C} °C</p>
                <p><strong>Fahrenheit:</strong> {result.F} °F</p>
                <p><strong>Kelvin:</strong> {result.K} K</p>
              </div>
              )}
        </div>
        
    </div>
  )
}

export default Temperature;
