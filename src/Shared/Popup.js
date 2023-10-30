import React, { useState } from 'react';
import chatbot from './assets/chatbot.png';

function ChatBot() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleChatbot = (event) => {
        event.preventDefault();
        const form = event.target;
        const userQuery = form.query.value;
        setQuery(userQuery); // Store user's query
        setResponse(' ');

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch("http://localhost:10003/query", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                data: {
                    'query': userQuery
                },
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(typeof(data.data));
                if (data.data) {
                    setQuery(userQuery);
                    setResponse(data.data);
                    form.reset();
                }
            });

        // Simulate an API response (replace with your actual API call)
        // const apiResponse = "This is a sample response from the API.";
        // setResponse(apiResponse);

        form.reset();
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className='chatbot'>
            <button onClick={openPopup} className='rounded-circle'>
                <img src={chatbot} alt="" className='bot rounded-circle' />
            </button>

            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <p className="text-danger mb-0">শুভ অপরাহ্ণ!!!</p>
                        <img src={chatbot} className="img-fluid bot" alt="" /> <br />
                        <small>কৃত্তিম বুদ্ধিমতা দ্বারা পরিচালিত এআই বট এর কাছে <br /> আপনার প্রশ্নটি করুন</small><br />
                        <form action="POST" onSubmit={handleChatbot}>
                            <input type="text" className="w-75 ms-3 me-2" name="query" />
                            <button type="submit">Send</button>
                        </form>

                        {query && (
                            <p className="text-primary text-end mt-5">প্রশ্ন: {query}</p>
                        )}

                        {response && (
                            <p className="text-success">উত্তর: {response}</p>
                        )}

                        <button className="close-button" onClick={closePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatBot;