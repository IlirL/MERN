import React, { useEffect, useState } from 'react'
import './App.css'
import Chat from './Chat'
import Sidebar from './Sidebar'
import  Pusher from 'pusher-js'
import axios  from './axios';

function App() {
  
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    axios.get('/messages/sync').then(response =>{
      setMessages(response.data);
    })
  }, [])


  useEffect(() => {
    const pusher = new Pusher('120a882308adc49d67d6', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      // alert(JSON.stringify(data));
      setMessages([...messages, data]);
    });


   return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  
  return (
    <div className = "app">
      <div className="app__body">
      <Sidebar />
      <Chat messages = {messages}/>
      </div>
    </div>
  )
}

export default App
