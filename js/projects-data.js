/**
 * VEXORA DIGITAL — Portfolio Projects Data
 * 
 * All demonstration projects are clearly labeled as "Concept Project" or "Demo Project".
 * Every project is easily editable or replaceable with real client work.
 * 
 * Approved Categories:
 * - AI Videos
 * - Websites
 * - Graphic Design
 * - Advertising
 */

const VEXORA_PROJECTS = [
  {
    id: "project-1",
    title: "Savor & Fire Artisan Grill — Restaurant Social Media Campaign",
    category: "Graphic Design",
    filterCategories: ["graphic-design"],
    label: "CONCEPT PROJECT",
    thumbnail: "assets/projects/project1-restaurant.svg",
    subtitle: "5-Post Coordinated Visual Campaign for an Upscale Grill",
    clientType: "Fictional Hospitality & Dining Brand",
    summary: "A concept campaign featuring five coordinated social media post designs for a fictional restaurant with appetizing food visuals and clean typography.",
    
    objective: "Create an attractive, visually cohesive social media campaign that highlights gourmet menu offerings, strengthens brand identity, and encourages dining reservations.",
    
    challenge: "Overcoming disjointed promotional posts by creating a unified graphic design system that presents restaurant dishes appetizingly while maintaining readable discount codes across social formats.",
    
    solution: "Designed a coordinated 5-post campaign utilizing warm, culinary-inspired color palettes (Burnt Orange, Obsidian, Warm Amber), bold typography, appetizing food focal points, and clear promotional discount hierarchy (#SAVOR20).",
    
    tools: ["Midjourney v6", "Adobe Photoshop", "Figma", "Digital Layout System"],
    
    deliverables: [
      "5 Coordinated Square (1:1) Social Posts",
      "Weekend 20% Off Promotion Creative",
      "Artisan Beverage & Happy Hour Visual",
      "Chef's Special Showcase Layout",
      "Campaign Brand Style & Hex Sheet"
    ],
    
    highlights: [
      "Appetizing visual hierarchy designed for mobile feeds",
      "Clear promotional calls-to-action with voucher codes",
      "Consistent color harmony across all 5 assets",
      "Easily adaptable layout system for weekly specials"
    ]
  },

  {
    id: "project-2",
    title: "LUMINA Botanicals — Premium Product Video Advertisement",
    category: "AI Videos",
    filterCategories: ["ai-videos"],
    label: "CONCEPT PROJECT",
    thumbnail: "assets/projects/project2-skincare-video.svg",
    subtitle: "Cinematic 30-Second Commercial Storyboard for Luxury Skincare",
    clientType: "Fictional Luxury Cosmetics Brand",
    summary: "A concept product video advertisement featuring cinematic composition, macro droplet simulations, studio backlighting, and commercial visual storytelling.",
    
    objective: "Produce a high-end concept commercial video showcasing an organic radiance elixir with luxury cosmetic aesthetics and evocative visual storytelling.",
    
    challenge: "Achieving high-budget cosmetic commercial visual aesthetics, macro droplet interactions, and glass reflections without an expensive physical studio setup or specialized macro equipment.",
    
    solution: "Developed an AI-assisted video production workflow to generate photorealistic botanical droplet dynamics, studio backlighting mist, refined typography lockups, and a 3-beat commercial storyboard.",
    
    tools: ["Runway Gen-3", "Midjourney v6", "After Effects", "Topaz Video AI"],
    
    deliverables: [
      "30-Second 4K Commercial Master Treatment (16:9)",
      "15-Second Social Reel Concept Cut (9:16)",
      "3-Beat Production Storyboard Sequence",
      "Spatial Audio & Sound Design Cue Sheet",
      "High-Resolution Packshot Visuals"
    ],
    
    highlights: [
      "Cinematic slow-motion droplet ripple concept",
      "Backlit glass bottle reflections and liquid depth",
      "Refined typography lockup and packaging reveal",
      "Multi-aspect ratio concept outputs for web and social"
    ]
  },

  {
    id: "project-3",
    title: "Apex Cloud Solutions — Modern Business Website",
    category: "Websites",
    filterCategories: ["websites"],
    label: "CONCEPT PROJECT",
    thumbnail: "assets/projects/project3-website.svg",
    subtitle: "Responsive Landing Page & Interactive SaaS Showcase",
    clientType: "Fictional Cloud Infrastructure & Tech Platform",
    summary: "A clean, responsive demo landing page for a fictional business featuring an interactive metrics dashboard, modern layout, and clear calls-to-action.",
    
    objective: "Design and build a responsive demo website that presents business services professionally, communicates complex cloud infrastructure clearly, and guides visitors toward a trial signup.",
    
    challenge: "Explaining advanced distributed cloud orchestration in a clean, user-friendly layout without overwhelming visitors, while maintaining fast load times and seamless responsiveness across devices.",
    
    solution: "Engineered a minimal white-theme landing page with subtle blue/cyan accents, clear visual hierarchy, interactive metric dashboard cards, intuitive feature grids, and mobile-first responsive architecture.",
    
    tools: ["Semantic HTML5", "Modern CSS3 (Flexbox/Grid)", "Vanilla JavaScript", "SVG Vector Graphics", "Responsive Design"],
    
    deliverables: [
      "Fully Responsive Desktop & Mobile Landing Page",
      "Interactive Metric Dashboard Preview Component",
      "Sticky Navigation Bar with Mobile Drawer",
      "Feature Architecture Section with Iconography",
      "SEO & Social Meta Tags Integration"
    ],
    
    highlights: [
      "Clean white aesthetic with dark charcoal typography",
      "Instant loading with zero heavy external framework bloat",
      "Accessible color contrast meeting WCAG AA standards",
      "Interactive live preview simulation inside the portfolio"
    ],
    hasLivePreview: true
  },

  {
    id: "project-4",
    title: "NovaPulse Smartband — AI Promotional Video",
    category: "AI Videos",
    filterCategories: ["ai-videos"],
    label: "CONCEPT PROJECT",
    thumbnail: "assets/projects/project4-ai-promo.svg",
    subtitle: "Futuristic Lifestyle & Spatial Health AI Tech Teaser",
    clientType: "Fictional Wearable Technology Brand",
    summary: "A concept promotional video featuring engaging visual storytelling, holographic biometric HUD interfaces, pulse waveforms, and futuristic motion sequences.",
    
    objective: "Create an engaging concept promotional video demonstrating an innovative smartband and its AI biometric health telemetry for a fictional tech brand.",
    
    challenge: "Translating abstract biometric data and AI processing into tangible, visually exhilarating motion scenes that captivate tech enthusiasts in under 45 seconds.",
    
    solution: "Combined AI image synthesis with generative camera movements, holographic HUD overlays, biometric waveform graphics, and rhythmic visual pacing to craft a punchy, tech-forward teaser concept.",
    
    tools: ["Midjourney v6", "Runway Gen-3", "After Effects", "Synthesized Sound FX"],
    
    deliverables: [
      "45-Second Product Launch Teaser Storyboard",
      "Holographic Biometric HUD Motion Graphics",
      "Sound Design with Futuristic Audio Cues",
      "Keyframe Sequence Storyboard",
      "Social Teaser Concept Formats (16:9 & 9:16)"
    ],
    
    highlights: [
      "Dynamic holographic HUD rings and particle simulations",
      "Biometric waveform visualization",
      "Clear advertising message and engaging story sequence",
      "Distinctive futuristic cyan and violet lighting accents"
    ]
  },

  {
    id: "project-5",
    title: "KROMA Studios — Social Media Advertising Package",
    category: "Advertising",
    filterCategories: ["advertising"],
    label: "CONCEPT PROJECT",
    thumbnail: "assets/projects/project5-retail-fashion.svg",
    subtitle: "Unified Multi-Format Advertising Suite for an Urban Fashion Label",
    clientType: "Fictional Contemporary Fashion Label",
    summary: "A coordinated advertising campaign for a fictional clothing brand including promotional graphics, social media ad concepts, a banner, and consistent brand styling.",
    
    objective: "Establish an unmistakable, premium advertising presence for an urban apparel brand's autumn capsule collection across diverse digital paid ad formats.",
    
    challenge: "Preventing visual inconsistency across fragmented ad channels where formats range from vertical 9:16 smartphone screens to wide 16:9 banner displays.",
    
    solution: "Developed an adaptable grid-based creative system maintaining consistent typography, monochromatic contrast, cyan accent pills, and high-impact editorial layouts across all aspect ratios.",
    
    tools: ["Figma", "Adobe Photoshop", "AI Model Inpainting", "Digital Ad Specifications"],
    
    deliverables: [
      "4 Instagram Story Ad Concepts (9:16)",
      "6 Square Feed Posts & Carousel Creatives (1:1)",
      "2 High-Impact Landscape Display Banners (16:9)",
      "Brand Color Palette & Font Pairing System",
      "Performance Ad Copy & Call-To-Action Framework"
    ],
    
    highlights: [
      "Seamless brand consistency across 3 distinct aspect ratios",
      "Architectural typography and bold negative space",
      "High-contrast promotional callouts (CODE: KROMA30)",
      "Production-ready exports optimized for Meta & Google Ads"
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = VEXORA_PROJECTS;
}
