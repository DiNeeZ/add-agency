import Gadgets from "@/assets/images/icons/gadgets.svg";
import Payout from "@/assets/images/icons/payout.svg";
import Diamond from "@/assets/images/icons/diamond.svg";
import Banner from "@/assets/images/formats/banner.svg";
import BannerThumbnail from "@/assets/images/formats/banner-thumbnail.svg";
import Video from "@/assets/images/formats/video.svg";
import VideoThumbnail from "@/assets/images/formats/video-thumbnail.svg";
import Native from "@/assets/images/formats/native.svg";
import NativeThumbnail from "@/assets/images/formats/native-thumbnail.svg";
import Teaser from "@/assets/images/formats/teaser.svg";
import TeaserThumbnail from "@/assets/images/formats/teaser-thumbnail.svg";
import Popunder from "@/assets/images/formats/popunder.svg";
import PopunderThumbnail from "@/assets/images/formats/popunder-thumbnail.svg";
import SearchTraffic from "@/assets/images/formats/search-traffic.svg";
import SearchTrafficThumbnail from "@/assets/images/formats/search-traffic-thumbnail.svg";
import InApp from "@/assets/images/formats/in-app.svg";
import InAppThumbnail from "@/assets/images/formats/in-app-thumbnail.svg";
import Push from "@/assets/images/formats/push.svg";
import PushThumbnail from "@/assets/images/formats/push-thumbnail.svg";
import Inpage from "@/assets/images/formats/inpage.svg";
import InpageThumbnail from "@/assets/images/formats/inpage-thumbnail.svg";
import Suit from "@/assets/images/icons/suit.svg";
import DollarSign from "@/assets/images/icons/dollar-sign.svg";
import Heart from "@/assets/images/icons/heart.svg";
import Cart from "@/assets/images/icons/cart.svg";
import Games from "@/assets/images/icons/games.svg";
import MedicineBottle from "@/assets/images/icons/medicine-bottle.svg";
import GenderIntersex from "@/assets/images/icons/gender-intersex.svg";
import Gift from "@/assets/images/icons/gift.svg";
import TagP from "@/assets/images/icons/tag-p.svg";
import SupportP from "@/assets/images/icons/support-p.svg";
import Wallet from "@/assets/images/icons/wallet.svg";
import Clock from "@/assets/images/icons/clock.svg";
import Globe from "@/assets/images/icons/globe.svg";
import Ads from "@/assets/images/icons/ads.svg";
import Tag from "@/assets/images/icons/tag.svg";
import Support from "@/assets/images/icons/support.svg";

export const offers = [
  {
    label: "Excellent monetization",
    descr: "for websites and applications",
    icon: Gadgets,
  },
  {
    label: "Fast payments",
    descr: "within 2 days, any withdrawal method",
    icon: Payout,
  },
  {
    label: "High-quality traffic",
    descr: "for a wide range of advertising campaigns",
    icon: Diamond,
  },
  {
    label: "Convenient optimization tools",
    descr: "speeds up the advertising process",
    icon: Diamond,
  },
];

