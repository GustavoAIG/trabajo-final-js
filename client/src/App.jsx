
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import ProtectedRoute from './ProtectedRoute';
import HomePage from './pages/HomePage';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogInPage />}/>
          <Route path='/login' element={<LogInPage />}/>
          <Route path='/register' element={<RegisterPage />}/>

          <Route element={<ProtectedRoute/>}>
            <Route path='/home' element={<HomePage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App