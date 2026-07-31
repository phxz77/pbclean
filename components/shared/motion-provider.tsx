"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { LazyMotion, MotionConfig } from "framer-motion";

const loadMotionFeatures = () =>
  import("@/lib/motion-features").then((module) => module.default);

const SmoothScroll = dynamic(
  () => import("@/components/shared/smooth-scroll").then((module) => module.SmoothScroll),
  { ssr: false }
);

type DeviceNavigator = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [smoothScrollEnabled, setSmoothScrollEnabled] = useState(false);
  const [lightMotion, setLightMotion] = useState(false);

  useEffect(() => {
    const device = navigator as DeviceNavigator;
    const shouldUseNativeScroll =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      device.connection?.saveData === true ||
      (device.deviceMemory !== undefined && device.deviceMemory <= 4) ||
      navigator.hardwareConcurrency <= 4;

    if (shouldUseNativeScroll) {
      setLightMotion(true);
      return;
    }

    const enable = () => setSmoothScrollEnabled(true);
    const idleId = window.requestIdleCallback
      ? window.requestIdleCallback(enable, { timeout: 1800 })
      : window.setTimeout(enable, 1200);

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
    };
  }, []);

  return (
    <LazyMotion features={loadMotionFeatures}>
      <MotionConfig reducedMotion={lightMotion ? "always" : "user"}>
        {children}
        {smoothScrollEnabled && <SmoothScroll />}
      </MotionConfig>
    </LazyMotion>
  );
}
