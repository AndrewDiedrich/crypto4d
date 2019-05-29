import React from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
const ws = new WebSocket("ws://localhost:8080");

ws.open = () => {
    console.log('Websocket open')
}

ws.onmessage = (payload: Array<number>) => {
    console.log('websocket data:', payload.data)
} 

class WebSocket {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }
}




export default WebSocket;