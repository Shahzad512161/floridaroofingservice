import React from "react";
import {
  Home,
  Building2,
  PenTool,
  Ruler,
  Layout,
  Sparkles,
  Shield,
  Wrench,
  Settings,
  Layers,
  Square,
  Sliders,
  HardHat,
  Trees,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Globe,
  Clipboard,
  Grid,
  Phone
} from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = "", size = 24 }: IconProps) {
  const iconMap: Record<string, React.ComponentType<any>> = {
    Home,
    Building2,
    PenTool,
    Ruler,
    Layout,
    Sparkles,
    Shield,
    Wrench,
    Settings,
    Layers,
    Square,
    Sliders,
    HardHat,
    Tree: Trees,
    Trees,
    Menu,
    X,
    ChevronDown,
    ArrowRight,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Globe,
    Clipboard,
    Grid,
    Phone
  };

  const IconComponent = iconMap[name] || Home;
  return <IconComponent className={className} size={size} />;
}
