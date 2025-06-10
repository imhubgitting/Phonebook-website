// Gavin Antonacci 6/9/25
import React from 'react'

const Filter = ({ findName, setFindName }) => (
  <div>
    filter shown with: <input value={findName} onChange={setFindName} />
  </div>
)

export default Filter