import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'

import firestore from './firebase/firebase.utils'

import Main from './pages/Main';
import Brand from './pages/Brand';

const Router = () => {
  const [data, setData] = useState({ hatches: [] });

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

  console.log(data);

  return (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/brand' component={Brand} />
  </Switch>
  );
}

export default Router;