import React from "react"
import ReactDOM from "react-dom/client"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import "./index.css"

import App from "./App"

import ProtectedRoute from "./components/ProtectedRoute"

import AIBuilder from "./components/AIBuilder"
import AIChat from "./components/AIChat"

import Login from "./pages/Login"
import Signup from "./pages/Signup"

import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import TemplatesPage from "./pages/TemplatesPage"
import Analytics from "./pages/Analytics"
import Settings from "./pages/Settings"

import About from "./pages/About"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<App />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Trust Pages */}
        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/privacy"
          element={<Privacy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Projects */}
        <Route
          path="/dashboard/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />

        {/* Templates */}
        <Route
          path="/dashboard/templates"
          element={
            <ProtectedRoute>
              <TemplatesPage />
            </ProtectedRoute>
          }
        />

        {/* Analytics */}
        <Route
          path="/dashboard/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        {/* Settings */}
        <Route
          path="/dashboard/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* AI Builder */}
        <Route
          path="/dashboard/aibuilder"
          element={
            <ProtectedRoute>
              <AIBuilder />
            </ProtectedRoute>
          }
        />

        {/* AI Chat */}
        <Route
          path="/dashboard/ai-chat"
          element={
            <ProtectedRoute>
              <AIChat />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>

)