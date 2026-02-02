import {Route,Routes} from "react-router";

import HomePage from './HomePage.jsx'
import CreatePage from './CreatePage.jsx'
import NoteDetailPage from './NoteDetailPage.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/note/:id" element={<NoteDetailPage/>} />
      </Routes>
    </div>
  )
}

export default App