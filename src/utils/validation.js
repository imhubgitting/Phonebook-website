import { VALIDATION_RULES } from '../constants/config'

/**
 * Validation utility functions
 */

/**
 * Validate a person's name
 * @param {string} name - Name to validate
 * @returns {Object} Validation result with isValid and error message
 */
export const validateName = (name) => {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: 'Name is required' }
  }

  if (name.length < VALIDATION_RULES.NAME_MIN_LENGTH) {
    return {
      isValid: false,
      error: `Name must be at least ${VALIDATION_RULES.NAME_MIN_LENGTH} characters`
    }
  }

  if (name.length > VALIDATION_RULES.NAME_MAX_LENGTH) {
    return {
      isValid: false,
      error: `Name must be less than ${VALIDATION_RULES.NAME_MAX_LENGTH} characters`
    }
  }

  return { isValid: true, error: null }
}

/**
 * Validate a phone number
 * @param {string} number - Phone number to validate
 * @returns {Object} Validation result with isValid and error message
 */
export const validatePhoneNumber = (number) => {
  if (!number || number.trim().length === 0) {
    return { isValid: false, error: 'Phone number is required' }
  }

  const cleanNumber = number.replace(/\s/g, '')

  if (cleanNumber.length < VALIDATION_RULES.PHONE_MIN_LENGTH) {
    return {
      isValid: false,
      error: `Phone number must be at least ${VALIDATION_RULES.PHONE_MIN_LENGTH} digits`
    }
  }

  if (cleanNumber.length > VALIDATION_RULES.PHONE_MAX_LENGTH) {
    return {
      isValid: false,
      error: `Phone number must be less than ${VALIDATION_RULES.PHONE_MAX_LENGTH} characters`
    }
  }

  if (!VALIDATION_RULES.PHONE_PATTERN.test(number)) {
    return {
      isValid: false,
      error: 'Phone number contains invalid characters'
    }
  }

  return { isValid: true, error: null }
}

/**
 * Validate a complete person object
 * @param {Object} person - Person object with name and number
 * @returns {Object} Validation result with isValid and errors object
 */
export const validatePerson = (person) => {
  const nameValidation = validateName(person.name)
  const numberValidation = validatePhoneNumber(person.number)

  return {
    isValid: nameValidation.isValid && numberValidation.isValid,
    errors: {
      name: nameValidation.error,
      number: numberValidation.error,
    }
  }
}