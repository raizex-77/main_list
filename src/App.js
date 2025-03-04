import React, { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [userData, setUserData] = useState({ name: '', phone: '', email: '', city: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setShowModal(false);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Введите данные</h2>
            <input type="text" name="name" placeholder="Имя" onChange={handleChange} />
            <input type="text" name="phone" placeholder="Телефон" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="text" name="city" placeholder="Город" onChange={handleChange} />
            <button onClick={handleSubmit}>Сохранить</button>
          </div>
        </div>
      )}

      <header className="header">
        <h1>Книжный Магазин</h1>
      </header>

      <nav className="nav-center">
        <button className="nav-btn">Жанры</button>
        <button className="nav-btn">Заказы</button>
        <button className="nav-btn">Аудиокниги</button>
      </nav>

      {isLoggedIn && <div className="profile-container"><button className="profile-btn">Профиль</button></div>}

      <div className="advertisement">Реклама</div>
      <div className="support">Связаться с нами</div>
    </div>
  );
}

export default App;