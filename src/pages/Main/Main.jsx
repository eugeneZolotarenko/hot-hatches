import React from 'react'

import MainHeader from '../../components/MainHeader';
import MainStyle from './MainStyle';

const Main = (props) => {

   function handleClick(e) {
    //  const hatchModel = e.target.textContent;
    //  setModel(hatchModel);
    console.log(props.model)
   }

    return (
        <MainStyle>
            <div>
                <button onClick={handleClick}>RS 3</button>
                <button onClick={handleClick}>S 3</button>
            </div>
            <MainHeader/>
        </MainStyle>
    )
}

export default Main;
