import React, { useState } from 'react';

interface Props {
  onSendInvites: (email: string) => void;
  onClose: () => void;
}

const InviteFriendsModal: React.FC<Props> = ({ onSendInvites, onClose }) => {
  const [email, setEmail] = useState('');

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
      <h2>Invite Friends</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Friend's email" />
      <button onClick={() => onSendInvites(email)}>Send Invite</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default InviteFriendsModal;
