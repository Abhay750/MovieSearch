import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signpage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password || (!isLogin && !name)) {
      alert("Please fill all fields")
      return
    }

    const users = JSON.parse(localStorage.getItem("users")) || []

    if (isLogin) {
      const existingUser = users.find(
        (u) => u.email === email && u.password === password
      )

      if (!existingUser) {
        alert("Invalid credentials")
        return
      }

      localStorage.setItem("currentUser", JSON.stringify(existingUser))
    } else {
      const newUser = { name, email, password }
      users.push(newUser)

      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("currentUser", JSON.stringify(newUser))
    }

    navigate("/")
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white px-4">
      
      {/* BG */}
      <img
        src="https://images.squarespace-cdn.com/content/v1/5ccabcf60b77bdbb3acaf70a/1567683272122-6PF2QDD6NF68VHMGQJOC/dd5r35v-e8431f3b-2f7a-4b39-9945-fa6611506b83.jpg?format=2500w"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md bg-[#111]/90 p-8 rounded-lg shadow-2xl backdrop-blur-md">
        
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isLogin ? "Sign In" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 rounded bg-[#222] border border-gray-700 focus:border-red-600"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-[#222] border border-gray-700 focus:border-red-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded bg-[#222] border border-gray-700 focus:border-red-600"
          />

          <button className="bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          {isLogin ? "New to Netflix?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-white ml-2 cursor-pointer hover:underline"
          >
            {isLogin ? "Sign up now" : "Sign in"}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Signpage