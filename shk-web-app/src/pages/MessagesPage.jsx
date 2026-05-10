import { useState } from 'react';

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState('active');
  
  return (
    <div className="page-container">
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Сообщения</h2>
      
      <div className="mnemoscheme-tabs" style={{ marginBottom: '20px' }}>
        <button
          className={`tab-button ${activeTab === 'active' ? 'active' : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Активные
        </button>
        <button
          className={`tab-button ${activeTab === 'archive' ? 'active' : ''}`}
          onClick={() => setActiveTab('archive')}
        >
          Архив
        </button>
        <button
          className={`tab-button ${activeTab === 'system' ? 'active' : ''}`}
          onClick={() => setActiveTab('system')}
        >
          Системные
        </button>
      </div>
      
      <div className="mnemoscheme-view">
        {activeTab === 'active' && (
          <img src="/images/manual_screens/screen_38.png" alt="Активные сообщения" style={{ maxWidth: '100%', height: 'auto' }} />
        )}
        {activeTab === 'archive' && (
          <img src="/images/manual_screens/screen_40.png" alt="Архив сообщений" style={{ maxWidth: '100%', height: 'auto' }} />
        )}
        {activeTab === 'system' && (
          <img src="/images/manual_screens/screen_44.png" alt="Системные сообщения" style={{ maxWidth: '100%', height: 'auto' }} />
        )}
      </div>
    </div>
  );
}
