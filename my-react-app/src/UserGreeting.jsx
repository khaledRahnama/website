function UserGreeting(props) {

   return(props.isLoggedIn ? <h2 className="welcome-message"> Welcome {props.username}</h2>: 
   <h2 className="login-prompt">please log in to continure</h2>);


}

export default UserGreeting