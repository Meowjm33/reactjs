import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="flex gap-6 justify-center p-4 bg-blue-600">
        <Link to="/" className="text-white font-medium hover:text-yellow-200 transition">Login</Link>
        <Link to="/bmi" className="text-white font-medium hover:text-yellow-200 transition">Bmi</Link>
        <Link to="/joke" className="text-white font-medium hover:text-yellow-200 transition">Joke</Link>
        <Link to="/map" className="text-white font-medium hover:text-yellow-200 transition">Map</Link>
        <Link to="/temperature" className="text-white font-medium hover:text-yellow-200 transition">Temperature</Link>

        </div>
        
    );

}
export default Header