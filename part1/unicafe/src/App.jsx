import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Statisticline = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({ good, bad, total, neutral, average, positive }) => {

  if ((good === 0) && (bad === 0) && (neutral === 0)) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <table>
      <Statisticline text="good" value={good} />
      <Statisticline text="neutral" value={neutral} />
      <Statisticline text="bad" value={bad} />
      <Statisticline text="total" value={total} />
      <Statisticline text="average" value={average} />
      <Statisticline text="positive" value={`${positive.toFixed(1)}`} />
    </table>

  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  const handleGoodClick = () => setGood(good + 1)
  const handleBadClick = () => setBad(bad + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive} />




    </div>
  )
}

export default App