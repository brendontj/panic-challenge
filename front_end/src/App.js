import React from 'react';
import './App.css';
import './global.css';
import './sidebar.css';

function App() {
  const { children } = this.props;
  return (
    <div >
      <Menu />
      <Sidebar />
      <section className='content'>
        {children}
      </section>
    </div>
  );
}

export default App;
