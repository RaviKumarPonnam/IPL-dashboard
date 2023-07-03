// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const APIdata = await response.json()

    const updatedAPIdata = APIdata.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamCardData: updatedAPIdata, isLoading: false})
  }

  render() {
    const {teamCardData, isLoading} = this.state

    return (
      <div className="full-container">
        {isLoading ? (
          <div data-testid="loader" className="loading-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div>
            <div>
              <div className="image-heading-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="image-length"
                />
                <h1 className="heading">IPL Dashboard</h1>
              </div>
            </div>
            <ul>
              {teamCardData.map(team => (
                <TeamCard key={team.id} eachTeam={team} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
