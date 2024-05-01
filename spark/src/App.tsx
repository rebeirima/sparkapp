import React, { useState, useEffect } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import ProfileForm from './components/ProfileForm';
import { ProfileFormData } from './components/ProfileForm';
import ProfileEditModal from './components/ProfileEditModal';
import InviteFriendsModal from './components/InviteFriendsModal';
import GameHeader from './components/GameHeader';
import Card from "./components/card/Card";
import { bigCardStyles } from "./components/card/Card.css";
import { loginPageStyles, loginButtonStyles, appStyles, nextCardButtonStlyes, questionStyles, titleStyles } from "./styles/app.css";
import titleSVG from './assets/title.svg';
import { levelOne } from "./assets/levels";
import { FaUserEdit, FaUserPlus } from 'react-icons/fa';  // Import icons if needed for additional UI elements

// Interface for user profile data
interface Profile extends ProfileFormData {
  name: string;
  email: string;
  age: string;
  location: string;
  job: string;
}

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showInviteFriends, setShowInviteFriends] = useState(false);
  const [gameState] = useState({ levelOne: shuffle(levelOne) });
  const [currLevel] = useState(Object.keys(gameState)[0] as keyof typeof gameState);
  const [currCard, setCurrCard] = useState(gameState[currLevel][0]);
  const [cardHistory, setCardHistory] = useState<string[]>([]);

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      setIsLoggedIn(true);
      setProfile({ name: "User", email: "user@example.com", age: "", location: "", job: "" });
      navigate('/home');
    },
    onError: () => {
      alert('Login Failed');
    }
  });

  const saveProfileData = (data: ProfileFormData) => {
    console.log('Profile updated:', data);
    setProfile(data);
    localStorage.setItem('userProfile', JSON.stringify(data));
    setShowEditProfile(false);
    navigate('/profile');
  };

  const sendInvites = (email: string) => {
    console.log('Invite sent to:', email);
    setShowInviteFriends(false);
  };

  const handleNextCard = () => {
    const finalMessage = "You have finished the game!";
    const tempHistory = [currCard, ...cardHistory];
    setCardHistory(tempHistory);
    if (gameState[currLevel].length === 1) {
      setCurrCard(finalMessage);
    } else {
      gameState[currLevel].shift();
      setCurrCard(gameState[currLevel][0]);
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={loginPageStyles}>
        <button onClick={() => login()} style={loginButtonStyles}>Login</button>
      </div>
    );
  }

  return (
    <div className={appStyles}>
      <GameHeader onEditProfile={() => setShowEditProfile(true)} onInviteFriends={() => setShowInviteFriends(true)} />
      {showEditProfile && profile && <ProfileEditModal user={profile} onSave={saveProfileData} onClose={() => setShowEditProfile(false)} />}
      {showInviteFriends && <InviteFriendsModal onSendInvites={sendInvites} onClose={() => setShowInviteFriends(false)} />}
      <div className={questionStyles}>
        <img src={titleSVG} alt="Title" className={titleStyles} />
        <Card styleName={bigCardStyles} question={currCard} />
        <button className={nextCardButtonStlyes} onClick={handleNextCard}>Next Card</button>
      </div>
    </div>
  );
}

export default App;
