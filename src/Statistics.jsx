import PropTypes from 'prop-types'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {
  const statistics = [
	{ text: 'Hyvä', value: good },
	{ text: 'Perus', value: neutral },
	{ text: 'Paha', value: bad },
	{ text: 'Yhteensä', value: total },
	{ text: 'Keskiarvo', value: average.toFixed(2) },
	{ text: 'Positiivinen', value: `${positivePercentage.toFixed(2)}%` },
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