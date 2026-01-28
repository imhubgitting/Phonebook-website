import axios from 'axios'
import { API_BASE_URL, API_ENDPOINTS } from '../constants/config'

const baseUrl = `${API_BASE_URL}${API_ENDPOINTS.PERSONS}`

/**
 * Phonebook API service
 * Handles all HTTP requests to the backend
 */

/**
 * Get all persons from the phonebook
 * @returns {Promise<Array>} Array of person objects
 * @throws {Error} If the request fails
 */
const getAll = async () => {
  try {
    const response = await axios.get(baseUrl)
    return response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.error ||
      'Failed to fetch contacts. Please check your connection.'
    )
  }
}

/**
 * Create a new person in the phonebook
 * @param {Object} newPerson - Person object with name and number
 * @returns {Promise<Object>} Created person object
 * @throws {Error} If the request fails
 */
const create = async (newPerson) => {
  try {
    const response = await axios.post(baseUrl, newPerson)
    return response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.error ||
      'Failed to add contact. Please try again.'
    )
  }
}

/**
 * Update an existing person in the phonebook
 * @param {string} id - Person ID
 * @param {Object} updatedPerson - Updated person object
 * @returns {Promise<Object>} Updated person object
 * @throws {Error} If the request fails
 */
const update = async (id, updatedPerson) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedPerson)
    return response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.error ||
      'Failed to update contact. Please try again.'
    )
  }
}

/**
 * Delete a person from the phonebook
 * @param {string} id - Person ID
 * @returns {Promise<void>}
 * @throws {Error} If the request fails
 */
const remove = async (id) => {
  try {
    await axios.delete(`${baseUrl}/${id}`)
  } catch (error) {
    throw new Error(
      error.response?.data?.error ||
      'Failed to delete contact. Please try again.'
    )
  }
}

export default { getAll, create, update, remove }