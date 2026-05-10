import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

export default function MessagesPage() {
  const messages = [
    { id: 1, type: 'error', time: '10:45:32', text: 'Превышено давление в гидросистеме' },
    { id: 2, type: 'warning', time: '10:42:15', text: 'Низкий уровень масла в баке смазки' },
    { id: 3, type: 'info', time: '10:30:00', text: 'Запуск программы ковки: Вал_ступенчатый_D200' },
    { id: 4, type: 'error', time: '09:15:22', text: 'Ошибка датчика температуры цилиндра №3' },
    { id: 5, type: 'warning', time: '08:50:10', text: 'Требуется техническое обслуживание манипулятора' },
    { id: 6, type: 'info', time: '08:00:00', text: 'Система запущена. Все узлы в норме' },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'error': return <AlertCircle size={20} />;
      case 'warning': return <AlertTriangle size={20} />;
      default: return <Info size={20} />;
    }
  };

  return (
    <div className="page-container">
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Сообщения</h2>
      
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className="message-item">
            <span className="message-time">{message.time}</span>
            <span className={`message-type ${message.type}`}>
              {message.type === 'error' ? 'Ошибка' : message.type === 'warning' ? 'Предупр.' : 'Инфо'}
            </span>
            <span className="message-text">{message.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
