import {
  PROFILE_AVATAR_KEY,
  PROFILE_STORAGE_KEY,
  defaultProfileState,
} from "./constants";
import type { ProfileFormState } from "./types";

export function loadProfile(): ProfileFormState {
  const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
  if (!raw) {
    return defaultProfileState;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<ProfileFormState>;
    return { ...defaultProfileState, ...parsed };
  } catch {
    return defaultProfileState;
  }
}

export function saveProfile(profile: ProfileFormState): void {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

export function loadAvatar(): string | null {
  return localStorage.getItem(PROFILE_AVATAR_KEY);
}

export function saveAvatar(dataUrl: string): void {
  localStorage.setItem(PROFILE_AVATAR_KEY, dataUrl);
}
