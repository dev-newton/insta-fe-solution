## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### System Requirements
#### Browser
- Google chrome

#### Code Editor
- VS Code

### Installation Instructions

1. Clone the Repository with `https://github.com/dev-newton/insta-fe-solution.git` and run

```
cd insta-fe-solution
yarn
```

### Running the project
Ensure you are in the root of the project and run the command below. If the page does not redirect to a browser after running the command, 
kindly open `http://localhost:3000/` on a browser.
```
yarn start
```

### Testing
Ensure you are in the root of the project and run

```
yarn test 
```

### Built With
- This project was created and configured with Webpack v5
- This project uses SASS for styling

### Decisions made and Thought Process
- Made use of SASS for maintenable CSS
- Made use of Modern JS features such as let & const, arrow functions, destructuring, template literals etc
- Created a custom hook to manage schedule strategies
- Made use of webpack to create react project for flexibility in javascript module management, 
  also to reduce the large number of node_modules packages installed when using create-react-app.
  create-react-app installs at least 800 packages as opposed to webpack which installs less than half of that amount.
- Made use of absolute imports to make the code cleaner and easier to write, and also prevents the use of `../../../` which
  in the long run, makes the code harder to read
- Wrote integration tests to ensure task criteria were met
