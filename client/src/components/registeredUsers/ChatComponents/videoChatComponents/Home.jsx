import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();
    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        navigate(`/room/${roomCode}`);
    };
    return (
        <div className='home-page'>
            <form onSubmit={handleFormSubmit} className='form'>
                <div>
                    <label>Enter Room Code</label>
                    <input value={roomCode} onChange={(e) => setRoomCode(e.target.value)} type="text" required placeholder="Enter session code"  />
                </div>
                <button type="submit">Enter Session</button>
            </form>
        </div>
    )
}

export default Home