import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = recentMatches

  return (
    <li>
      <div className="matchCardContainer">
        <img
          alt={`competing team ${competingTeam}`}
          className="recentMatchLogo"
          src={competingTeamLogo}
        />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p className={matchStatus === 'Won' ? 'won' : 'lost'}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
