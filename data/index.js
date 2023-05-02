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