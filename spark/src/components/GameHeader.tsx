import React from 'react';
import { FaUserEdit, FaUserPlus } from 'react-icons/fa';  // Ensure you have react-icons installed

interface Props {
  onEditProfile: () => void;
  onInviteFriends: () => void;
}

const GameHeader: React.FC<Props> = ({ onEditProfile, onInviteFriends }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div>
        <button onClick={onEditProfile} style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '20px' }}>
          <FaUserEdit size={24} color="white" title="Edit Profile" />
        </button>
        <button onClick={onInviteFriends} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <FaUserPlus size={24} color="white" title="Invite Friends" />
        </button>
      </div>
    </div>
  );
}

export default GameHeader;
