import { useState } from 'react'
import './App.css'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positivePercentage = total === 0 ? 0 : ((good + neutral) / total) * 100

  return (
	<div>
	  <h1>Anna palautetta</h1>
	  <Button onClick={() => setGood(good + 1)} text="Hyvä" />
	  <Button onClick={() => setNeutral(neutral + 1)} text="Neutraali" />
	  <Button onClick={() => setBad(bad + 1)} text="Huono" />
	  {total > 0 ? (
		<Statistics 
		  good={good} 
		  neutral={neutral} 
		  bad={bad} 
		  total={total} 
		  average={average} 
		  positivePercentage={positivePercentage} 
		/>
	  ) : (
		<p>Ei annettuja palautteita</p>
	  )}
	</div>
  )
}

export default App

