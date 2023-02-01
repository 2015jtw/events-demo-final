import { useRef, useState } from "react"

export default function FeedbackPage() {

    const emailInputRef = useRef();
    const textInputRef = useRef();

    const [feedbackItems, setFeedbackItems] = useState([]);

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredText = textInputRef.current.value;

        const reqBody = {
            email: enteredEmail,
            text: enteredText
        }

        fetch('/api/feedback', {
            method: 'post',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => console.log(data))
        // {email: 'test@gmail.com', text: 'text blah'}
    }

    function loadFeedbackHandler() {
        fetch('/api/feedback').then(res => res.json()).then(data => setFeedbackItems(data.feedback))
        // {email: 'test@gmail.com', text: 'text blah'}
    }

    return (
        <div>
            <h1>Feedback Form</h1>

            <form action="post" onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={emailInputRef} />
                </div>
                <div>
                    <label htmlFor="feedback">Your Feedback</label>
                    <textarea id="feedback" rows="5" ref={textInputRef}></textarea>
                </div>
                <button>Submit</button>
            </form>
            <hr />
            <button onClick={loadFeedbackHandler}>Load Feedback</button>
            <ul>
                {feedbackItems.map(item => <li key={item.id}>{item.email} - {item.text}</li>)}
            </ul>
        </div>
    )
}

export async function getStaticProps() {

    return
}