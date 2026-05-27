import "../App.css"

const Card = ({img, h1, p}) => {
    return(

            <div className="card">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                    <h1>{h1}</h1>
                    <p>{p}</p>
                    <a href="">Get Started</a>
            </div>

    )
}

export default Card