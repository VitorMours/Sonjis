import React, { useEffect, useRef } from "react";
import axios from "axios";
import useWebSockets from "../hooks/useWebSocket"

const CameraModal = () => {
    const videoRef = useRef();    
    const { message, isConnected, sendMessage } = useWebSockets("ws://localhost:8000")    


    const handleSendImageData = () => {
        sendMessage({"image": ""});
    }

    useEffect(() => {
        const startWebcam = async () => {
            try{
                const stream = await navigator.mediaDevices.getUserMedia({video: {framerate: {ideal: 60, max: 60}}});

                if(videoRef.current){
                    

                    videoRef.current.srcObject = stream;
            
                }else{
                    console.error("O usuário não possui câmera no dispositivo, ou a permissão necessária não foi provida")
                }
        
            }catch(error){
                console.error("Houve algum erro", error);    
            }
        }
        startWebcam()
    }, [])

    return (
    <div className="flex justify-center items-center border shadow-lg border-stone-300 rounded-md">
        <div className="card w-150 bg-base-200">
            <video ref={videoRef} autoPlay playsInline className="rounded-lg border border-slate-300 m-3"></video>
        </div>
    </div>
);
};

export default CameraModal;
