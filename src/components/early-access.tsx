"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import confetti from "canvas-confetti";

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const triggerFireworks = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(false);
    setIsSubscribing(true);

    if (email) {
      try {
        const response = await fetch(
          `https://addearlyaccessuser-v4mpmgatrq-uc.a.run.app?email=${encodeURIComponent(
            email
          )}`
        );
        if (response.status === 200) {
          triggerFireworks();
          setSuccessMessage(true);
        } else {
          setErrorMessage(true);
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage(true);
      } finally {
        setIsSubscribing(false);
      }
    }
  };

  return (
    <>
      {!successMessage && (
        <form
          id="emailForm"
          className="flex gap-1 flex-col md:flex-row justify-center align-middle mx-8 md:mx-10"
          onSubmit={handleSubmit}
        >
          <Input
            id="emailInput"
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none md:max-w-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            id="subscribeButton"
            type="submit"
            className="border border-gray-200 rounded-xl"
            disabled={isSubscribing}
          >
            {isSubscribing && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            )}

            {isSubscribing ? "Subscribing" : "Subscribe"}
          </Button>
        </form>
      )}
      {successMessage && (
        <p className="text-xs md:text-sm lg:text-lg xl:text-xl text-green-400">
          Thank you for your interest, You are all set!
        </p>
      )}
      {errorMessage && (
        <p className="text-xs md:text-sm lg:text-lg xl:text-xl text-red-400">
          Could not add that email address. Please try again.
        </p>
      )}
    </>
  );
}
