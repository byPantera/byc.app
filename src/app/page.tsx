"use client"

import Image from 'next/image';
import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Add gradient background directly to document body
  useEffect(() => {
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
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
      {/* Navigation menu at top right */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center'
      }}>
        <Link href="/features" className="explore-button" style={{
          color: 'white',
          textDecoration: 'none',
          fontFamily: "'VT323', monospace",
          fontSize: '18px',
          padding: '8px 12px',
          display: 'inline-block',
          textAlign: 'center'
        }}>
          Explore
        </Link>
        <Link href="https://bityork-city.gitbook.io/bityork-city-docs" target="_blank" className="explore-button" style={{
          color: 'white',
          textDecoration: 'none',
          fontFamily: "'VT323', monospace",
          fontSize: '18px',
          padding: '8px 12px',
          display: 'inline-block',
          textAlign: 'center'
        }}>
          Docs
        </Link>
      </div>
      
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
