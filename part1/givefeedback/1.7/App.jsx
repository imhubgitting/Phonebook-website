// Gavin Antonacci 6/3/25 
import {useState} from 'react'

const Header = ({prop}) => {
  return <h1>{prop}</h1>
}

const Display = ({value, text}) => {
  if (value === 0) {
    return <div>{text} 0</div>
  }
  if (text === 'positive ') {
    return <div>{text} {value} %</div>
  }
  return <div>{text}{value}</div>
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}
</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = (good / all) * 100 || 0

  
  return (
    <div>
      <Header prop="give feedback" />
      <div>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <Header prop="statistics" />
      <div>
        <Display value={good} text="good " />
        <Display value={neutral} text="neutral " />
        <Display value={bad} text="bad " />
        <Display value={all} text="all " />
        <Display value={average} text="average " />
        <Display value={positive} text="positive " />
      </div>
    </div>
  )
}

export default App
