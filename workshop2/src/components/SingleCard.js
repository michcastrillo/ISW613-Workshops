import './SingleCard.css';

function SingleCard(props) {

    const handleClick = () => {
        if (!props.disabled) {
            props.handleChoice(props.card);
        }
    }

    return (
        <div className='card'>
            <div className={props.cardFlipped ? "flipped" : ""}>
                <img className='front' src={props.src}/>
                <img className='back' src='/img/cover.png' onClick={handleClick}/>
            </div> 
       </div>
    )

}

export default SingleCard