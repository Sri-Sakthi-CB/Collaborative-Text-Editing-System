import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

// Generates Random id to create Random new Document each time
import { v4 as uuidV4 } from "uuid"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          // Redirecting to the entirely new Text Document
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
