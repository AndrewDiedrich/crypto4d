import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import AppState from '../appState/';


 @observer
 class TimerView extends React.Component<{appState: AppState}, {}> {
     render() {
         return (
             <div>
                 <button onClick={this.onReset}>
                     Seconds passed: {this.props.appState.timer}
                 </button>
                 <DevTools />
             </div>
         );
      }
 
      onReset = () => {
          this.props.appState.resetTimer();
      }
 };

 export default TimerView;