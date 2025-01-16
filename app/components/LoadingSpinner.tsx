import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0f0c24] bg-opacity-75 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#ff4b36]"></div>
    </div>
  );
};

export default LoadingSpinner;

