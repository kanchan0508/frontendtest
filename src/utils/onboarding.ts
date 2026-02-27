const PROFILE_STEP_ONE_COMPLETED_KEY = "ampl.profile.stepOneCompleted";
const PROFILE_STEP_TWO_COMPLETED_KEY = "ampl.profile.stepTwoCompleted";
const PROFILE_INCOMPLETE_KEY = "ampl.profile.incomplete";

export function hasCompletedProfileStepOne(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return localStorage.getItem(PROFILE_STEP_ONE_COMPLETED_KEY) === "true";
}

export function setProfileStepOneCompleted(value: boolean): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(PROFILE_STEP_ONE_COMPLETED_KEY, String(value));
}

export function hasCompletedProfileStepTwo(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return localStorage.getItem(PROFILE_STEP_TWO_COMPLETED_KEY) === "true";
}

export function setProfileStepTwoCompleted(value: boolean): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(PROFILE_STEP_TWO_COMPLETED_KEY, String(value));
}

export function getNextOnboardingRoute(): string {
  if (!hasCompletedProfileStepOne()) {
    return "/dashboard/create-profile";
  }

  if (!hasCompletedProfileStepTwo()) {
    return "/dashboard/create-profile/feeling";
  }

  return "/dashboard";
}

export function hasIncompleteProfile(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return localStorage.getItem(PROFILE_INCOMPLETE_KEY) === "true";
}

export function setIncompleteProfile(value: boolean): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(PROFILE_INCOMPLETE_KEY, String(value));
}
