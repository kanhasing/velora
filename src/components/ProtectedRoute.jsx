import { Navigate } from "react-router-dom"

import {

  onAuthStateChanged,

} from "firebase/auth"

import { auth } from "../firebase"

import { useEffect, useState } from "react"

export default function ProtectedRoute({

  children,

}) {

  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(auth, (currentUser) => {

        setUser(currentUser)

        setLoading(false)

      })

    return () => unsubscribe()

  }, [])

  if (loading) {

    return (

      <div className="min-h-screen bg-black flex items-center justify-center text-white">

        Loading...

      </div>

    )

  }

  if (!user) {

    return <Navigate to="/login" />

  }

  return children

}