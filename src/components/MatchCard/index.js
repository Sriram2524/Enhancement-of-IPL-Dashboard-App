// Write your code here
import './index.css'

const MatchCard = props => {
  const {each} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = each
  const lostOrWIn = matchStatus === 'Won' ? 'won' : 'lose'
  return (
    <li className="match-card-list">
      <img
        className="match-acrd-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-heading">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`matchStatus ${lostOrWIn}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
