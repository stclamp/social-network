import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import state from './Redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
// let dialogsData = [
//     {
//         id: 1,
//         name: 'Pavel'
//     },
//     {
//         id: 2,
//         name: 'Aliona'
//     },
//     {
//         id: 3,
//         name: 'Yevhen'
//     },
//     {
//         id: 4,
//         name: 'Alex'
//     },
//     {
//         id: 5,
//         name: 'Ruslan'
//     },
//     {
//         id: 6,
//         name: 'Mom'
//     },
// ]
// let messagesData = [
//     {
//         id:1,
//         message: "Hi"
//     },
//     {
//         id:2,
//         message: "How are you"
//     },
//     {
//         id:3,
//         message: "I'm doing my best"
//     },
// ]
// let postsData = [
//     {
//         id: 1,
//         message: "Hi, it's my first post!",
//         likesCount: 5
//     },
//     {
//         id: 2,
//         message: "How are you?",
//         likesCount: 15
//     },
// ]
root.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>
);

