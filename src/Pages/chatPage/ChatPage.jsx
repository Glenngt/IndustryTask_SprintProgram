import './chatPage.css'
import NewPrompt from '../../components/newPrompt/newPrompt'

const ChatPage = () => {

  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nisi aut vitae, placeat unde, fuga, quod ipsum omnis ratione ex asperiores! Nihil alias quia facilis! Laudantium cupiditate pariatur optio quae.</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <NewPrompt/>
        </div>
      </div>
    </div>
  )
}

export default ChatPage