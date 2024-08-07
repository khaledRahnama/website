function Button() {

    const handleClick = (e) => e.target.textContent = "ouch ! ☹️ ";
    // const handleClick = () => console.log("OUCH!");

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    // let count =0;
    // const handleClick = (name) => {
    //     if(count<3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     }else {
    //         console.log(`${name} stop clicking me!`)
    //     }

    // }

    return( 
        
        // <button className="button" onClick={handleClick}> Click me 😀 </button>

        // <button className="button" onClick={handleClick2}> Click me 😀 </button>
        // <button className="button" onClick={()=> handleClick2("Khaled")}> Click me 😀 </button>
        // <button className="button" onClick={()=>handleClick("khaled")}> Click me 😀 </button>
        <button className="button" onDoubleClick={(e) => handleClick(e)}> Click me 😀 </button>


    );

}
export default Button