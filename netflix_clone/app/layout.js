import AuthContextProvider from '@/context/AuthContext'
import NavBar from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix',
  description: 'a movie platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <AuthContextProvider>
        <NavBar/>
        {children}
        <ToastContainer/>
        </AuthContextProvider>
        
        
        </body>
    </html>
  )
}
