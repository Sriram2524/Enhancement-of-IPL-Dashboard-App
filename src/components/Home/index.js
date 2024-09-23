// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamNames: []}

  componentDidMount() {
    this.getTeamNames()
  }

  getTeamNames = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamNames: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, teamNames} = this.state
    return (
      <div className="bg-container">
        <div className="logo-head-con">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="un-ordered-list">
            {teamNames.map(each => (
              <TeamCard key={each.id} eachTeamDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
