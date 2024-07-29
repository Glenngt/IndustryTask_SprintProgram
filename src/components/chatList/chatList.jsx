import { Link } from 'react-router-dom'
import './chatList.css'

const ChatList = () => {
    return (
        <div className='chatList'>
            <span className='title'>DASHBOARD</span>
            <Link to="/dashboard">Start a new Chat</Link>
            <Link to="/">Explore Chat-VeMe</Link>
            <Link to="/">Contact</Link>
            <hr />
            <span className='title'>CHAT HISTORY</span>
            <div className="list">
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
            </div>
            <hr />
            <div className="upgrade">
                <img src="/logo.png" alt="" />
                <div className="texts">
                    <span>Upgrade to Chat-VeMe Pro</span>
                    <span>Gain Unrestricted access to all functionalities</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList