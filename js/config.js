/**
 * VEXORA DIGITAL — Master Configuration & Personal Details
 * 
 * Personal Name: HAFIZ
 * Brand: Vexora Digital
 * Professional Title: AI Creator & Web Developer
 * Tagline: "AI Creativity. Digital Excellence."
 * WhatsApp: 03262126950 (+923262126950)
 */

const VEXORA_CONFIG = {
  brand: {
    name: "Vexora Digital",
    tagline: "AI Creativity. Digital Excellence.",
    heroHeadline: "Creative Digital Solutions That Make Your Brand Stand Out.",
    heroSubtitle: "I create AI-powered videos, professional advertisements, creative social media designs, and modern websites that help businesses bring their ideas to life.",
  },

  // PERSONAL & PROFESSIONAL DETAILS
  profile: {
    name: "HAFIZ",
    title: "AI Creator & Web Developer",
    avatar: "assets/brand/hafiz-profile.png",
    altText: "Hafiz — Vexora Digital",
    location: "Remote Worldwide",
    status: "Open for Work",
    
    bioIntro: "I am a creative digital professional specializing in AI video creation, modern website development, AI graphic design, and digital advertising.",
    bioDescription: "I help businesses present their products, services, and ideas through creative digital solutions designed to capture attention and communicate clearly. Whether you need a promotional video, a responsive website, or professional social media advertising creatives, I focus on delivering work that fits your goals and brand identity.",
    
    // Core Focus Highlights
    highlights: [
      "AI-powered creative content for businesses and brands.",
      "Responsive, modern website development.",
      "Professional advertising designs and social media visuals."
    ],

    // Four Approved Skills
    approvedSkills: [
      "AI Video Creation",
      "Website Development",
      "AI Graphic Design",
      "AI Advertising & Promotional Content"
    ]
  },

  // CONTACT & WHATSAPP INTEGRATION
  contact: {
    email: "vexoradigital00@gmail.com",
    whatsappNumber: "03262126950",
    whatsappInternational: "+923262126950",
    whatsappClean: "923262126950",
    whatsappUrl: "https://wa.me/923262126950",
    whatsappPrefilledUrl: "https://wa.me/923262126950?text=Hello%20Hafiz!%20I%20am%20interested%20in%20your%20digital%20services.%20I%20would%20like%20to%20discuss%20a%20project.",
    
    // Social Profile Placeholders
    linkedin: "https://linkedin.com/in/hafiz-vexora",
    instagram: "https://instagram.com/vexoradigital",
    github: "https://github.com/hafiz-vexora",
    
    // Form submission endpoint (e.g., Formspree or Web3Forms):
    // Set to your Formspree ID: e.g. "https://formspree.io/f/your_form_id"
    formspreeEndpoint: ""
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = VEXORA_CONFIG;
}
