import { Settings } from 'lucide-react';

export default function PlaceholderPage({ title = 'Раздел в разработке' }) {
  return (
    <div className="page-container" style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div className="mnemoscheme-placeholder">
        <Settings size={80} />
        <h2 style={{ fontSize: '24px', marginTop: '20px', color: '#eee' }}>{title}</h2>
        <p style={{ color: '#666', marginTop: '10px' }}>
          Этот раздел находится в разработке
        </p>
      </div>
    </div>
  );
}
