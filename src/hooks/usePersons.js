import { useState, useEffect } from 'react'
import phonebookService from '../services/phonebookService'

/**
 * Custom hook for managing persons data
 * Handles fetching, creating, updating, and deleting persons
 *
 * @returns {Object} Persons data and methods
 */
const usePersons = () => {
  const [persons, setPersons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch persons on mount
  useEffect(() => {
    const fetchPersons = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await phonebookService.getAll()
        setPersons(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPersons()
  }, [])

  /**
   * Add a new person
   * @param {Object} newPerson - Person object with name and number
   * @returns {Promise<Object>} Created person
   */
  const addPerson = async (newPerson) => {
    const createdPerson = await phonebookService.create(newPerson)
    setPersons(persons.concat(createdPerson))
    return createdPerson
  }

  /**
   * Update an existing person
   * @param {string} id - Person ID
   * @param {Object} updatedPerson - Updated person object
   * @returns {Promise<Object>} Updated person
   */
  const updatePerson = async (id, updatedPerson) => {
    const updated = await phonebookService.update(id, updatedPerson)
    setPersons(persons.map(p => p.id !== id ? p : updated))
    return updated
  }

  /**
   * Delete a person
   * @param {string} id - Person ID
   * @returns {Promise<void>}
   */
  const deletePerson = async (id) => {
    await phonebookService.remove(id)
    setPersons(persons.filter(p => p.id !== id))
  }

  return {
    persons,
    loading,
    error,
    addPerson,
    updatePerson,
    deletePerson,
  }
}

export default usePersons