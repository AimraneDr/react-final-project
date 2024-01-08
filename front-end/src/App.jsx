import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'

import Navbar from './components/navbar.component'
import Home from './views/home.view'
import About from './views/about.view'
import Contact from './views/contact.view'
import BranchDetails from './views/branchDetails.view'
import GroupDetails from './views/groupDetails.view'
import TraineeDetails from './views/traineeDetails.view'
import ModuleDetails from './views/moduleDetails.view'
import TrainerDetails from './views/trainerDetails.view'
import LogInView from './views/login.view'
import SignUpView from './views/signup.view'
import LogOutView from './views/logout.view'
import Footer from './components/footer.component'
import BranchAdd from './views/CRUD/branch.add.view'
import GroupAdd from './views/CRUD/group.add.view'
import ModuleAdd from './views/CRUD/module.add.view'
import TraineeAdd from './views/CRUD/trainee.add.view'
import TrainerAdd from './views/CRUD/trainer.add.view'

function App() {
  const [user, setUser] = useState({name : 'aimrane'})

  return (
    <div className='bg-slate-100 w-full min-h-screen flex flex-col'>
      <Provider store={store}>

        <BrowserRouter>
            <Navbar user={user}/>
            <main className='flex-1'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogInView />} />
                <Route path="/signup" element={<SignUpView />} />
                <Route path="/logout" element={<LogOutView userSetter={setUser}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                {/* branches */}
                <Route path='/branches/details/:name/' element={<BranchDetails />} />
                <Route path='/branches/add/' element={<BranchAdd />} />
                <Route path='/branches/update/:id/' element={<></>} />
                <Route path='/branches/delete/:id/' element={<></>} />
                
                {/* groups */}
                <Route path='/groups/details/:name/' element={<GroupDetails />} />
                <Route path='/groups/add/' element={<GroupAdd />} />
                <Route path='/groups/update/:id/' element={<GroupDetails />} />
                <Route path='/groups/delete/:id/' element={<GroupDetails />} />
                
                {/* trainees */}
                <Route path='/trainees/details/:id/' element={<TraineeDetails />} />
                <Route path='/trainees/add/' element={<TraineeAdd />} />
                <Route path='/trainees/update/:id/' element={<TraineeDetails />} />
                <Route path='/trainees/delete/:id/' element={<TraineeDetails />} />
                
                {/* trainers */}
                <Route path='/trainers/details/:id/' element={<TrainerDetails />} />
                <Route path='/trainers/add/' element={<TrainerAdd />} />
                <Route path='/trainers/update/:id/' element={<TrainerDetails />} />
                <Route path='/trainers/selete/:id/' element={<TrainerDetails />} />
                
                {/* modules */}
                <Route path='/modules/details/:id/' element={<ModuleDetails />} />
                <Route path='/modules/add/' element={<ModuleAdd />} />
                <Route path='/modules/update/:id/' element={<ModuleDetails />} />
                <Route path='/modules/delete/:id/' element={<ModuleDetails />} />
          
              </Routes>
            </main>
            <Footer />
        </BrowserRouter>
      
      </Provider>
    </div>
  )
}

export default App
