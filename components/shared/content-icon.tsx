import {
  Award,
  BadgeCheck,
  Building2,
  Check,
  Clock3,
  Droplets,
  Factory,
  Flame,
  HardHat,
  HeartHandshake,
  Home,
  Leaf,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Users,
  Wind,
} from "lucide-react";
import type { IconName } from "@/types/content";

const icons = {
  award: Award,
  "badge-check": BadgeCheck,
  building: Building2,
  check: Check,
  clock: Clock3,
  droplets: Droplets,
  factory: Factory,
  flame: Flame,
  "hard-hat": HardHat,
  heart: HeartHandshake,
  home: Home,
  leaf: Leaf,
  shield: ShieldCheck,
  sparkles: Sparkles,
  "spray-can": SprayCan,
  users: Users,
  wind: Wind,
};

export function ContentIcon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
