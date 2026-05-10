import { FileCode, Calendar } from 'lucide-react';

export default function ProgramsPage() {
  const programs = [
    { id: 1, name: 'Вал_ступенчатый_D200', date: '2024-01-15 10:30' },
    { id: 2, name: 'Фланец_корпусной_D350', date: '2024-01-14 14:20' },
    { id: 3, name: 'Ось_ведущая_D180', date: '2024-01-13 09:15' },
    { id: 4, name: 'Болт_специальный_M48', date: '2024-01-12 16:45' },
    { id: 5, name: 'Кольцо_упорное_D400', date: '2024-01-11 11:00' },
  ];

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '24px' }}>Программы ковки</h2>
        <button className="login-button" style={{ width: 'auto', padding: '10px 20px' }}>
          + Новая программа
        </button>
      </div>
      
      <div className="program-list">
        {programs.map((program) => (
          <div key={program.id} className="program-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <FileCode size={24} color="#e94560" />
              <span className="program-name">{program.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#666' }}>
              <Calendar size={16} />
              <span className="program-date">{program.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
