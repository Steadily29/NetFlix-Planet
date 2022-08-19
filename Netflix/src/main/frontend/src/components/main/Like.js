import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import View from './components/View';

const Like = ({ scroll }) => {
    return (
        <div>
            <Header scroll={ scroll }/>
            <View/>
            <Footer/> 
        </div>
    );
};

export default Like;