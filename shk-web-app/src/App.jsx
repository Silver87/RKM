import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  GitGraph, 
  Droplets, 
  Wind, 
  Thermometer, 
  Settings, 
  AlertTriangle,
  Network,
  FileText,
  Wrench,
  LogOut,
  User
} from 'lucide-react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import MnemoschemePage from './pages/MnemoschemePage';
import ProgramsPage from './pages/ProgramsPage';
import MessagesPage from './pages/MessagesPage';
import SettingsPage from './pages/SettingsPage';
import PlaceholderPage from './pages/PlaceholderPage';

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

  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Главная' },
    { path: '/mnemoscheme', icon: LayoutDashboard, label: 'Мнемосхемы' },
    { path: '/programs', icon: GitGraph, label: 'Программы' },
    { path: '/messages', icon: AlertTriangle, label: 'Сообщения' },
    { path: '/settings', icon: Settings, label: 'Настройки' },
  ];

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
            <User size={18} />
            <span>{user?.username || 'Оператор'}</span>
          </div>
          <button 
            onClick={onLogout}
            style={{ background: 'transparent', border: 'none', color: '#ddd', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
          >
            <LogOut size={18} />
          </button>
        </div>
      </header>

      <div className="app-main">
        <nav className="sidebar">
          <div className="nav-section">
            <div className="nav-section-title">Навигация</div>
            {navItems.map((item) => (
              <button
                key={item.path}
                className={`nav-button ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => navigate(item.path)}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          
          <div className="nav-section">
            <div className="nav-section-title">Системы</div>
            {[
              { path: '/mnemoscheme/hydraulic', icon: Droplets, label: 'Гидросистема' },
              { path: '/mnemoscheme/lubrication', icon: Wind, label: 'Смазка' },
              { path: '/mnemoscheme/cooling', icon: Thermometer, label: 'Охлаждение' },
              { path: '/mnemoscheme/manipulator', icon: Wrench, label: 'Манипулятор' },
            ].map((item) => (
              <button
                key={item.path}
                className={`nav-button ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => navigate(item.path)}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Диагностика</div>
            {[
              { path: '/profinet', icon: Network, label: 'Profinet' },
              { path: '/diagnostics', icon: FileText, label: 'Диагностика' },
            ].map((item) => (
              <button
                key={item.path}
                className={`nav-button ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => navigate(item.path)}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
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
            <Route path="/profinet" element={<PlaceholderPage title="Сеть Profinet" />} />
            <Route path="/diagnostics" element={<PlaceholderPage title="Диагностика" />} />
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
