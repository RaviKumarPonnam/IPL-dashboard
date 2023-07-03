import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatchDetails: [],
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const APIdata = await response.json()

    const teamBannerImage = {
      teamBanner: APIdata.team_banner_url,
    }
    const latestMatch = {
      competingTeam: APIdata.latest_match_details.competing_team,
      competingTeamLogo: APIdata.latest_match_details.competing_team_logo,
      date: APIdata.latest_match_details.date,
      firstInnings: APIdata.latest_match_details.first_innings,
      id: APIdata.latest_match_details.id,
      manOfTheMatch: APIdata.latest_match_details.man_of_the_match,
      matchStatus: APIdata.latest_match_details.match_status,
      result: APIdata.latest_match_details.result,
      secondInnings: APIdata.latest_match_details.second_innings,
      umpires: APIdata.latest_match_details.umpires,
      venue: APIdata.latest_match_details.venue,
    }

    const recentMatch = APIdata.recent_matches.map(recentMatches => ({
      competingTeam: recentMatches.competing_team,
      competingTeamLogo: recentMatches.competing_team_logo,
      date: recentMatches.date,
      firstInnings: recentMatches.first_innings,
      id: recentMatches.id,
      manOfTheMatch: recentMatches.man_of_the_match,
      matchStatus: recentMatches.match_status,
      result: recentMatches.result,
      secondInnings: recentMatches.second_innings,
      umpires: recentMatches.umpires,
      venue: recentMatches.venue,
    }))

    this.setState({
      latestMatchDetails: latestMatch,
      teamBanner: teamBannerImage,
      recentMatches: recentMatch,
      isLoading: false,
    })
  }

  render() {
    const {
      latestMatchDetails,
      recentMatches,
      teamBanner,
      isLoading,
    } = this.state

    return (
      <div className="teamMatchesContainer">
        {isLoading ? (
          <div data-testid="loader" className="loading-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="banner-container">
              <img alt="team banner" src={teamBanner.teamBanner} />
            </div>
            <div>
              <p className="latestMatch-Title">Latest Matches</p>
              <div className="latestMatchParentContainer">
                <LatestMatch latestMatchDetails={latestMatchDetails} />
              </div>
            </div>
            <ul className="recent-match">
              {recentMatches.map(recentMatch => (
                <MatchCard recentMatches={recentMatch} key={recentMatch.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
