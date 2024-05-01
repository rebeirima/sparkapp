import "./index.css";
import "./styles/globals.css";

import React from "react";
import { createRoot } from 'react-dom/client'; // Use only this import for creating the root
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App";

// Put your Google client ID here
const googleClientId = "188681442778-95d9npa9m8e2fd49ia8spe8jm07ln3o1.apps.googleusercontent.com";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement); // Create root correctly once

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <BrowserRouter> {/* Wrap App with BrowserRouter here */}
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
