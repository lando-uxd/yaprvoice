import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Welcome from "./pages/Welcome"
import PlanLayout from './pages/Layouts/PlanLayout'
import PhoneConfirmation from './pages/PhoneConfirmation'

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/invite' component={PhoneConfirmation} />
      </PlanLayout>
    </BrowserRouter>
  )
}

export default App;
