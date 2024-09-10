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
  const positivePercentage = total === 0 ? 0 : (good / total) * 100

  return (
    <div>
      <h1>Anna Palaute</h1>
      <Button onClick={() => setGood(good + 1)} text="Erinomainen" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Perus" />
      <Button onClick={() => setBad(bad + 1)} text="Pahaa" />
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
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default App