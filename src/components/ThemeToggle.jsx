import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle Theme"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
            {theme === 'light' ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="theme-toggle__icon">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="theme-toggle__icon">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            )}
            <style jsx="true">{`
                .theme-toggle {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: var(--radius-md);
                    background: var(--color-surface);
                    color: var(--color-text);
                    border: 1px solid var(--color-border);
                    transition: all var(--transition-base);
                    padding: 0;
                }
                .theme-toggle:hover {
                    background: var(--color-bg-card-hover);
                    border-color: var(--color-primary-light);
                    color: var(--color-primary-light);
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-sm);
                }
                .theme-toggle__icon {
                    width: 20px;
                    height: 20px;
                }
            `}</style>
        </button>
    );
};

export default ThemeToggle;
