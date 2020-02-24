import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'

import firestore from './firebase/firebase.utils'

import Main from './pages/Main';
import Brand from './pages/Brand';

const Router = () => {
  const [data, setData] = useState({ hatches: [] });
  const [model, setModel] = useState('S 3');
  const [modelData, setModelData] = useState();

  useEffect(() => {
    async function listModels(brand) {
      const snapshot = await firestore.collection(brand).get();
      const dataArr = []
      snapshot.docs.forEach(doc => {
        const data = doc.data();
        dataArr.push(data);
      });
      await setData(dataArr);
    
    };
    listModels('Audi');
  }, []);

  function hasValue(obj, key, value) {
    return obj.hasOwnProperty(key) && obj[key] === value;
  }

  useEffect(() => {
    if (data.length > 0 && model !== undefined) {
      function getHatchData(value, key = 'name') {
        data.filter(obj => {
          if (hasValue(obj, key, value)) {
            setModelData(obj);
          } else {
            return null
          }
        });
      }
      getHatchData(model)
    }

   }, [data, model]);

   useEffect(() => {
    if (modelData !== undefined) {
      console.log(modelData)
    } else {
      console.log('ooops')
    }

  }, [modelData]);

  if (data.length > 0) {
    return (
      <Switch>
        {/* <div>
        <button onClick={handleClick}>RS 3</button>
        <button onClick={handleClick}>S 3</button>
        </div> */}
        <Route exact path='/'
        render={(props) => <Main {...props} model={model} />}
        />
        <Route exact path='/brand' component={Brand} />
      </Switch>
    );   
  } else {
   return (
      <p>Loading...</p>
   )
  }
}

export default Router;