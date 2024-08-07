import profilePic from './assets/profilePic.jpeg'

function Card() {
    return (
        <div className="card">
            {/* <img className="" src="https://via.placeholder.com/150" alt="profile picture" /> */}
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title"> Software Engineer</h2>
            <p className="card-text"> Professional Software Engineer Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, praesentium accusamus, inventore possimus ea dolorem nihil ut veritatis consequatur, nisi dignissimos. Nemo aut et quibusdam nobis aliquid numquam, fuga eveniet.</p>
        </div>
    );
}
export default Card