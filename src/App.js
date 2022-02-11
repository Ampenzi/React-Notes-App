import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="container dark">
      <div className="app">
      <Header/>
      <Router>
      <Routes>
        <Route exact path='/' element={<NotesListPage/>} />
        <Route exact path="/note/:id" element={<NotePage/>}  />
      </Routes>
    </Router>
      </div>
    </div>
  );
}

export default App;
