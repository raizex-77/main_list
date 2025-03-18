import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [userData, setUserData] = useState({ name: "", phone: "", email: "", city: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("Данные пользователя обновлены:", userData);
  }, [userData]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Введите данные</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Имя" onChange={handleChange} required />
              <input type="text" name="phone" placeholder="Телефон" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              <input type="text" name="city" placeholder="Город" onChange={handleChange} required />
              <button type="submit">Сохранить</button>
            </form>
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

      {isLoggedIn && (
        <div className="profile-container">
          <button className="profile-btn">Профиль</button>
        </div>
      )}

      <div className="advertisement">Реклама</div>

      
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Книжный Магазин. Все права защищены.</p>
          <button onClick={(e) => e.preventDefault()}>Конфиденциальность</button>
          <button onClick={(e) => e.preventDefault()}>Связаться с нами</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
