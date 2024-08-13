import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Map from './pages/Map';
import NotFound from './pages/404';
import Layout from './components/layout';
import SplashScreen from './components/splashScreen';

const App = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, [3000]);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {!isMounted ? (
                <SplashScreen />
            ) : (
                <Router>
                    <Layout>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/map' element={<Map />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </Layout>
                </Router>
            )}
        </>
    );
};

export default App;
