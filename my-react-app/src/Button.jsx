function Button() {

    const handleClick = () => console.log("OUCH!");

    const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    return( 
        
        // <button className="button" onClick={handleClick}> Click me 😀 </button>

        // <button className="button" onClick={handleClick2}> Click me 😀 </button>
        <button className="button" onClick={()=> handleClick2("Khaled")}> Click me 😀 </button>


    );

}
export default Button