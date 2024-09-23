# Milestone_2

This is a Task Management App built with React and Vite. It allows users to efficiently manage tasks, including adding, editing, marking as complete, and deleting tasks. The application uses React's Context API for state management, making it easy to share state across components.

*Features

Add tasks with a title, priority, and due date.

Edit existing tasks.

Mark tasks as complete or incomplete.

Delete tasks from the list.

Search functionality to filter tasks by title.


*Project Structure

src/
│
├── Components/

│   ├── TaskForm.jsx     # Component for adding and validating tasks

│   └── TaskList.jsx     # Component for listing, editing, and deleting tasks

├── App.jsx              # Main component managing state and rendering
├── App.css              # Styles for the application
├── main.jsx             # Entry point of the app
└── ...


* Make sure you have the following installed:

Node.js 

npm or yarn 

Vite


* Installation

Navigate into the project directory:

cd "Milestone 2"


* Install the required dependencies:

npm install


* Running the Application
* 
Once the dependencies are installed, you can run the app in development mode using Vite.

Using npm:

npm run dev

The application will run on http://localhost:5173.

* How to Use
 
* Add a Task:

Fill out the task title, select priority, and set a due date.

Click "Add Task" to add the task to the list.

* Edit a Task:

Click the "Edit" button next to a task to modify its details.

* Complete a Task:

Click the "Complete" button to mark a task as completed. Click "Undo" to revert it.

*Delete a Task:

Click the "Delete" button next to the task to remove it from the list.

*Search Tasks:

Use the search bar to filter tasks by title.

*File Breakdown

App.jsx: The main file that manages state using the Context API and renders the TaskForm and TaskList components.

TaskForm.jsx: Handles task input and validation.

TaskList.jsx: Displays the list of tasks and provides editing and deleting functionalities.

