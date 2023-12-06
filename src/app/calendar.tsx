"use client";
import "./globals.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Calendar({ text }: any, { page }: any) {
  const [mouse, setMouse] = useState("button");
  const MouseOn = () => {
    setMouse("buttonWithMouse");
  };
  const MouseOut = () => {
    setMouse("button");
  };

  const Router = () => {
    useRouter().push(page);
  };

  return (
    <button
      onClick={Router}
      // onMouseOver={MouseOn}
      // onMouseOut={MouseOut}
      className="block m-4 p-6 hover:text-white hover:bg-indigo-900 border-indigo-600 bg-indigo-300"
    >
      {text}
    </button>
  );
}
