import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5em"   
        height="5em"  
        viewBox="0 0 24 24"
        className="animate-spin"
      >
        <path
          fill="#dd6363"
          d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
          opacity={0.5}
        ></path>
        <path
          fill="#dd6363"
          d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
        >
          <animateTransform
            attributeName="transform"
            dur="0.45s"
            from="0 12 12"
            repeatCount="indefinite"
            to="360 12 12"
            type="rotate"
          ></animateTransform>
        </path>
      </svg>
    </div>
  );
};

export default Loading;
