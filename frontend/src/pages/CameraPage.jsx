import { useEffect } from "react";
import '../App.css'
import Navbar from '../components/Navbar'
import CameraModal from '../components/CameraModal';
import Chat from '../components/Chat';

export default function CameraPage() {
    useEffect(() => {
        document.title = "Sonjis - Camera";
    }, []);

    return (
        <div className="bg-base-300">
            <Navbar />
            <div className="flex h-screen mx-40 justify-between items-center">
                <Chat/>
                <CameraModal/>
            </div>
        </div>
    )
}