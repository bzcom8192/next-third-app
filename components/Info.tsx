"use client";

export default function Info({
  message,
  onClick,
}: {
  message: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded cursor-pointer z-50"
      onClick={onClick}
    >
      {message}
    </div>
  );
}
