import { useEffect, useState } from 'react';
import './App.css'
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false},
  { "src": "/img/potion-1.png", matched: false},
  { "src": "/img/ring-1.png", matched: false},
  { "src": "/img/scroll-1.png" ,matched: false},
  { "src": "/img/shield-1.png" ,matched: false},
  { "src": "/img/sword-1.png" ,matched: false},
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]      
      .sort(() => Math.random() - 0.5)                       
      .map((card) => ({ id: Math.random(), ...card}))       

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)   
  }



  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card;
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
      let num = cards.filter(card => card && card.matched === true)
      if(num.length===10){
        alert("Usted ha ganado el juego")
        shuffleCards();
      }
    }
  }, [choiceOne, choiceTwo])


  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }


  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns: {turns}</p> 
      <div className='card-grid'>
        {cards.map((card) => {
            return (
              <SingleCard
                key={card.id}
                card={card}
                src={card.src}
                handleChoice={handleChoice}
                cardFlipped={card === choiceOne || card === choiceTwo || card.matched}
                disabled={disabled}
              />
            );                
          })}
      </div>
    </div>
  );
  
}

export default App;