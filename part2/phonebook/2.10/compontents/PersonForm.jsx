// Gavin Antonacci 6/9/25
import React from 'react'

const PersonForm = ({
  newName,
  newNumber,
  handleInputChange,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      name: <input name="name" value={newName} onChange={handleInputChange} />
    </div>
    <div>
      number: <input name="number" value={newNumber} onChange={handleInputChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default PersonForm
