import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    autoSave: true,
    soundAlerts: true,
    darkTheme: true,
    language: 'ru',
    updateInterval: 5,
  });

  const ToggleSwitch = ({ checked, onChange }) => (
    <button
      onClick={onChange}
      style={{
        width: '50px',
        height: '26px',
        borderRadius: '13px',
        background: checked ? '#e94560' : '#444',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        transition: 'background 0.3s',
      }}
    >
      <div
        style={{
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          background: 'white',
          position: 'absolute',
          top: '2px',
          left: checked ? '26px' : '2px',
          transition: 'left 0.3s',
        }}
      />
    </button>
  );

  return (
    <div className="page-container">
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Настройки</h2>
      
      <div className="settings-grid">
        <div className="setting-card">
          <h3 className="setting-title">Общие параметры</h3>
          <div className="toggle-row">
            <span className="toggle-label">Автосохранение</span>
            <ToggleSwitch 
              checked={settings.autoSave} 
              onChange={() => setSettings({...settings, autoSave: !settings.autoSave})} 
            />
          </div>
          <div className="toggle-row">
            <span className="toggle-label">Звуковые оповещения</span>
            <ToggleSwitch 
              checked={settings.soundAlerts} 
              onChange={() => setSettings({...settings, soundAlerts: !settings.soundAlerts})} 
            />
          </div>
          <div className="toggle-row">
            <span className="toggle-label">Тёмная тема</span>
            <ToggleSwitch 
              checked={settings.darkTheme} 
              onChange={() => setSettings({...settings, darkTheme: !settings.darkTheme})} 
            />
          </div>
        </div>

        <div className="setting-card">
          <h3 className="setting-title">Системные настройки</h3>
          <div className="toggle-row">
            <span className="toggle-label">Язык интерфейса</span>
            <select 
              value={settings.language}
              onChange={(e) => setSettings({...settings, language: e.target.value})}
              className="form-input"
              style={{ width: '150px', padding: '8px' }}
            >
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
          <div className="toggle-row">
            <span className="toggle-label">Интервал обновления (сек)</span>
            <input
              type="number"
              value={settings.updateInterval}
              onChange={(e) => setSettings({...settings, updateInterval: parseInt(e.target.value)})}
              className="form-input"
              style={{ width: '80px', padding: '8px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
