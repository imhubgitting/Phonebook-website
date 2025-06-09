// Gavin Antonacci 6/9/25
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (alreadyExists(newName)) {
      alert(newName + ` is already added to phonebook`)
      return
    }
    if (newName === '') {
      alert('Name cannot be empty')
      return
    }

    setPersons(persons.concat({name: newName}))
    setNewName('')
  }

  const alreadyExists = (newName) => {
    return persons.some(person => person.name === newName)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <div key={person.name}>
          {person.name}
        </div>
      )}
    </div>
    
  )
}

export default App
