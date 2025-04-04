"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [userClosedMenu, setUserClosedMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Add gradient background directly to document body
  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    document.body.style.background = 'linear-gradient(45deg, #FF7700, #FFA200, #FF5100, #FFBD00, #FF9500, #FF6E00)';
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'gradientBG 15s ease infinite';
    
    // Add the animation styles to head
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        25% { background-position: 50% 100%; }
        50% { background-position: 100% 50%; }
        75% { background-position: 50% 0%; }
        100% { background-position: 0% 50%; }
      }
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
      }
      @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

      /* Responsive styles */
      @media (max-width: 768px) {
        .panel {
          flex-direction: column !important;
          flex-wrap: nowrap !important;
        }
        .panel-image {
          min-width: 100% !important;
          height: 160px !important;
          margin-right: 0 !important;
          margin-bottom: 16px !important;
        }
        .panel-content {
          width: 100% !important;
        }
        .panel-content h2 {
          font-size: 24px !important;
          margin-bottom: 8px !important;
          text-align: center !important;
        }
        .panel-content p {
          font-size: 16px !important;
          line-height: 1.4 !important;
          text-align: center !important;
        }
      }
      
      /* Explore button animations */
      .explore-button {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
        z-index: 1;
        margin-left: 20px;
      }
      
      .explore-button:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: rgba(255, 119, 0, 0.4);
        transition: all 0.3s ease;
        z-index: -1;
        border-radius: 4px;
      }
      
      .explore-button:hover {
        transform: translateY(-3px);
        text-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        letter-spacing: 1.5px;
      }
      
      .explore-button:hover:before {
        width: 100%;
      }
      
      .explore-button:active {
        transform: translateY(0);
      }
      
      /* Image interaction styles */
      .image-container {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .image-container:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      }
      
      .image-container:active {
        transform: scale(0.98);
      }
      
      /* Mobile menu button */
      .menu-button {
        display: none;
        position: fixed;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.3);
        border: none;
        z-index: 100;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        transition: all 0.3s ease;
      }

      .menu-button:hover {
        background: rgba(0, 0, 0, 0.4);
      }

      .menu-button span {
        display: block;
        width: 20px;
        height: 2px;
        background: white;
        margin: 2px 0;
        transition: all 0.3s ease;
      }

      .menu-button.open span:nth-child(1) {
        transform: rotate(45deg) translate(4px, 4px);
      }

      .menu-button.open span:nth-child(2) {
        opacity: 0;
      }

      .menu-button.open span:nth-child(3) {
        transform: rotate(-45deg) translate(4px, -4px);
      }

      @media (max-width: 768px) {
        .menu-button {
          display: flex;
        }
        
        .navigation-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 25%; /* Reduced to 1/4 of screen width */
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          z-index: 99;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .navigation-menu.open {
          right: 0;
        }
        
        .navigation-menu a {
          margin: 15px 0;
          display: block;
          width: auto;
          padding: 10px 20px;
          text-align: center;
          font-size: 20px;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.4s ease;
          transition-delay: 0s;
        }
        
        .navigation-menu.open a {
          transform: translateY(0);
          opacity: 1;
        }
        
        .navigation-menu.open a:nth-child(1) {
          transition-delay: 0.1s;
        }
        
        .navigation-menu.open a:nth-child(2) {
          transition-delay: 0.2s;
        }
        
        .navigation-menu.open a:nth-child(3) {
          transition-delay: 0.3s;
        }
      }
      
      /* Modal styles */
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }
      
      .modal-overlay.open {
        opacity: 1;
        visibility: visible;
      }
      
      .modal-content {
        position: relative;
        width: 90%;
        max-width: 800px;
        height: auto;
        max-height: 90vh;
        transform: scale(0.8);
        transition: transform 0.4s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .modal-overlay.open .modal-content {
        transform: scale(1);
      }
      
      .modal-image-container {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0.1);
      }
      
      .modal-image {
        object-fit: contain;
        width: 100%;
        height: 100%;
        padding: 20px;
      }
      
      .modal-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 18px;
        transition: background 0.2s ease, transform 0.2s ease;
      }
      
      .modal-close:hover {
        background: rgba(255, 70, 0, 0.8);
        transform: scale(1.1);
      }
      
      .modal-caption {
        margin-top: 16px;
        color: white;
        font-family: 'VT323', monospace;
        font-size: 24px;
        text-align: center;
      }
    `;
    document.head.appendChild(style);
    
    // Add click outside listener to close menu
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.head.removeChild(style);
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Auto-close menu after delay
  useEffect(() => {
    let closeTimer: NodeJS.Timeout;
    
    if (menuOpen && menuRef.current) {
      // Set initial timer for auto-close
      closeTimer = setTimeout(() => {
        // Only close if user didn't manually close it
        if (!userClosedMenu) {
          setMenuOpen(false);
        }
      }, 3000);
    }
    
    return () => {
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, [menuOpen, userClosedMenu]);
  
  // When userClosedMenu changes, reset it after a delay
  useEffect(() => {
    if (userClosedMenu) {
      const timer = setTimeout(() => {
        setUserClosedMenu(false);
      }, 5000); // Longer cooldown period
      return () => clearTimeout(timer);
    }
  }, [userClosedMenu]);
  
  // Handle menu button click
  const handleMenuButtonClick = () => {
    if (menuOpen) {
      // When user clicks to close, set flag to prevent auto-opening
      setMenuOpen(false);
      setUserClosedMenu(true);
      
      // Also remove any hover event listeners on the menu
      if (menuRef.current) {
        const menu = menuRef.current;
        menu.style.pointerEvents = 'none';
        
        // Re-enable pointer events after delay
        setTimeout(() => {
          if (menu) {
            menu.style.pointerEvents = 'auto';
          }
        }, 5000);
      }
    } else {
      // Only open if not recently closed by user
      if (!userClosedMenu) {
        setMenuOpen(true);
      }
    }
  };

  const openModal = (src: string, alt: string) => {
    setModalImage(src);
    setModalAlt(alt);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle link click in mobile menu
  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      padding: '40px 20px',
    }}>
      {/* Navigation menu */}
      <div 
        ref={menuRef}
        className={`navigation-menu ${menuOpen ? 'open' : ''}`}
      >
        <Link 
          href="/" 
          className="explore-button" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontFamily: "'VT323', monospace",
            fontSize: '18px',
            padding: '8px 12px',
            display: 'inline-block',
            textAlign: 'center',
            margin: '10px 0'
          }}
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className="explore-button" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontFamily: "'VT323', monospace",
            fontSize: '18px',
            padding: '8px 12px',
            display: 'inline-block',
            textAlign: 'center',
            margin: '10px 0'
          }}
          onClick={handleLinkClick}
        >
          About
        </Link>
        <Link 
          href="https://bityork-city.gitbook.io/bityork-city-docs" 
          target="_blank" 
          className="explore-button" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontFamily: "'VT323', monospace",
            fontSize: '18px',
            padding: '8px 12px',
            display: 'inline-block',
            textAlign: 'center',
            margin: '10px 0'
          }}
          onClick={handleLinkClick}
        >
          Docs
        </Link>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className={`menu-button ${menuOpen ? 'open' : ''}`}
        onClick={handleMenuButtonClick}
        aria-label="Toggle menu"
        style={{ display: menuOpen ? 'none' : 'flex' }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {/* Header with Logo and Back Button */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        flexWrap: isMobile ? 'wrap' : 'nowrap',
        gap: isMobile ? '20px' : '0'
      }}>
        <Link href="/" style={{
          color: 'white',
          textDecoration: 'none',
          fontFamily: "'VT323', monospace",
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '8px 16px',
          borderRadius: '8px',
          order: isMobile ? 2 : 1
        }}>
          <span style={{ marginRight: '8px' }}>←</span> Back
        </Link>
        
        <Image 
          src="/status.svg" 
          alt="Status Logo" 
          width={isMobile ? 150 : 200}
          height={isMobile ? 50 : 66}
          priority
          style={{ 
            filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))',
            maxWidth: '100%',
            height: 'auto',
            order: isMobile ? 1 : 2
          }}
        />
      </div>
      
      {/* Two Panel Container */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
      }}>
        {/* Panel 1 */}
        <div className="panel" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '16px',
          padding: isMobile ? '16px' : '24px',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: isMobile ? '16px' : '24px',
          transition: 'transform 0.3s ease',
        }}>
          {/* Image Container */}
          <div 
            className="panel-image image-container" 
            style={{
              minWidth: isMobile ? '120px' : '200px',
              height: isMobile ? '120px' : '200px',
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
            onClick={() => openModal('/bitmap.svg', 'Global Connectivity')}
          >
            <Image
              src="/bitmap.svg"
              alt="Global Network"
              fill
              style={{
                objectFit: 'cover',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
              }}
            />
          </div>
          
          {/* Text Content */}
          <div className="panel-content">
            <h2 style={{
              margin: '0 0 16px 0',
              color: 'white',
              fontFamily: "'VT323', monospace",
              fontSize: isMobile ? '24px' : '32px',
              letterSpacing: '1px',
            }}>
              Global Connectivity
            </h2>
            <p style={{
              margin: '0',
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: "'VT323', monospace",
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: isMobile ? '1.4' : '1.6',
              letterSpacing: '0.5px',
            }}>
              Connect with users from around the world with our cutting-edge platform. 
              Experience seamless communication across borders, with lightning-fast response times 
              and unparalleled security.
            </p>
          </div>
        </div>
        
        {/* Panel 2 */}
        <div className="panel" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '16px',
          padding: isMobile ? '16px' : '24px',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row-reverse',
          alignItems: 'center',
          gap: isMobile ? '16px' : '24px',
          transition: 'transform 0.3s ease',
        }}>
          {/* Image Container */}
          <div 
            className="panel-image image-container" 
            style={{
              minWidth: isMobile ? '120px' : '200px',
              height: isMobile ? '120px' : '200px',
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
            onClick={() => openModal('/file.svg', 'Advanced Encryption')}
          >
            <Image
              src="/file.svg"
              alt="File Sharing"
              fill
              style={{
                objectFit: 'cover',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
              }}
            />
          </div>
          
          {/* Text Content */}
          <div className="panel-content">
            <h2 style={{
              margin: '0 0 16px 0',
              color: 'white',
              fontFamily: "'VT323', monospace",
              fontSize: isMobile ? '24px' : '32px',
              letterSpacing: '1px',
            }}>
              Advanced Encryption
            </h2>
            <p style={{
              margin: '0',
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: "'VT323', monospace",
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: isMobile ? '1.4' : '1.6',
              letterSpacing: '0.5px',
            }}>
              Our state-of-the-art encryption technology ensures your files and communications 
              are always secure. With end-to-end encryption and zero-knowledge architecture, 
              your privacy is guaranteed.
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation links to more pages */}
      <div style={{
        marginTop: '30px',
        display: 'flex',
        gap: '16px',
      }}>
        <Link href="/" className="explore-button" style={{
          color: 'white',
          textDecoration: 'none',
          fontFamily: "'VT323', monospace",
          fontSize: '18px',
          padding: '8px 12px'
        }}>
          Home
        </Link>
      </div>
      
      {/* Modal for enlarged images */}
      <div 
        className={`modal-overlay ${modalOpen ? 'open' : ''}`} 
        onClick={closeModal}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>×</button>
          <div className="modal-image-container">
            {modalImage && (
              <Image 
                src={modalImage}
                alt={modalAlt}
                fill
                className="modal-image"
                style={{ objectFit: 'contain', padding: '20px' }}
              />
            )}
          </div>
          <div className="modal-caption">{modalAlt}</div>
        </div>
      </div>
    </main>
  );
} 