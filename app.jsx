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
  let addPoints = players.map(players => players.score);
  return addPoints.reduce((playerA, playerB) => {playerA + playerB});
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
const Application = ({ title, players }) => {
  return (
    <div className='scoreboard'>
      <Header players={players} />
    </div>
  );
}

ReactDOM.render(<Application title="Scoreboard" players = {PLAYERS}/>, document.getElementById('container'));