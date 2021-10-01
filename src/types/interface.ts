import { Dispatch, SetStateAction } from "react";

type heading1 = {
    [key: string]: string
}
type sectionInfo = {
    heading1: heading1,
    paragraph?: string,
    section: IScrollState["section"],
    textColor: IScrollState["textColor"]
    background: IScrollState["background"]
}

export interface IScrollState {
  section: "home" | "work" | "about" | "resume" | "contact";
  background: string;
  textColor: "white" | "black";
}


export interface ISectionInfo {
    [key: string] : sectionInfo
}

export interface ISection {
  heading1: heading1;
  paragraph?: string;
  section: IScrollState["section"];
  textColor: IScrollState["textColor"];
  background: IScrollState["background"]
  setComponentInView: Dispatch<SetStateAction<IScrollState>>;
  componentInView: IScrollState;
  setProjectOverlay?: Dispatch<SetStateAction<IProjectOverlayState>>;
}


export interface IButton {
  text: string;
  link: string;
  type: "one" | "two";
}


export interface IProjectOverlayState {
    show: boolean;
    problem: string[] | null;
    solution: string[] | null;
    result: string[]| null;
    technologies: string[]| null;
    learned: string[]| null;
    name: string| null;
    link: string| null;
    github: string| null;
    type: string| null;
}

export interface IProjectOverlay {
    showProjectOverlay: IProjectOverlayState
}

export interface ICarouselPositionState {

}