import React, { useEffect, useRef } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGtpSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const langRef = useRef(null);

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGtpSearchView());
  };

  const handleLanguageChange = () => {
    const langValue = langRef.current.value;
    dispatch(changeLanguage(langValue));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // onAuthStateChanged is like an event listner
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribing when the component unmounts
    return () => {
      // onAuthStateChanged return an unsubscribe function
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <select
            className="p-2 m-2 bg-gray-900 text-white"
            ref={langRef}
            defaultValue="en"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="py-2 px-4 mx-4 my-2 text-white bg-purple-800 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? lang[langKey].HOME_PAGE : lang[langKey].GPT_SEARCH}
          </button>
          <img className="w-12 h-12" alt="usericon" src={user.photoURL} />
          <button className="font-bold text-white" onClick={handleSignOut}>
            ({lang[langKey].SIGN_OUT})
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
