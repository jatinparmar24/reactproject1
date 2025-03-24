
import { Route ,Routes } from 'react-router-dom'
import './App.css'

import Login from './Component/Login'
import NavHero from './Component/NavHero'
import SignUp from './Component/SignUp'

import Asiaform from './Component/Asiaform'
import Admin from './Component/Admin'
import Layout from './Component/Layout'
import Singledetail from './Component/Singledetail'
import Africaform from './Component/Africaform'
import Europeform from './Component/Europeform'
import Northform from './Component/Northform'
import Southform from './Component/Southform'
import Australiaform from './Component/Austiform'










function App() {
 

  return (
    <>


    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<NavHero/>}/>
      </Route>
    
        
        
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Asiaform' element={<Asiaform/>}/>
      <Route path='/Africaform' element={<Africaform/>}/>
      <Route path='/Europeform' element={<Europeform/>}/>
      <Route path='/Northform' element={<Northform/>}/>
      <Route path='/Southform' element={<Southform/>}/>
      <Route path='/Australiaform' element={<Australiaform/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/Singledetail' element={<Singledetail/>}/>


    </Routes>


      
    </>
  )
}

export default App
