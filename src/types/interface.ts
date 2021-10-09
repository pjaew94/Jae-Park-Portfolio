import { AnimationControls } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type heading1 = {
  [key: string]: string;
};
type sectionInfo = {
  heading1: heading1;
  paragraph?: string;
  section: IScrollState["section"];
  textColor: IScrollState["textColor"];
  background: IScrollState["background"];
};

export interface IScrollState {
  section: "home" | "work" | "about" | "resume" | "contact";
  background: string;
  textColor: "white" | "black";
}

export interface ISectionInfo {
  [key: string]: sectionInfo;
}

export interface ISection {
  heading1: heading1;
  paragraph?: string;
  section: IScrollState["section"];
  textColor: IScrollState["textColor"];
  background: IScrollState["background"];
  setComponentInView: Dispatch<SetStateAction<IScrollState>>;
  componentInView: IScrollState;
  setShowProjectOverlay?: Dispatch<SetStateAction<IProjectOverlayState>>;
  showProjectOverlay?: IProjectOverlayState;
}

export interface IButton {
  text: string;
  link: string;
  type: "one" | "two";
}

export interface IProjectOverlayState {
  show: "mobile" | "desktop" | false;
  problem: string[];
  solution: string[];
  technologies: { tech: string; desc: string }[];
  name: string;
  link: string;
  github: string;
  warning?: string;
}

export interface ICarousel {
  setShowProjectOverlay: Dispatch<SetStateAction<IProjectOverlayState>>;
  showProjectOverlay: IProjectOverlayState;
}

export interface IProjectOverlay extends ICarousel {}

export interface ICarouselButton {
  type: "prev" | "next";
  currentPosition: number;
  onCarouselButtonClick: (type: "prev" | "next") => void;
}

export interface IProjectInfo {
  abbreviation: string;
  name: string;
  link: string;
  github: string;
  image: string;
  problem: string[];
  solution: string[];
  technologies: { tech: string; desc: string }[];
  warning?: string;
}

export interface IProjectList extends Array<IProjectInfo> {}

export interface ILinkListItem {
  text: string;
  link: string;
}

export interface ILink {
  text: string;
  link: string;
  index: number;
  showHidingTextControl: AnimationControls;
  setShowWarning: Dispatch<SetStateAction<boolean>>
}

export interface ITabBar {
  index: number;
  tab: string;
  selectedTab: string | null;
  setSelectedTab: Dispatch<SetStateAction<string | null>>;
  showHidingTextControl: AnimationControls;
}
