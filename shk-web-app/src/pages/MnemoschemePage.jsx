import { useState } from 'react';
import { Droplets, Wind, Thermometer, Wrench, LayoutDashboard } from 'lucide-react';

export default function MnemoschemePage() {
  const [activeTab, setActiveTab] = useState('site');

  const tabs = [
    { id: 'site', label: 'Участок', icon: LayoutDashboard },
    { id: 'hydraulic', label: 'Гидросистема', icon: Droplets },
    { id: 'lubrication', label: 'Смазка', icon: Wind },
    { id: 'cooling', label: 'Охлаждение', icon: Thermometer },
    { id: 'manipulator', label: 'Манипулятор', icon: Wrench },
  ];

  return (
    <div className="page-container">
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Мнемосхемы</h2>
      
      <div className="mnemoscheme-container">
        <div className="mnemoscheme-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={18} style={{ marginRight: '8px' }} />
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="mnemoscheme-view">
          <div className="mnemoscheme-placeholder">
            <LayoutDashboard size={80} />
            <p style={{ marginTop: '15px', fontSize: '16px' }}>
              Мнемосхема: {tabs.find(t => t.id === activeTab)?.label}
            </p>
            <p style={{ color: '#666', marginTop: '10px' }}>
              Здесь будет отображаться графическая схема оборудования
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
