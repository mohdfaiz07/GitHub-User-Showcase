// App.jsx

import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  const [data, setdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleData = async () => {
    try {
      const users = await fetch('https://api.github.com/users');
      const jsonData = await users.json();
      console.log(jsonData);
      setdata(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const filteredData = data.filter((user) =>
    user.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className='header'>
      <h1> List of Github Users</h1>
      <input
        type="text"
        placeholder="Search by username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <Card usersdata={filteredData} />
    </>
  );
};

export default App;
