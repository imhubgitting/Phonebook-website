/**
 * Application configuration constants
 */

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
export const API_ENDPOINTS = {
  PERSONS: '/persons',
}

// Notification durations (in milliseconds)
export const NOTIFICATION_DURATION = {
  SUCCESS: 3000,
  ERROR: 5000,
  INFO: 3000,
}

// Validation rules
export const VALIDATION_RULES = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  PHONE_PATTERN: /^[\d\s\-+()]+$/,
  PHONE_MIN_LENGTH: 7,
  PHONE_MAX_LENGTH: 20,
}

// UI Constants
export const UI_TEXT = {
  APP_TITLE: 'Phonebook',
  ADD_NEW_TITLE: 'Add New Contact',
  NUMBERS_TITLE: 'Contacts',
  FILTER_PLACEHOLDER: 'Search contacts...',
  NAME_LABEL: 'Name',
  NUMBER_LABEL: 'Phone Number',
  SUBMIT_BUTTON: 'Add Contact',
  DELETE_BUTTON: 'Delete',
  EMPTY_STATE: 'No contacts found. Add your first contact!',
}