import React from 'react';
import ReactDOM from'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import App from './src/App';
import { GlobalStyles } from './src/styles/GlobalStyles';
import { GlassGeneratorProvider } from './src/components/GlassGeneratorContext';

const container = document.getElementById('root');

ReactDOM.render (
    <BrowserRouter>
        <React.StrictMode> 
            <GlassGeneratorProvider>
                <GlobalStyles/>
                <App/>
            </GlassGeneratorProvider>
        </React.StrictMode>
    </BrowserRouter>
);