import './App.css'
// import WelcomeMessage from './components/WelcomeMessage'
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';

const App = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        </div>
    );
};

export default App;
