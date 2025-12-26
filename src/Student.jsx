
function Student({name="Guest", age="30", isStudent= "true"}){
    //here, age ra external elements haru lai {} bhitra rakhna parcha but inside the ({}) the age is kept in "" because here 30 is an argument not value!!
    return(
        <>
        <p >Name:{name}</p>
        <p>Age:{age}</p>
        <p>Student:{isStudent}</p>
            </>
    );
}
export default Student