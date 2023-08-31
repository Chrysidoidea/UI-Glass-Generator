import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './src/App';
import { GlobalStyles } from './src/styles/GlobalStyles';
import { GlassGeneratorProvider } from './src/components/GlassGeneratorContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render (
    <BrowserRouter>
        <React.StrictMode> 
            <GlassGeneratorProvider>
                <GlobalStyles/>
                <App/>
            </GlassGeneratorProvider>
        </React.StrictMode>
    </BrowserRouter>
);