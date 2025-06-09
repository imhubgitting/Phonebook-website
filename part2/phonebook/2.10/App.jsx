// Gavin Antonacci 6/9/25
import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Gavin Antonacci', number: '123-456-7890', id: 5 },
    { name: 'John Doe', number: '987-654-3210', id: 6 },
    { name: 'Jane Smith', number: '555-123-4567', id: 7 },
    { name: 'Alice Johnson', number: '111-222-3333', id: 8 },
    { name: 'Bob Brown', number: '444-555-6666', id: 9 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')

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
