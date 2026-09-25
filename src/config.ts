// Site-wide constants. See REDESIGN-PROMPT.md Part A1.6 for the NOINDEX flag.

export const SITE_URL = 'https://hrishikeshwakhare.com';

export const SITE_NAME = 'Hrishikesh A. C. Wakhare';

// Default true — this is a second public copy of the live site and must not
// compete with it in search. Flip to false only at launch, by setting the
// PUBLIC_NOINDEX=false environment variable on the production deployment.
// See OPEN-QUESTIONS.md.
export const NOINDEX = (import.meta.env.PUBLIC_NOINDEX ?? 'true') !== 'false';

export const LINKS = {
  email: 'hryshykesh@gmail.com',
  linkedin: 'https://www.linkedin.com/in/wakhare-hrishikesh-chandrashekhar-7a41471b4',
  linkedinRecommendations: 'https://www.linkedin.com/in/wakhare-hrishikesh-chandrashekhar-7a41471b4/details/recommendations/',
  instagram: 'https://www.instagram.com/policydebrief/',
  x: 'https://x.com/hryshykesh',
  dakshyataPanji: 'https://dakshyatapanji.com/',
};

export const NAV_ITEMS = [
  { label: 'Work', href: '/work' },
  { label: 'Evidence', href: '/evidence' },
  { label: 'Research & Writing', href: '/research' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
