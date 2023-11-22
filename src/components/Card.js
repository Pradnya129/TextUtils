function Card(props) {
    return(
    <div className="card">
        <img src={props.img} alt="" className="card-img"/>
        <h3>{props.title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, inventore? Dignissimos, neque!</p>
    </div>
    )
}
export default Card;