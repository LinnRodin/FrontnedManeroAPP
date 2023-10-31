import React, { useRef, useEffect } from 'react';
import Icon from '../images/icons/load-rect-icon.svg';
import Logo from '../images/logos/manero-logo-main-svg.svg';
import { NavLink } from 'react-router-dom';

const StartUpScreenView = () => {
  const currentScreenIndex = useRef(0);
  const carouselInterval = useRef(null);
  const startupScreenRef = useRef(null);
  const screenTwoRef = useRef(null);
  const headingPrimaryRef = useRef(null);
  const headingSecondaryRef = useRef(null);
  const carouselIconRef = useRef(null);
  const carouselIconsContainerRef = useRef(null);

  useEffect(() => {
    const screens = [
      { type: "startup", icon: Icon, logo: Logo },
      { headingPrimary: "Welcome To", headingSecondary: "Manero!", icon: Icon },
      { headingPrimary: "Door To Door", headingSecondary: "Delivery!", icon: Icon },
      { headingPrimary: "Easy Track", headingSecondary: "Order!", icon: Icon },
      // ... other screens
    ];

    const updateScreen = () => {
      if (startupScreenRef.current && screenTwoRef.current) {
        startupScreenRef.current.style.display = 'none';
        screenTwoRef.current.classList.add('hidden');

        const screen = screens[currentScreenIndex.current];

        if (screen.type === "startup") {
          startupScreenRef.current.style.display = 'block';
          return;
        }

        screenTwoRef.current.classList.remove('hidden');
        headingPrimaryRef.current.innerText = screen.headingPrimary || "";
        headingSecondaryRef.current.innerText = screen.headingSecondary || "";

        carouselIconRef.current.src = screen.icon;
        carouselIconsContainerRef.current.classList.remove('left', 'center', 'right');

        switch (currentScreenIndex.current) {
          case 1:
            carouselIconsContainerRef.current.classList.add('left');
            break;
          case 2:
            carouselIconsContainerRef.current.classList.add('center');
            break;
          case 3:
            carouselIconsContainerRef.current.classList.add('right');
            break;
          default:
            break;
        }
      }
    };

    carouselInterval.current = setInterval(() => {
      currentScreenIndex.current = currentScreenIndex.current + 1;
      if (currentScreenIndex.current >= screens.length) {
        currentScreenIndex.current = 1; // start from the first screen in the carousel after startup
      }
      updateScreen();
    }, 6000);

    return () => clearInterval(carouselInterval.current);
  }, []);

  // stop carousel
  const stopCarousel = () => {
    clearInterval(carouselInterval.current);
  };
    
  return (
    <> 
      <div className="startup-screen" id="startup" ref={startupScreenRef}>
        <div className="circle outer-circle">
          <div className="circle inner-circle">
            <div className="load-icon"><img src={Icon} alt="Icon" id="flashingIcon" /></div>
            <img src={Logo} alt="Manero Logo" className="logo" />
          </div>
        </div>
      </div> 

      <div className="screen-two hidden" ref={screenTwoRef}>
        <div className="outer-big-circle">
          <div className="inner-big-circle">
            <div className="header-grid">
              <div></div>
              <span className="heading-primary" ref={headingPrimaryRef}>Welcome To</span>
              <span className="heading-secondary" ref={headingSecondaryRef}>Manero!</span>
              <div className="sub-header">Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.</div>
              <div><NavLink to="/signup" className="primary-btn" id="get-started-button" onClick={stopCarousel}>GET STARTED</NavLink></div>
              <div className="carousel-icons" ref={carouselIconsContainerRef}>
                <img src={Icon} alt="Icon" className="carousel-load-icon" id="flashingIcon" ref={carouselIconRef} />
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <div className="black-line-flex">
                <div className="black-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StartUpScreenView;