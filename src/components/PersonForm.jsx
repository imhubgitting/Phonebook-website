import { UI_TEXT } from '../constants/config'

const PersonForm = ({
  newName,
  newNumber,
  handleInputChange,
  handleSubmit,
  validationErrors = {}
}) => (
  <form onSubmit={handleSubmit} className="space-y-4">
    {/* Name Input */}
    <div>
      <label
        htmlFor="contact-name"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {UI_TEXT.NAME_LABEL}
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        value={newName}
        onChange={handleInputChange}
        placeholder="John Doe"
        className={`input-field ${validationErrors.name ? 'border-red-500' : ''}`}
        aria-label="Contact name"
        aria-invalid={!!validationErrors.name}
        aria-describedby={validationErrors.name ? 'name-error' : undefined}
      />
      {validationErrors.name && (
        <p id="name-error" className="mt-1 text-sm text-red-600">
          {validationErrors.name}
        </p>
      )}
    </div>

    {/* Phone Number Input */}
    <div>
      <label
        htmlFor="contact-number"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {UI_TEXT.NUMBER_LABEL}
      </label>
      <input
        id="contact-number"
        name="number"
        type="tel"
        value={newNumber}
        onChange={handleInputChange}
        placeholder="123-456-7890"
        className={`input-field ${validationErrors.number ? 'border-red-500' : ''}`}
        aria-label="Contact phone number"
        aria-invalid={!!validationErrors.number}
        aria-describedby={validationErrors.number ? 'number-error' : undefined}
      />
      {validationErrors.number && (
        <p id="number-error" className="mt-1 text-sm text-red-600">
          {validationErrors.number}
        </p>
      )}
    </div>

    {/* Submit Button */}
    <button type="submit" className="btn-primary w-full">
      <span className="flex items-center justify-center">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        {UI_TEXT.SUBMIT_BUTTON}
      </span>
    </button>
  </form>
)

export default PersonForm