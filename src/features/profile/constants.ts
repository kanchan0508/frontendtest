import type { ProfileChecklistItem, ProfileFormState } from "./types";

export const PROFILE_STORAGE_KEY = "ampl.profile.pageData";
export const PROFILE_AVATAR_KEY = "ampl.profile.avatarDataUrl";

export const defaultProfileState: ProfileFormState = {
  fullName: "Sally Bergson",
  phoneNumber: "+91 2930 2832 23",
  emailAddress: "emmasmith304@gamil.com",
  address: "701 Maggio Viaduct, Rancho Cucamonga 38131",
  gender: "Female",
  dateOfBirth: "01/09/2000",
  role: "Student",
  location: "New Delhi, India",
};

export const profileChecklistEdit: ProfileChecklistItem[] = [
  { done: true, label: "Account Setup", progress: "20%" },
  { done: true, label: "Account Setup", progress: "20%" },
  { done: true, label: "Account Setup", progress: "20%" },
  { done: true, label: "Account Setup", progress: "20%" },
  { done: true, label: "Account Setup", progress: "20%" },
];

export const profileChecklistInitial: ProfileChecklistItem[] = [
  { done: true, label: "Account Setup", progress: "20%" },
  { done: false, label: "Account Setup", progress: "20%" },
  { done: false, label: "Account Setup", progress: "20%" },
  { done: false, label: "Account Setup", progress: "20%" },
  { done: false, label: "Account Setup", progress: "20%" },
];
