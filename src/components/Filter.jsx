import { UI_TEXT } from '../constants/config'

const Filter = ({ findName, setFindName }) => (
  <div className="relative">
    <label
      htmlFor="search-filter"
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      Search Contacts
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        id="search-filter"
        type="text"
        value={findName}
        onChange={setFindName}
        placeholder={UI_TEXT.FILTER_PLACEHOLDER}
        className="input-field pl-10"
        aria-label="Search contacts by name"
      />
    </div>
  </div>
)

export default Filter