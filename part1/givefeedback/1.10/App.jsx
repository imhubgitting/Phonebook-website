// Gavin Antonacci 6/4/25 
import {useState} from 'react'

const StatisticsLine = ({text, value}) => {


  return (
    <Display value={value} text={text} />
  )


}



// a proper place to define a component
const Statistics = (props) => {
  if (props.all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <StatisticsLine text="good " value={props.good} />
      <StatisticsLine text="neutral " value={props.neutral} />
      <StatisticsLine text="bad " value={props.bad} />
      <StatisticsLine text="all " value={props.all} />
      <StatisticsLine text="average " value={props.average} />
      <StatisticsLine text="positive " value={props.positive} />
    </div>
  );
}
  
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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App
