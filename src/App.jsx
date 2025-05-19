import React, { useEffect } from "react";
import Project from "./Project";
import imagesLoaded from "imagesloaded";
// import Utopia from './gpt/App'

const App = () => {


  useEffect(() => {
    const preloadImages = (selector = 'img') => {
      return new Promise((resolve) => {
        // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
        imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
      });
    };

    preloadImages().then(() => {
      const timer = setTimeout(() => {
        const loading = document.querySelector(".loading");
        if (loading) {
          loading.classList.remove("loading");
        }
      }, 500);
      return () => clearTimeout(timer);
    });
  }, []);

  

  return (
    <div className="loading">
      <Project />
    </div>
  );
};

export default App;
