import { useState } from 'react'
import './App.css'

function App() {

  const [zombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

/* Create a new state variable named team and set the initial state to an empty array []. */
  const [team, setTeam] = useState([]);
/*   Create a new state variable named money and set the initial state to 100. */
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const handleAddFighter = (fighter) => {

    if (money >= fighter.price) {
     //reset team
      setTeam([...team, fighter]);
      //money
      setMoney(money - fighter.price);
      //strength
      setTotalStrength(totalStrength + fighter.strength);
      //agility
      setTotalAgility(totalAgility + fighter.agility);
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (fighter) => {
  //remove fighter 
    setTeam(team.filter((member) => member !== fighter));
  //increase money
    setMoney(money + fighter.price);
  //decrease strength
    setTotalStrength(totalStrength - fighter.strength);
  //decrease agility
    setTotalAgility(totalAgility - fighter.agility);
  };

  return (
    <div>
  
      <p>Money: {money}</p>
      <p>Total Team Strength: {totalStrength}</p>
      <p>Total Team Agility: {totalAgility}</p>

      <h2>Available Fighters</h2>
      <ul>
        {zombieFighters.map((zombieFighter, index) => (
          <li key={index}>
            <img src={zombieFighter.img} alt={zombieFighter.name} />
            <p>Name: {zombieFighter.name}</p>
            <p>Price: {zombieFighter.price}</p>
            <p>Strength: {zombieFighter.strength}</p>
            <p>Agility: {zombieFighter.agility}</p>
             {/*using anonymous function */}
            <button onClick={()=>handleAddFighter(zombieFighter)}>Add Fighter</button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>
     {/*  conditional rendering to check if empty else print team members */}
      {team.length === 0 ? ( <p>Pick some team members!</p> ) : (
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              <img src={member.img} alt={member.name} />
              <p>Name: {member.name}</p>
              <p>Price: {member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
            {/*using anonymous function */}
              <button onClick={() => handleRemoveFighter(member)}>Remove</button>
            </li> ))}
        </ul>
      )}
    </div>
  );
}

export default App;
