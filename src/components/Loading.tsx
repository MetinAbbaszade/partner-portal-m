import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-gray-50 text-gray-700">
            <div className="flex flex-col items-center space-y-4">
                <div
                    className="
                    w-12 h-12 border-4 border-t-4 border-indigo-500 border-solid rounded-full
                    animate-spin
                    "
                    aria-label="Loading"
                ></div>

                <p className="text-lg font-medium">Loading...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
