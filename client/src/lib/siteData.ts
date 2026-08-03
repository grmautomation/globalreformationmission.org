/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Data is intentionally sourced from the provided style guide, public channel page, and user-provided links; avoid fabricated commitments.
 */
import { BookOpen, Church, Compass, Globe2, HandHeart, MapPin, Play, Send, UsersRound } from "lucide-react";

export const socialLinks = {
  youtube: "https://www.youtube.com/@GlobalReformationMission",
  facebook: "https://www.facebook.com/globalreformationmission",
};

export const kofiUrl = "https://ko-fi.com/globalreformationmission";

export const assets = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285988803/3ZUpWVbQs8K7BH2BqZvsuF/grm_hero_cartographic_sanctuary-EuZ89gXaUWMkRGFHAs3qcH.webp",
  missionMap: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285988803/3ZUpWVbQs8K7BH2BqZvsuF/grm_mission_pathway_map-HHiP8Wa5jveaQdbv9WRiiF.webp",
  streamPanel: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285988803/3ZUpWVbQs8K7BH2BqZvsuF/grm_streaming_theology_panel-UsRTJ4EuyfzwLq2vPADkGV.webp",
  visit: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285988803/3ZUpWVbQs8K7BH2BqZvsuF/grm_visit_welcome_parchment-cfPB9mri2WXsJdmvF8NeNK.webp",
};

export const missionPillars = [
  { title: "The Word", reference: "2 Timothy 3:16–17", copy: "Scripture is the foundation for teaching, correction, training, and mission.", icon: BookOpen },
  { title: "The Grace", reference: "Ephesians 2:8–9", copy: "The message is salvation by grace through faith, not human boasting.", icon: HandHeart },
  { title: "The Community", reference: "Hebrews 10:24–25", copy: "The church is a family formed for encouragement, endurance, and good works.", icon: UsersRound },
  { title: "The Mission", reference: "Matthew 28:18–20", copy: "The call is to make disciples under the authority of Christ.", icon: Send },
  { title: "The Glory", reference: "1 Corinthians 10:31", copy: "The final purpose is the glory of God in every work and witness.", icon: Globe2 },
];

export const pathways = [
  { title: "Pray", copy: "Intercede for gospel clarity, faithful churches, trained disciples, and open doors for mission.", icon: Compass },
  { title: "Give", copy: "Support the work through faithful stewardship. Every gift advances the proclamation of the gospel.", icon: HandHeart },
  { title: "Go", copy: "Move from conviction to embodied service through discipleship, local witness, and mission readiness.", icon: MapPin },
  { title: "Send", copy: "Strengthen church planting, teaching, and leadership formation through sustained partnership.", icon: Church },
];

export const videos = [
  { title: 'L’Eglise(assemblée)! 19', age: 'Streamed 1 hour ago', id: '30xxz5lwCKA' },
  { title: 'La grâce de Dieu qui restaure une famille brisée et prépare la venue du rédempteur! 7', age: 'Streamed 12 hours ago', id: 'xe01RHbu9mA' },
  { title: 'La femme selon le cœur de Dieu! 32', age: 'Streamed 16 hours ago', id: '16n6Fd-sv4k' },
  { title: 'la maman selon coeur de Dieu!', age: 'Streamed 16 hours ago', id: '6ko0OLAsGcI' },
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/visit", label: "Visit" },
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission" },
  { href: "/teachings", label: "Teaching" },
  { href: "/stream", label: "Stream" },
  { href: "/give", label: "Give" },
  { href: "/connect", label: "Connect" },
  { href: "/devotions", label: "Devotions" },
];

export const youtubeEmbed = (id: string) => "https://www.youtube.com/embed/" + id;
export const youtubeWatch = (id: string) => "https://www.youtube.com/watch?v=" + id;
