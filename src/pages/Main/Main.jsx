import React from 'react'

import MainHeader from '../../components/MainHeader';
import MainStyle from './MainStyle';

import { testFireBase } from '../../firebase/firebase.utils';

testFireBase('Audi');

const Main = () => {
    return (
        <MainStyle>
            <MainHeader/>
        </MainStyle>
    )
}

export default Main;
