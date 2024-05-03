import React, { useState, useEffect } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import ProfileForm from './components/ProfileForm';
import { ProfileFormData } from './components/ProfileFormData';
import ProfileEditModal from './components/ProfileEditModal';
import InviteFriendsModal from './components/InviteFriendsModal';
import GameHeader from './components/GameHeader';
import Card from "./components/card/Card";
import { bigCardStyles } from "./components/card/Card.css";
import { loginPageStyles, loginButtonStyles, appStyles, nextCardButtonStlyes, questionStyles, titleStyles } from "./styles/app.css";
import titleSVG from './assets/title.svg';
import { levelOne } from "./assets/levels";
import { FaUserEdit, FaUserPlus } from 'react-icons/fa';  // Import icons if needed for additional UI elements
import SparkleCursor from './components/SparkleCursor';

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
  const [profile, setProfile] = useState<ProfileFormData | null>(null);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showInviteFriends, setShowInviteFriends] = useState(false);
  const [gameState] = useState({ levelOne: shuffle(levelOne) });
  const [currLevel] = useState(Object.keys(gameState)[0] as keyof typeof gameState);
  const [currCard, setCurrCard] = useState(gameState[currLevel][0]);
  const [cardHistory, setCardHistory] = useState<string[]>([]);
  const handleCloseEditProfile = () => {
    setShowEditProfile(false);
    // Optional: navigate to a different route if necessary
    // navigate('/some-route');
  };
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);  // For debugging and understanding the response structure
      setIsLoggedIn(true);
      setProfile({ // Set initial data after successful login
        name: "User",  // Placeholder, replace with actual data from tokenResponse if available
        email: "user@example.com",  // Placeholder, replace with actual data from tokenResponse if available
        age: "",
        occupation: "",
        personality: "",
        passion: "",
        groupRelationship: "",
        groupDuration: "",
        hangoutSetting: "",
        memorableExperience: "",
        insideJokes: "",
        offLimitsTopics: "",
        trustLevel: ""
      });
      setShowProfileForm(true);  // Show profile form to fill additional details
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
    console.log('Navigating to home');
    navigate('/home');
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
    console.log("Rendering login page");
    return (
      <div style={loginPageStyles}>
        <button onClick={() => login()} style={loginButtonStyles}>Login</button>
      </div>
    );
  }

  if (showProfileForm && profile) {
    console.log("Rendering profile form");
    return (
      <ProfileForm onSave={saveProfileData} initialData={profile} />
    );
  }

  console.log("Rendering main app");
  return (
    <div className={appStyles}>
      <SparkleCursor />
      <GameHeader onEditProfile={() => setShowEditProfile(true)} onInviteFriends={() => setShowInviteFriends(true)} />
      {profile && <ProfileEditModal user={profile} onSave={saveProfileData} onClose={handleCloseEditProfile}  />}
      {<InviteFriendsModal onSendInvites={sendInvites} onClose={() => setShowInviteFriends(false)} />}
      <div className={questionStyles}>
        <img src={titleSVG} alt="Title" className={titleStyles} />
        <Card styleName={bigCardStyles} question={currCard} />
        <button className={nextCardButtonStlyes} onClick={handleNextCard}>Next Card</button>
      </div>
    </div>
  );
}

export default App;
