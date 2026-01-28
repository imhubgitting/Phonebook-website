import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Notification from './components/Notification'
import usePersons from './hooks/usePersons'
import { validatePerson } from './utils/validation'
import { UI_TEXT, NOTIFICATION_DURATION } from './constants/config'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')
  const [notification, setNotification] = useState({ message: '', type: '' })
  const [validationErrors, setValidationErrors] = useState({})

  const { persons, loading, error, addPerson } = usePersons()

  // Show notification helper
  const showNotification = (message, type) => {
    setNotification({ message, type })
  }

  // Close notification helper
  const closeNotification = () => {
    setNotification({ message: '', type: '' })
  }

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target

    // Clear validation error for this field
    setValidationErrors(prev => ({ ...prev, [name]: null }))

    if (name === 'name') setNewName(value)
    else if (name === 'number') setNewNumber(value)
  }

  // Handle search filter
  const handleFilterChange = (event) => {
    setFindName(event.target.value)
  }

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Validate input
    const validation = validatePerson({ name: newName, number: newNumber })

    if (!validation.isValid) {
      setValidationErrors(validation.errors)
      showNotification('Please fix the errors in the form', 'error')
      return
    }

    // Check for duplicate
    const existingPerson = persons.find(
      person => person.name.toLowerCase() === newName.toLowerCase()
    )

    if (existingPerson) {
      showNotification(
        `${newName} is already in the phonebook`,
        'error'
      )
      return
    }

    // Add person
    try {
      await addPerson({ name: newName, number: newNumber })
      showNotification(
        `Added ${newName} to phonebook`,
        'success'
      )
      setNewName('')
      setNewNumber('')
      setValidationErrors({})
    } catch (err) {
      showNotification(err.message, 'error')
    }
  }

  // Filter persons
  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(findName.toLowerCase())
  )

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading contacts...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
          <div className="text-red-600 text-center">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="mt-4 text-xl font-semibold">Error Loading Contacts</h2>
            <p className="mt-2 text-sm text-gray-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 btn-primary"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {UI_TEXT.APP_TITLE}
          </h1>
          <p className="text-gray-600">Manage your contacts efficiently</p>
        </header>

        {/* Notification */}
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
          duration={NOTIFICATION_DURATION[notification.type?.toUpperCase()] || 3000}
        />

        {/* Add New Contact Form */}
        <div className="card mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {UI_TEXT.ADD_NEW_TITLE}
          </h2>
          <PersonForm
            newName={newName}
            newNumber={newNumber}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            validationErrors={validationErrors}
          />
        </div>

        {/* Search Filter */}
        <div className="card mb-6">
          <Filter
            findName={findName}
            setFindName={handleFilterChange}
          />
        </div>

        {/* Contacts List */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {UI_TEXT.NUMBERS_TITLE}
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({personsToShow.length} {personsToShow.length === 1 ? 'contact' : 'contacts'})
            </span>
          </h2>

          {personsToShow.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p>{findName ? 'No contacts match your search' : UI_TEXT.EMPTY_STATE}</p>
            </div>
          ) : (
            <div className="space-y-2">
              {personsToShow.map(person => (
                <Person
                  key={person.id}
                  person={person}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-600">
          <p>Built with React, Vite, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  )
}

export default App