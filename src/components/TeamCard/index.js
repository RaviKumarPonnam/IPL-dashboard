// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="li">
        <div>
          <div>
            <img className="team-logo" alt={name} src={teamImageUrl} />
            <p>{name}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
