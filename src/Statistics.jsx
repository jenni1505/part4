import PropTypes from 'prop-types'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {
  const statistics = [
	{ text: 'Good', value: good },
	{ text: 'Neutral', value: neutral },
	{ text: 'Bad', value: bad },
	{ text: 'Total', value: total },
	{ text: 'Average', value: average.toFixed(2) },
	{ text: 'Positive', value: `${positivePercentage.toFixed(2)}%` },
  ]

  return (
	<div>
	  <h2>Statistics</h2>
	  {statistics.map(stat => (
		<StatisticLine key={stat.text} text={stat.text} value={stat.value} />
	  ))}
	</div>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  average: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics