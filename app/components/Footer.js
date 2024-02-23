import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white text-center py-8 w-full">
            <div className="max-w-6xl mx-auto px-4">
                <span className="text-2xl font-bold">ATLAS</span>
                <div className="border-t border-gray-700 pt-4 mt-4">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} ATLAS. All rights reserved.
                    </p>
                    <p className="text-xs mt-2">
                        Designed & Developed by John Naquin
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
