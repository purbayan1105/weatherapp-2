import { Location } from "@/components/DisplayCard";
import { atom } from "jotai";

export const inputAtom = atom("");
export const nameAtom = atom("");
export const locationAtom = atom<Location>({ latitude: null, longitude: null });
export const weatherAtom = atom("");
