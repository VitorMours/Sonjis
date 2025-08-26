import { useEffect } from "react";
import '../App.css'
import Navbar from '../components/Navbar'

export default function ChatPage() {
    useEffect(() => {
        document.title = "Sonjis - Chat";
    }, []);

  return (
    <>
    
    <Navbar/>

    </>
  )
}

