import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id:1, message:'Wow, Mclaren', LikesCount:34},
    {id:2, message:'beauteful MCL34', LikesCount:69},
    {id:3, message:'MClaren best', LikesCount:74}
]

let dialog = [
    {id: 0, name:'Dea'},
    {id: 1, name:'Max'},
    {id: 2, name:'Senna'}
]

let message = [
    {id: 0, message:'McLaren 720s best in the world'},
    {id: 1, message:'McLaren Automotive Limited'},
    {id: 2, message:'McLaren'}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialog={dialog} message={message}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
