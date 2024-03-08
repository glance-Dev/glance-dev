import { useEffect, useState } from 'react';
import './Material.css';
import YouTube from 'react-youtube';
import { useLocation, useParams } from 'react-router-dom';
import ParticlesComponent from '../particales';

function Material() {
    const { name } = useParams();
    console.log(name);
    const [vidData, setVidData] = useState('');
    const sendReq = async () => {
        try {
            const serverURL = `https://projectserver-wxkm.onrender.com/video?param=${name}`;
            const res = await fetch(serverURL);
            const jsonRes = await res.json();
            setVidData(jsonRes[1]?.id?.videoId || '');
        } catch (e) {
            console.error(e);
        }
    };
    useEffect(() => {
        sendReq();
    }, []);

    const opts = {
        height: '50%',
        width: '40%',
        playerVars: {
            autoplay: 1,
        },
    };

    const VideoPlayer = () => {
        const videoId = vidData || '';

        const handleNextClick = () => {
            // Add logic to go to the next video
            console.log('Next video clicked');
        };

        const handlePrevClick = () => {
            // Add logic to go to the previous video
            console.log('Previous video clicked');
        };

        return (
            <>
                <ParticlesComponent id="backgroundCanvas" />
                <div className="vidContainer">
                    <div className="youtube-container">
                        <YouTube videoId={videoId} opts={opts} />
                        <div className='vid-btn'>
                            <button className="matbutton" onClick={handlePrevClick}>
                                Previous
                            </button>
                            <button className="matbutton" onClick={handleNextClick}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>

            </>
        );
    };

    return (
        <>
            {VideoPlayer()}
        </>
    );
}

export default Material;
