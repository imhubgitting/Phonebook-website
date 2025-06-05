// Gavin Antonacci 6/4/25 
import {useState} from 'react'

const Tab = ({Statistics}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{Statistics.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{Statistics.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{Statistics.bad}</td>      
        </tr>
        <tr>
          <td>all</td>
          <td>{Statistics.all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{Statistics.average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{Statistics.positive === 0 ? 0 : Statistics.positive + " %"}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Header = ({prop}) => {
  return <h1>{prop}</h1>
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
      <Tab Statistics={{ good, neutral, bad, all, average, positive }} />
    </div>
  )
}

export default App
