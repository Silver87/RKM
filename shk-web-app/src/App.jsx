import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import MnemoschemePage from './pages/MnemoschemePage';
import ProgramsPage from './pages/ProgramsPage';
import MessagesPage from './pages/MessagesPage';
import SettingsPage from './pages/SettingsPage';
import ProfinetPage from './pages/ProfinetPage';
import DiagnosticsPage from './pages/DiagnosticsPage';

function AppContent({ user, onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <div className="logo">SHK-10</div>
          <div className="datetime">{formatDateTime(currentTime)}</div>
        </div>
        <div className="header-right">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span>Система в норме</span>
          </div>
          <div className="user-info">
            <span>{user?.username || 'Оператор'}</span>
          </div>
          <button 
            onClick={onLogout}
            className="logout-button"
          >
            Выход
          </button>
        </div>
      </header>

      <div className="app-main">
        <nav className="sidebar">
          <div className="nav-section">
            <div className="nav-section-title">Навигация</div>
            <button
              className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => navigate('/')}
            >
              Главная
            </button>
            <button
              className={`nav-button ${location.pathname === '/mnemoscheme' ? 'active' : ''}`}
              onClick={() => navigate('/mnemoscheme')}
            >
              Мнемосхемы
            </button>
            <button
              className={`nav-button ${location.pathname === '/programs' ? 'active' : ''}`}
              onClick={() => navigate('/programs')}
            >
              Программы
            </button>
            <button
              className={`nav-button ${location.pathname === '/messages' ? 'active' : ''}`}
              onClick={() => navigate('/messages')}
            >
              Сообщения
            </button>
            <button
              className={`nav-button ${location.pathname === '/settings' ? 'active' : ''}`}
              onClick={() => navigate('/settings')}
            >
              Настройки
            </button>
          </div>
          
          <div className="nav-section">
            <div className="nav-section-title">Системы</div>
            <button
              className={`nav-button ${location.pathname === '/mnemoscheme/hydraulic' ? 'active' : ''}`}
              onClick={() => navigate('/mnemoscheme/hydraulic')}
            >
              Гидросистема
            </button>
            <button
              className={`nav-button ${location.pathname === '/mnemoscheme/lubrication' ? 'active' : ''}`}
              onClick={() => navigate('/mnemoscheme/lubrication')}
            >
              Смазка
            </button>
            <button
              className={`nav-button ${location.pathname === '/mnemoscheme/cooling' ? 'active' : ''}`}
              onClick={() => navigate('/mnemoscheme/cooling')}
            >
              Охлаждение
            </button>
            <button
              className={`nav-button ${location.pathname === '/mnemoscheme/manipulator' ? 'active' : ''}`}
              onClick={() => navigate('/mnemoscheme/manipulator')}
            >
              Манипулятор
            </button>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Диагностика</div>
            <button
              className={`nav-button ${location.pathname === '/profinet' ? 'active' : ''}`}
              onClick={() => navigate('/profinet')}
            >
              Profinet
            </button>
            <button
              className={`nav-button ${location.pathname === '/diagnostics' ? 'active' : ''}`}
              onClick={() => navigate('/diagnostics')}
            >
              Диагностика
            </button>
          </div>
        </nav>

        <main className="content-area">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/mnemoscheme" element={<MnemoschemePage />} />
            <Route path="/mnemoscheme/*" element={<MnemoschemePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profinet" element={<ProfinetPage />} />
            <Route path="/diagnostics" element={<DiagnosticsPage />} />
          </Routes>
        </main>
      </div>

      <footer className="app-footer">
        <div>Режим: Автоматический</div>
        <div className="message-bar">Готов к работе</div>
        <div>Версия ПО: 1.0.0</div>
      </footer>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Router>
      <AppContent user={user} onLogout={handleLogout} />
    </Router>
  );
}

export default App;
