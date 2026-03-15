import { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent">
            <p className="cookie-consent__text">
                我们使用 Cookie 来提升您的体验。继续浏览本网站即表示您同意我们使用 Cookie。
            </p>
            <div className="cookie-consent__actions">
                <button 
                    onClick={handleAccept}
                    className="btn btn--primary btn--sm"
                >
                    接受
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
