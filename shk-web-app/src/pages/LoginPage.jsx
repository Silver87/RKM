import { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Введите логин и пароль');
      return;
    }
    
    // Простая проверка для демонстрации
    if (username === 'operator' && password === '1234') {
      onLogin({ username, role: 'operator' });
    } else if (username === 'engineer' && password === '1234') {
      onLogin({ username, role: 'engineer' });
    } else if (username === 'admin' && password === 'admin') {
      onLogin({ username, role: 'admin' });
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>SHK-10</h1>
          <p>АРМ оператора горизонтально-ковочной машины</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Логин</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите логин"
            />
          </div>
          
          <div className="form-group">
            <label>Пароль</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="login-button">Войти</button>
          
          <div className="login-hint">
            <p>Оператор: operator / 1234</p>
            <p>Инженер: engineer / 1234</p>
            <p>Администратор: admin / admin</p>
          </div>
        </form>
      </div>
    </div>
  );
}
