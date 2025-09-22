# Assign Tasker App
[Live link](https://react-todo-build.netlify.app/)


A modern, responsive to-do list application built with React and Vite. Easily manage tasks, group them by status, and enjoy a clean sidebar navigation. Designed for all devices with a white/blue theme and smooth UI transitions.

## Features

- Sidebar navigation (Tasks, Members, File Management, Settings)
- Add, view, and group tasks (Today, Upcoming, Overdue, Completed)
- Responsive design for desktop and mobile
- Modern white/blue UI theme
- Fast development with Vite
- React Router for page navigation
- Accessible add-task popup

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173` to view the app.

## Project Structure

```
todo-list/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Sidebar.css
│   │   ├── TaskList.jsx
│   │   ├── AddTaskPopup.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json

```

## Customization

- Edit `Sidebar.jsx` and `Sidebar.css` for navigation and sidebar styles
- Update `TaskList.jsx` for task grouping and display
- Modify `AddTaskPopup.jsx` for the add-task modal

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
