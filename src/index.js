import React from 'react';
import  ReactDOM  from 'react-dom';
import {SpeechProvider} from '@speechly/react-client';

import { Provider } from "./context/context";

import App from './App';
import './index.css';

    ReactDOM.render(
        <SpeechProvider appid='60b621bc-87ac-41e5-b500-0b7a66f96317' language='en-US'>
            <Provider>
              <App/>
            </Provider>
        </SpeechProvider>,
        
     document.getElementById ('root')
    );
