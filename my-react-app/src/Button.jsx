function Button() {

    const handleClick = () => console.log("OUCH!")

    return( 
        

        <button className="button" onClick={handleClick}> Click me 😀 </button>
        
    );

}
export default Button