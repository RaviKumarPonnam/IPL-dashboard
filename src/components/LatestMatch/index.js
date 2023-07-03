import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    umpires,
    venue,
    result,
  } = latestMatchDetails
  return (
    <div className="latestMatchContainer">
      <div>
        <p className="latestMatchTitle">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img
          className="latestMatchImage"
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
        />
      </div>
      <div className="innings-container">
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
        </div>
        <div>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
        </div>
        <div>
          <p>Man of the match</p>
          <p>{manOfTheMatch}</p>
        </div>
        <div>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
