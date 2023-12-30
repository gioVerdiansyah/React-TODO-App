import React from 'react';

import './App.css';
import styles from './components/styles/Tombol.module.css';
import Learning from './pages/Learning';
import TodoApp from './pages/TodoApp';


const App = () => {

  const [hasRedirect, setHasRedirect] = React.useState(false);

  const handleOnRedirect = () => {
    setHasRedirect((ps) => !ps);
  }

  return (
    <div 
      className="App"
      style={hasRedirect ? { flexDirection: 'column' } : { flexDirection: 'column-reverse' }}
    >
      <button className={styles.button} onClick={handleOnRedirect}>{hasRedirect ? 'Back' : 'Todo App'}</button>
      {
        hasRedirect ? <TodoApp/> : <Learning />
      }
    </div>
  );
}

export default App;
