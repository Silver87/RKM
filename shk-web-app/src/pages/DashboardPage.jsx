import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const navigate = useNavigate();
  
  const menuItems = [
    { title: 'Мнемосхема участка', description: 'Общая схема технологического участка', path: '/mnemoscheme', image: 'screen_22.png' },
    { title: 'Программа ковки', description: 'Управление программами ковки', path: '/programs', image: 'screen_24.png' },
    { title: 'Гидросистема', description: 'Мнемосхема гидравлической системы', path: '/mnemoscheme/hydraulic', image: 'screen_23.png' },
    { title: 'Система смазки', description: 'Мнемосхема системы смазки', path: '/mnemoscheme/lubrication', image: 'screen_25.png' },
    { title: 'Охлаждение', description: 'Система охлаждения оборудования', path: '/mnemoscheme/cooling', image: 'screen_27.png' },
    { title: 'Манипулятор', description: 'Мнемосхема манипулятора', path: '/mnemoscheme/manipulator', image: 'screen_37.png' },
    { title: 'Сообщения', description: 'Активные и архивные сообщения', path: '/messages', image: 'screen_38.png' },
    { title: 'Profinet', description: 'Сеть Profinet и диагностика', path: '/profinet', image: 'screen_57.png' },
    { title: 'Настройки', description: 'Параметры системы', path: '/settings', image: 'screen_40.png' },
    { title: 'Диагностика', description: 'Диагностика оборудования', path: '/diagnostics', image: 'screen_55.png' },
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
            <img src={`/images/manual_screens/${item.image}`} alt={item.title} style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '4px' }} />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
