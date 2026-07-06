const Card = ({title, price}) => {



    return(
        <div>
            <h1>{title}</h1>
            <h1>{price.toFixed(2)}</h1>
        </div>
    )
}

export default Card