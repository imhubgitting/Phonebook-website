// Gavin Antonacci 6/9/25
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')

  const handleInputChange = (event) => {
    if (event.target.name === 'name') {
      setNewName(event.target.value)
    } else if (event.target.name === 'number') {
      setNewNumber(event.target.value)
    } 
  }

  const handleFilterChange = (event) => {
    setFindName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newName === '' || newNumber === '') {
      alert('Both name and number must be provided')
      return
    }

  

    const existingPerson = persons.find(person => person.name === newName)
    if (existingPerson) {
      if (existingPerson.name === newName) {
        alert(`${newName} is already added to phonebook`)
      }
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
    }
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(findName.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={findName} onChange={handleFilterChange}/>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input name='name' value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          number: <input name='number' value={newNumber} onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person => 
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      )}
    </div>
    
  )
}

export default App
