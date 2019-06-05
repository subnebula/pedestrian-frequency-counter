This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Make sure node.js is installed on your machine**
Made with Node.js 10.15.3

Run the commands from within the `frontend-sample` directory

Before first run, install dependancies with:
### `npm install`

Start the app with:

### `npm start`

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### Frontend Layout (`./`)

```
public
├── favicon.ico             # Default react icon, can replace with custom icon
├── index.html              # Base HTML code
├── manifest.json           # JSON manifest file
src                         # Javascript and CSS source files
├── components              # React component definitions
│   ├── Home.js             # Contains Map and InfoTable components, connects to redux store
│   ├── InfoTable.js        # Displays individual sensor data in a table
│   ├── InfoTableRow.js     # File for building rows in the info table
│   ├── Login.js            # Login component
│   └── Map.js              # Map component and pieces attaced to map
├── redux                   # All files related to redux
│   ├── reducers            # Reducer files with actions
│   │   ├── markers.js      # Currently stores a list of the test markers
│   │   ├── tableData.js    # Currently stores temp sensor data
│   ├── combinedReducers.js # A file that combines the reducers in ./reducers into a single reducer
│   └── store.js            # defines the redux store
├── App.css                 # CSS for App.js file
├── App.js                  # Contains home component (Redundant?)
├── index.css               # CSS for index.js file
├── index.js                # Renders the App
└── serviceWorker.js        # Built in React file
```
