import {Routes,Route} from 'react-router-dom'
import SigninForm from './_auth/forms/SigninForm'
import { Home } from './_root/pages'
import SignupForm from './_auth/forms/SignupForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import "./globals.css"
const App = () => {
  return (
    <main className='flex h-screen'>
    <Routes>
      {/*Public Routes*/}
     <Route element={<AuthLayout/>}>
     <Route path="/signin" element ={<SigninForm/ >} />
     <Route path="/signup" element ={<SignupForm/ >} />
     </Route>
      {/*Private Routes */}

      <Route element={<RootLayout/>}>
    <Route index element={<Home/ >}/>
    </Route>
    </Routes>
    </main>
  )
}

export default App