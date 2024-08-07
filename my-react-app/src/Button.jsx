function Button() {
    //inline css styling , it prevents global style conflicts becasue we are not dealing with  classNames 
    // it is easy to understand and it is convenient 
    // it is great for isolated components with minimum styling

    // different styling 
    // 1. External 
    // 2. Modules 
    // 3. Inline

    const styles = {

        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",

    }
    return (
        <button style={styles}>Click Me</button>
    );

}
export default Button