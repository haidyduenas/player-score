let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
   {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
   {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

function pointsSet(players){
  return players.map(player => player.score).reduce((playerA, playerB) => playerA + playerB);
}
const Header = ({players}) => {
  return (
    <div>
      <header className='header'>
        <table className='stats'>
        <tbody>
          <tr>
            <td>PLAYERS:</td>
            <td>{players.length}</td>
          </tr>
          <tr>
            <td>TOTAL POINTS:</td>
            <td>{pointsSet(players)}</td>
          </tr>
          </tbody>
        </table>
        <div className='stopwatch'>
          <h2>STOPWATCH</h2>
          <h1 className='stopwatch-time'>0</h1>
          <button>start</button>
          <button>reset</button>
        </div>
      </header>
    </div>
  );
}
const PlayerList = ({players}) => {
  return (
    <div>
      {
        players.map((item) => {
          return <div className='player' key={item.name}>
            <div className='player-name'>{item.name}</div>
            <div className='player-score counter'>
              <button className='counter-action decrement'>-</button>
              <span className='counter-score'>{item.score}</span>
              <button className='counter-action increment'>+</button>
            </div>
          </div>
        })
      }
    </div>
  );
}
const PlayerForm = () => {
  return (
    <div className='add-player-form'>
      <form>
        <input type="text" placeholder='ENTER A NAME' />
        <input type="submit" value='add player' />
      </form>
    </div>
  );
}
const Application = ({ title, players }) => {
  return (
    <div className='scoreboard'>
      <Header players={players} />
      <PlayerList players={players}/>
      <PlayerForm />    
    </div>
  );
}

ReactDOM.render(<Application title="Scoreboard" players = {PLAYERS}/>, document.getElementById('container'));