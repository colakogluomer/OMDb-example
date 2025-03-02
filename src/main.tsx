import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store"
import App from "./App"

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
// Import DatePicker CSS
import "react-datepicker/dist/react-datepicker.css"

// Import our custom styles after Bootstrap
import "./styles/custom.scss"
import "./index.scss"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a proper HTML element with the ID 'root' in your HTML file.",
  )
}
