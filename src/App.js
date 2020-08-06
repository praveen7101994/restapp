import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Index } from './components/index.component.jsx';
import { Signupone } from './components/signup-step-one.component';
import { Signuptwo } from './components/signup-step-two.component';
import { SignUpSuccess } from './components/signup-success.component';

function App() {
  return <Signuptwo />;
}

export default App;
