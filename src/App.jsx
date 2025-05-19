import React, { useEffect } from "react";
import Project from "./Project";
import imagesLoaded from "imagesloaded";
// import Utopia from './gpt/App'

const App = () => {


  useEffect(() => {
    const preloadImages = (selector = 'img') => {
      return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
      });
    };

    let timer;

    preloadImages().then(() => {
      timer = setTimeout(() => {
        const loading = document.querySelector(".loading");
        if (loading) {
          loading.classList.remove("loading"); // Add a class to indicate loading is done
        }
      }, 500);
    });

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  

  return (
    <div className="loading">
      <Project />
    </div>
  );
};

export default App;
