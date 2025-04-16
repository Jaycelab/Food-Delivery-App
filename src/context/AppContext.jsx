import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [isSeller, setIsSeller] = useState(false)

  const value = { navigate, user, setUser, setIsSeller, isSeller }

  return <AppContext.Provider value={{ value }}>{children}</AppContext.Provider>
}

export const userAppContext = () => {
  return useContext(AppContext)
}
