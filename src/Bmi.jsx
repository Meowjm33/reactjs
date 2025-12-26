import { useState } from "react"

export default function Bmi(){
   
        const[weight,setWeight]= useState('')
        const[height,setHeight]= useState('')
        const[bmi,setBmi]= useState(null)
        const[bmiCategory,setBmiCategory]= useState('')

     function calculateBmi(){
        if(weight && height){
            const heightInMeter = height/100;
            const bmiValue = (weight/(heightInMeter*heightInMeter)).toFixed(2)
            //to.Fixed(2) le round off garera 2 Decimal Points matra dincha
            setBmi(bmiValue) //?
            if(bmiValue<18.5){
                setBmiCategory("UnderWeight")
            }
            else if(bmiValue>=18.5 && bmiValue<25){
                setBmiCategory("Healthy weight")
            }
            else if(bmiValue>=25 && bmiValue<30){
                setBmiCategory("Overweight")
            }
            else{
                setBmiCategory("obese")
            }


        }
         else {
               alert("PLease enter Weight and height")
            }

     }
    return(
        <>
        <div className="bg-gradient-to-r from-pink-300 to-purple-500 h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg p-10">
                <h2 className="text-3xl font-semibold text-center mb-7">BMI Calculator</h2>
                <div className="mb-4">
                    <label className="font-semibold">Weight(kg)</label>
                    <input type="number" onChange={(e)=>setWeight(e.target.value)} //*
                    placeholder="Enter your Weight in kg" className=" my-2 w-full border-2  p-3 rounded-md"></input>
                </div>
                 <div className="mb-4">
                    <label className="font-semibold">Height</label>
                    <input type="number" onChange={(e)=>setHeight(e.target.value)}//*
                    placeholder="Enter your height in cm" className=" my-2 w-full border-2  p-3 rounded-md"></input>
                </div>
                <button onClick={calculateBmi} //*
                 className="bg-blue-800 my-3 p-3 w-full border-2 rounded-lg text-cyan-50">Calculate BMI</button>
                {bmi && (
                    <div>
                        <p>Your BMI: {bmi}</p>
                        <p>{bmiCategory}</p>
                    </div>
                )
                }
            
        </div>
        
        </div>
        
        
        </>
    )
}
//rfce le automatic appear huncha kehi