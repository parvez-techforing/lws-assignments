import React from 'react';
import InputData from './components/InputData';
import Header from './components/Header';
import PreviewData from './components/PreviewData';
import './Assets/styles/styles.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store} >
        <InputData/>
        <Header/>
        <PreviewData/>
      </Provider>
    </>
  );
}

export default App;
