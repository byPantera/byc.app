"use client"

import Image from 'next/image';
import { useState, FormEvent, ChangeEvent, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
        overflow: hidden;
      }
      @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
      
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

  // Handle link click in mobile menu
  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    console.log('Email submitted:', email);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <main style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
    }}>
      {/* Navigation menu */}
      <div 
        ref={menuRef}
        className={`navigation-menu ${menuOpen ? 'open' : ''}`} 
        style={{
          position: isMobile ? 'fixed' : 'absolute',
          top: isMobile ? '0' : '20px',
          right: isMobile ? (menuOpen ? '0' : '-100%') : '20px',
          zIndex: 10,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          padding: isMobile ? '40px 20px' : 0
        }}
      >
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
            margin: isMobile ? '10px 0' : '0 0 0 20px'
          }}
          onClick={handleLinkClick}
        >
          About
        </Link>
        <Link 
          href="/features" 
          className="explore-button" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontFamily: "'VT323', monospace",
            fontSize: '18px',
            padding: '8px 12px',
            display: 'inline-block',
            textAlign: 'center',
            margin: isMobile ? '10px 0' : '0 0 0 20px'
          }}
          onClick={handleLinkClick}
        >
          Explore
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
            margin: isMobile ? '10px 0' : '0 0 0 20px'
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
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {/* Content container */}
      <div style={{
        width: '100%',
        maxWidth: '500px',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <Image 
            src="/status.svg" 
            alt="Status Logo" 
            width={400} 
            height={133} 
            priority
            style={{ 
              filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </div>
        
        {/* Email form - only shows if not submitted */}
        {!isSubmitted ? (
          <div style={{
            width: '100%',
            maxWidth: '400px',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '16px',
            padding: '16px',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}>
            <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder={isSubmitting ? "Processing..." : "Enter your email"}
                value={email}
                onChange={handleEmailChange}
                disabled={isSubmitting}
                style={{
                  padding: '10px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  width: '100%',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: "'VT323', monospace",
                  fontSize: '18px',
                  letterSpacing: '1px'
                }}
                required
              />
            </form>
          </div>
        ) : (
          <div style={{
            width: '100%',
            maxWidth: '400px',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '16px',
            padding: '16px',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}>
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <p style={{ color: 'white', fontSize: '24px', fontWeight: 500 }}>Thank you for subscribing!</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
