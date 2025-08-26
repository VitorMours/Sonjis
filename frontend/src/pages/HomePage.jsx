import { useEffect } from "react";
import '../App.css'
import Navbar from '../components/Navbar'

export default function HomePage() {
    useEffect(() => {
        document.title = "Sonjis";
    }, []);

  return (
    <>
    <Navbar/>

    </>
  )
}

