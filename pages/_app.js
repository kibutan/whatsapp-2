import "../styles/globals.css";
import { userAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";

function MyApp({ Component, pageProps }) {
  const [user] = userAuthState(auth);

  if (!user) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
