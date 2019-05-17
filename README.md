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
You will also see any lint errors in the console.

### Frontend Layout (`./`)

```
public
├── favicon.ico           # Default react icon, can replace with custom icon
├── index.html            # Base HTML code
├── manifest.json         # JSON manifest file
src
├── components            # React component definitions
│   ├── Home.js           # Contains Map and NodeList components, connects to redux store
│   ├── Map.js            # Map component and pieces attaced to map
│   ├── Node.js           # Node details
│   └── NodeList.js       # A list of nodes
├── redux                 # 
│   ├── nodes.js          # Node data, currently hardcoded
│   └── store.js          # defines the reduxtore
├── App.css               # CSS for App.js file
├── App.js                # Contains home component (Redundant?)
├── index.css             # CSS for index.js file
├── index.js              # Renders the App
└── serviceWorker.js      # Built in React file
```
