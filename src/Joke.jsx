import { useState } from "react";

function Joke() {
    //browser ma kei display garauna paryo bhane useState use huncha
    const[joke,setJoke] = useState(null)
    const[loading,setLoading] = useState(false) ///button press garesi matra load garcha so 'false' bhako re!
    const[error,setError] = useState('') //internet nabhako bela joke or joke fetch garne bela mileko bela
    const fetchJoke = async () =>{
      setLoading(true)
      setError("")
      try{
        const response = await fetch("http://official-joke-api.appspot.com/jokes/random")
        const data = await response.json()
        setJoke(data)
      }
      catch(err){
        setError("Failed to fetch the new joke. Try Again")
      }
      finally{
        setLoading(false)
      }

    }
    //API ko lagi async function nai banauna parcha
 
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center h-screen" >
        <div className="bg-white p-4 rounded-md text-center">
            <h1 className="text-lg font-semibold mb-3">Joke Generator</h1>
            {loading && <p>Loading...</p>}
            {error &&<p>{error}</p>}
            {joke && !loading &&(
              <div>
                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
              </div>
            )}
            <button onClick={fetchJoke}className="bg-blue-700 p-1 text-white rounded-md hover:bg-blue-600 cursor-pointer">Get Joke</button>
            {/* yo button click gare pachi fetchJoke bhanne function call huncha ani API call bhayera joke generate huncha */}
        </div>
      
    </div>
  )
}

export default Joke;
