import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../utils/authConfig";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/switch.css';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "../styles/Toggles.css"
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

export default MyApp;
