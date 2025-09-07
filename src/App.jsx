import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  /*return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null*/
   return !loading ? (
  <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
    {/* Header */}
    <Header />

    {/* Main Content */}
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-3 py-4"> {/* Smaller outer padding */}
        <div className="bg-white rounded-lg shadow p-4"> {/* Minimal padding */}
          <Outlet />
        </div>
      </div>
    </main>

    {/* Footer */}
    <Footer />
  </div>
) : null;



}

export default App