import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-secondary opacity-50 flex flex-col items-center justify-center">
      <div className="w-20 mb-5 h-20 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
      <h2 className="text-center text-white text-xl font-semibold">
        Loading...
      </h2>
      <p className="w-1/3 text-center text-white">
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  );
};

export default Loading;
