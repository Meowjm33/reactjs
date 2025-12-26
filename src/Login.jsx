 export default function Login(){
    return(
       <>
       {/* parent  */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-screen flex items-center justify-center ">
            {/* child */}
            <div className="bg-white rounded-lg p-10">
                <h2 className="text-3xl font-semibold text-center mb-7">Login</h2>
                <div className="mb-4">
                    <label className="font-semibold">Username</label>
                    <input type="text" placeholder="Enter your Username" className="w-full border-2  p-3 rounded-md"></input>
                </div>
                 <div className="mb-4">
                    <label className="font-semibold">Password</label>
                    <input type="password" placeholder="Enter your Password" className="w-full border-2  p-3 rounded-md"></input>
                </div>
                <button className="bg-blue-800 my-3 p-3 w-full border-2 rounded-lg text-cyan-50">Log In</button>
                <div className="text-center">
                 <p>Don't have an Account?</p>
                 <p className="text-blue-500 underline mb-4 cursor-pointer">Sign up</p>
                 </div>
                
                
               
            
        </div>
        
        </div>
        

        </>
    )
}