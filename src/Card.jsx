import fox from "./assets/fox.jpg"
// here, we have imported fox.jpg from assets folder
// Here, blue colour ma lekheko fox ma hamle jun nam rakhe  pani huncha ani curly braces ma tei nam lekhna parcha
function Card(){
    return(
 <div className="card">
    <img src={fox} alt="card-img" className="card-image"></img>
    <h2>Ddeonu</h2>
    <p>Frontend Developer and UI/UX Designer</p>
 </div>
    );
}
export default Card