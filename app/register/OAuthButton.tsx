"use client";

import Image from "next/image";

interface OAuthButtonProps {
  provider: "Google" | "Facebook";
  onClick: () => void;
}

const OAuthButton = ({ provider, onClick }: OAuthButtonProps) => {
  const iconSrc = provider === "Google" ? "/google.png" : "/google.svg";

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center cursor-pointer justify-center gap-2 border
       border-gray-200 bg-white hover:bg-gray-200 py-2 rounded-lg text-gray-700"
    >
      <Image src={iconSrc} alt={provider} width={20} height={20} />
      Sign Up with {provider}
    </button>
  );
};

export default OAuthButton;
