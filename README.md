# Phonebook - Modern Contact Manager

A professional, full-featured contact management application built with React, Vite, and Tailwind CSS. This project demonstrates modern React patterns, clean architecture, and beautiful UI design.

![Phonebook App](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-6-646CFF) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)

## Features

- **Contact Management**: Add and view contacts with names and phone numbers
- **Real-time Search**: Filter contacts as you type with instant results
- **Form Validation**: Client-side validation with helpful, user-friendly error messages
- **Professional UI**: Modern, responsive design built with Tailwind CSS
- **Error Handling**: Graceful error handling with toast notifications
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Loading States**: Visual feedback during data operations
- **Persistent Storage**: JSON Server backend for data persistence
- **Error Boundaries**: Catches and displays React errors gracefully

## Tech Stack

### Frontend
- **React 19** - Modern UI library with hooks
- **Vite 6** - Lightning-fast build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client

### Backend
- **JSON Server** - Mock REST API for development

### Code Quality
- **ESLint** - Code linting with React best practices
- **Modern ES6+** - Arrow functions, destructuring, async/await

## Architecture Highlights

### Modular Structure
```
src/
├── components/       # Reusable UI components
│   ├── ErrorBoundary.jsx
│   ├── Filter.jsx
│   ├── Notification.jsx
│   ├── Person.jsx
│   └── PersonForm.jsx
├── hooks/           # Custom React hooks
│   └── usePersons.js
├── services/        # API service layer
│   └── phonebookService.js
├── utils/           # Utility functions
│   └── validation.js
├── constants/       # Configuration constants
│   └── config.js
├── styles/          # Global styles
│   └── index.css
├── App.jsx         # Main application component
└── main.jsx        # Application entry point
```

### Key Patterns
- **Custom Hooks**: Encapsulated data fetching and state management logic
- **Service Layer**: Complete separation of API logic from UI components
- **Error Boundaries**: Graceful error handling for the entire application
- **Validation Layer**: Centralized input validation with configurable rules
- **Notification System**: Professional toast notifications for user feedback
- **Component Composition**: Small, focused, reusable components

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd fullstack-hy2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server** (in one terminal)
   ```bash
   npm run server
   ```
   The API will be available at `http://localhost:3001`

4. **Start the development server** (in another terminal)
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run server` | Start JSON Server on port 3001 |
| `npm run lint` | Run ESLint to check code quality |

## API Endpoints

The JSON Server provides a REST API at `http://localhost:3001`:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/persons` | Get all contacts |
| POST | `/persons` | Create new contact |
| PUT | `/persons/:id` | Update existing contact |
| DELETE | `/persons/:id` | Delete contact |

## Environment Variables

Create a `.env` file in the root directory for configuration:

```env
VITE_API_URL=http://localhost:3001
```

## Project Features in Detail

### Form Validation
- Name must be 2-50 characters
- Phone number must be 7-20 digits
- Only valid phone characters allowed (digits, spaces, dashes, parentheses)
- Real-time error feedback
- Visual indicators for invalid fields

### UI/UX Features
- Gradient background with professional color scheme
- Card-based layout with hover effects
- Loading spinner during data fetch
- Empty state messages
- Search result count
- Avatar circles with initials
- Click-to-call phone links
- Responsive design (mobile, tablet, desktop)

### Error Handling
- Network error handling with retry button
- Form validation errors with specific messages
- Duplicate contact detection
- Error boundary for React errors
- User-friendly error notifications

### Accessibility
- All form inputs have associated labels
- ARIA labels on interactive elements
- Error messages linked to form fields
- Semantic HTML structure
- Keyboard navigation support
- Proper focus management

## Code Quality

- ESLint configuration for React best practices
- Consistent code formatting
- Comprehensive error handling
- Well-documented functions with JSDoc comments
- Performance optimizations
- No unnecessary re-renders

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential features for future development:
- ✅ Update existing contacts
- ✅ Delete contacts
- Contact categories/tags
- Export contacts (CSV, vCard)
- Dark mode toggle
- Contact avatars with images
- Backend authentication
- Contact groups
- Import contacts
- Backup and restore

## Contributing

This is a personal portfolio project. If you have suggestions or find bugs, feel free to open an issue.

## License

MIT License - feel free to use this project for learning purposes.

## Author

**Gavin Antonacci**

## Acknowledgments

- Built as part of the [Full Stack Open](https://fullstackopen.com) course by the University of Helsinki
- Inspired by modern contact management applications
- Icons from [Heroicons](https://heroicons.com)

---

**Note**: This project uses JSON Server for development. For production deployment, you would need to connect to a real backend API.