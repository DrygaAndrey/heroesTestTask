
import './message.scss'


function Message({ setMessage, message }) {
    const buttonHandler = () => {
        setMessage('');
    }


    return (
        <div className='message'>
            <p>{message}</p>
            <button onClick={buttonHandler}>Ok</button>
        </div>
    );
}

export default Message;
