"use client";
import { usePostHog } from "posthog-js/react";
import EarlyAccess from "./early-access";

export default function AdditionalInfo() {
  const posthog = usePostHog();
  return (
    <div className="max-w-2xl w-full space-y-8 text-center pt-24 md:pt-40">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Effortless organisation
      </h1>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-gray-500">
            goodbye clutter, hello intelligent, actionable insights
          </span>
        </div>
      </div>
      {!posthog.isFeatureEnabled("public-demo") && (
        <>
          <div className="pt-24 md:pt-40">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Join the Early Access List
            </h2>
            <p className="mt-2 text-gray-600">
              because life&apos;s too short for document drama
            </p>
          </div>
          <EarlyAccess />
        </>
      )}
    </div>
  );
}