export const formats = [
  {
    id: "format-banner-1",
    title: "Banner ads",
    descr: "one of the classic advertising formats shown on the page.",
    costPerClick: 0.003,
    dailyVolume: "1 billion",
    image: Banner,
    thumbnail: BannerThumbnail,
  },
  {
    id: "format-video-2",
    title: "Video ads",
    descr:
      "Video ads are created to promote a product, service, or brand to a target audience. They can take on different formats and are effective due to their visual and auditory nature.",
    costPerClick: 0.003,
    dailyVolume: "1 billion",
    image: Video,
    thumbnail: VideoThumbnail,
  },
  {
    id: "format-native-3",
    title: "Native ads",
    descr:
      "Form of advertising that blends in with the form and function of the platform where they are displayed.",
    costPerClick: 0.003,
    dailyVolume: "1 billion",
    image: Native,
    thumbnail: NativeThumbnail,
  },
  {
    id: "format-teaser-4",
    title: "Teaser ads",
    descr:
      "Teaser ads are creates curiosity and anticipation by providing a glimpse of a product or service without revealing too much information.",
    costPerClick: 0.003,
    dailyVolume: "1 billion",
    image: Teaser,
    thumbnail: TeaserThumbnail,
  },
  {
    id: "format-popunder-5",
    title: "Popunder ads",
    descr:
      "Popunder ads opens in a new browser window behind the current window that the user is viewing.",
    costPerClick: 0.003,
    dailyVolume: "1 billion",
    image: Popunder,
    thumbnail: PopunderThumbnail,
  },
  {
    id: "format-search-traffic-6",
    title: "Search Traffic ads",
    descr:
      "Also known as Search Engine Marketing (SEM) or Pay-Per-Click (PPC) ads, are a form of online advertising that involves placing ads on search engine results pages (SERPs).",
    costPerClick: 0.003,
    dailyVolume: "1 billion",
    image: SearchTraffic,
    thumbnail: SearchTrafficThumbnail,
  },
  {
    id: "format-in-app-7",
    title: "In-app ads",
    descr:
      "In-app ads appears within a mobile application. These ads can take on various forms, including banner ads, interstitial ads, and rewarded video ads, and they are designed to blend in with the app's user interface",
    costPerClick: 0.003,
    dailyVolume: "1 billion",
    image: InApp,
    thumbnail: InAppThumbnail,
  },
  {
    id: "format-push-8",
    title: "Push ads",
    descr:
      "Advertising that involves sending notifications to users' devices, such as smartphones or desktops. ",
    costPerClick: 0.003,
    dailyVolume: "1 billion",
    image: Push,
    thumbnail: PushThumbnail,
  },
  {
    id: "format-inpage-9",
    title: "In Page",
    descr:
      "Also known as display ads, are a form of online advertising that appear within the content of a webpage. ",
    costPerClick: 0.003,
    dailyVolume: "1 billion",
    image: Inpage,
    thumbnail: InpageThumbnail,
  },
];

export const tematic = [
  {
    id: "tematic-gambling-and-entertainment",
    label: "Gambling and Entertainment",
    icon: Suit,
  },
  {
    id: "tematic-finance",
    label: "Finance",
    icon: DollarSign,
  },
  {
    id: "tematic-dating",
    label: "Dating",
    icon: Heart,
  },
  {
    id: "tematic-e-commerce",
    label: "E-commerce",
    icon: Cart,
  },
  {
    id: "tematic-gaming-apps",
    label: "Gaming & Apps",
    icon: Games,
  },
  {
    id: "tematic-health-medicine",
    label: "Health & Medicine",
    icon: MedicineBottle,
  },
  {
    id: "tematic-18",
    label: "18+",
    icon: GenderIntersex,
  },
];

export const numsOfAdvantages = [
  {
    id: "verified-sites-applications",
    label: "Traffic of verified sites and applications",
    num: 5000,
  },
  {
    id: "visitors-your-customers",
    label: "Visitors monthly can be your customers",
    num: 300000000,
  },
  {
    id: "campaign-targeting-settings",
    label: "Campaign targeting settings",
    num: 12,
  },
];

export const advantageCards = [
  {
    id: "loyalty-programs",
    title: "Loyalty Programs",
    subtitle: "cashback, postpaid",
    icon: Gift,
  },
  {
    id: "protocols-integration",
    title: "Protocols integration ",
    subtitle: "XML/JSON and oRTB",
    icon: TagP,
  },
  {
    id: "support-24-7",
    title: "24/7 support with ",
    subtitle: "personal manager",
    icon: SupportP,
  },
];

export const webmasterBenefits = [
  {
    id: "benefit-wallet",
    text: "High royalties from direct advertisers",
    icon: Wallet,
  },
  {
    id: "benefit-clock",
    text: "Fast payments to any system without commissions",
    icon: Clock,
  },
  {
    id: "benefit-globe",
    text: "Global coverage worldwide",
    icon: Globe,
  },
  {
    id: "benefit-ads",
    text: "Moderated ads",
    icon: Ads,
  },
];

export const webmasterCards = [
  {
    id: "protocol-integration",
    title: "Protocol integration",
    subtitle: "via XML/JSON and oRTB",
    icon: Tag,
  },
  {
    id: "support-24-7",
    title: "24/7 support",
    subtitle: "with a dedicated account manager",
    icon: Support,
  },
];

