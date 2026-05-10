import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  GitGraph, 
  Droplets, 
  Wind, 
  Thermometer, 
  Settings, 
  AlertTriangle,
  FileText,
  Network,
  Wrench
} from 'lucide-react';

export default function DashboardPage() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, title: 'Мнемосхема участка', description: 'Общая схема технологического участка', path: '/mnemoscheme' },
    { icon: GitGraph, title: 'Программа ковки', description: 'Управление программами ковки', path: '/programs' },
    { icon: Droplets, title: 'Гидросистема', description: 'Мнемосхема гидравлической системы', path: '/mnemoscheme/hydraulic' },
    { icon: Wind, title: 'Система смазки', description: 'Мнемосхема системы смазки', path: '/mnemoscheme/lubrication' },
    { icon: Thermometer, title: 'Охлаждение', description: 'Система охлаждения оборудования', path: '/mnemoscheme/cooling' },
    { icon: Wrench, title: 'Манипулятор', description: 'Мнемосхема манипулятора', path: '/mnemoscheme/manipulator' },
    { icon: AlertTriangle, title: 'Сообщения', description: 'Активные и архивные сообщения', path: '/messages' },
    { icon: Network, title: 'Profinet', description: 'Сеть Profinet и диагностика', path: '/profinet' },
    { icon: Settings, title: 'Настройки', description: 'Параметры системы', path: '/settings' },
    { icon: FileText, title: 'Диагностика', description: 'Диагностика оборудования', path: '/diagnostics' },
  ];

  return (
    <div className="page-container">
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Главный экран</h2>
      <p style={{ color: '#888', marginBottom: '20px' }}>Выберите раздел для работы</p>
      
      <div className="dashboard-grid">
        {menuItems.map((item, index) => (
          <div 
            key={index}
            className="dashboard-card"
            onClick={() => navigate(item.path)}
          >
            <div className="card-icon">
              <item.icon size={30} />
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
