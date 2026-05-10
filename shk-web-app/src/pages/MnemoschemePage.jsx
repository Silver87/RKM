import { useState } from 'react';

export default function MnemoschemePage() {
  const [activeTab, setActiveTab] = useState('site');
  
  const tabs = [
    { id: 'site', label: 'Участок', image: 'screen_22.png' },
    { id: 'hydraulic', label: 'Гидросистема', image: 'screen_23.png' },
    { id: 'lubrication', label: 'Смазка', image: 'screen_25.png' },
    { id: 'cooling', label: 'Охлаждение', image: 'screen_27.png' },
    { id: 'manipulator', label: 'Манипулятор', image: 'screen_37.png' },
  ];
  
  const activeImage = tabs.find(t => t.id === activeTab)?.image;

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
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="mnemoscheme-view">
          <img src={`/images/manual_screens/${activeImage}`} alt={tabs.find(t => t.id === activeTab)?.label} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}