export const advertiserFAQ = [
  {
    id: "advertiserFAQ-1",
    question: "What services do you offer as an advertising agency?",
    answer:
      "As an advertising agency, we offer a wide range of services including but not limited to, market research, campaign planning, creative development, media buying, and performance analytics.",
  },
  {
    id: "advertiserFAQ-2",
    question: "How do you charge for your services?",
    answer:
      "Our fees depend on the scope of the project, the services required, and the level of complexity involved. We typically charge either a flat fee or a percentage of the media spend for our services.",
  },
  {
    id: "advertiserFAQ-3",
    question: "How long does it take to develop an advertising campaign?",
    answer:
      "The time it takes to develop an advertising campaign depends on the scope and complexity of the project. We work with clients to establish realistic timelines based on their goals and budget.",
  },
  {
    id: "advertiserFAQ-4",
    question:
      "How do you ensure that my advertising message is delivered to the right audience?",
    answer:
      "We use a combination of data analysis, targeting, and optimization to ensure that your advertising message reaches the right audience. We continually refine our targeting approach based on performance data and audience insights.",
  },
  {
    id: "advertiserFAQ-5",
    question:
      "How do you work with clients to develop their advertising strategy?",
    answer:
      "We work closely with clients to understand their business objectives, target audience, and competitive landscape. Based on this information, we develop a customized advertising strategy that aligns with their goals and budget.",
  },
  {
    id: "advertiserFAQ-6",
    question: "What industries do you specialize in?",
    answer:
      "We have experience working with clients across various industries, including healthcare, retail, finance, technology, and more. We adapt our approach based on the specific needs of each client.",
  },
];

export const webmasterFAQ = [
  {
    id: "webmasterFAQ-1",
    question:
      "What is the role of a webmaster in an advertising agency's website?",
    answer:
      "The webmaster is responsible for the development, maintenance, and optimization of the agency's website to ensure it is up-to-date, user-friendly, and aligned with the agency's branding and marketing objectives.",
  },
  {
    id: "webmasterFAQ-2",
    question:
      "What technical skills are required for a webmaster in an advertising agency?",
    answer:
      "Webmasters in advertising agencies should have knowledge and experience in web development languages such as HTML, CSS, JavaScript, and PHP, as well as familiarity with content management systems (CMS) such as WordPress and Drupal.",
  },
  {
    id: "webmasterFAQ-3",
    question:
      "How does a webmaster ensure the agency's website is optimized for search engines?",
    answer:
      "A webmaster can optimize the website's content, structure, and metadata for search engines, perform keyword research and analysis, and create a sitemap to help search engines crawl the website.",
  },
  {
    id: "webmasterFAQ-4",
    question:
      "What are some best practices for web design in an advertising agency's website?",
    answer:
      "Webmasters should ensure the website is visually appealing, easy to navigate, and responsive across different devices. They should also prioritize page loading speed and incorporate clear calls to action throughout the site.",
  },
  {
    id: "webmasterFAQ-5",
    question: "How can a webmaster ensure the agency's website is secure?",
    answer:
      "Webmasters can implement security measures such as HTTPS encryption, two-factor authentication, regular backups, and software updates to protect the website from potential security breaches.",
  },
  {
    id: "webmasterFAQ-6",
    question:
      "How does a webmaster track and analyze the performance of the agency's website?",
    answer:
      "Webmasters can use web analytics tools such as Google Analytics to track and analyze the website's traffic, user behavior, and other key performance indicators. They can then use this data to optimize the website's design, content, and marketing strategies to improve its performance and achieve the agency's goals.",
  },
];

export const contactsInputOptions = [
  {
    type: "tel",
    label: "Phone",
    placeholder: "Phone",
  },
  {
    type: "text",
    label: "Telegram",
    placeholder: "Telegram",
  },
  {
    type: "text",
    label: "WhatsApp",
    placeholder: "WhatsApp",
  },
  {
    type: "text",
    label: "Skype",
    placeholder: "Skype",
  },
  {
    type: "email",
    label: "E-mail",
    placeholder: "E-mail",
  },
  {
    type: "text",
    label: "other",
    placeholder: "other",
  },
];
