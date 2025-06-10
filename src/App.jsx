// Gavin Antonacci 6/9/25
import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')

const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

  // Handle both name and number input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target
    if (name === 'name') setNewName(value)
    else if (name === 'number') setNewNumber(value)
  }

  // Handle search filter input
  const handleFilterChange = (event) => {
    setFindName(event.target.value)
  }

  // Handles form submission for adding a new person
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!newName || !newNumber) {
      alert('Both name and number must be provided')
      return
    }

    const existingPerson = persons.find(person => person.name === newName)
    if (existingPerson) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
    }
    setNewName('')
    setNewNumber('')
  }

  // Filter persons case-insensitively
  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(findName.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter findName={findName} setFindName={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      {personsToShow.map(person =>
        <Persons key={person.name} person={person} />
      )}
    </div>

  )
}

export default App
