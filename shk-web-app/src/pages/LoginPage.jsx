import { useState } from 'react';
import { LogIn } from 'lucide-react';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin({ username, role: 'operator' });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="card-icon" style={{ margin: '0 auto 20px' }}>
          <LogIn size={40} />
        </div>
        <h1 className="login-title">АРМ Оператора</h1>
        <p className="login-subtitle">Горизонтально-ковочная машина SHK-10</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Имя пользователя</label>
            <input
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите имя пользователя"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Пароль</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />
          </div>
          
          <button type="submit" className="login-button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
