export const ROUTES = {
  root: "/",
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard",
  valueGifts: "/dashboard/value-gifts",
  moduleToEar: "/dashboard/module-to-ear",
  connectToCoach: "/dashboard/connect-to-coach",
  courses: "/dashboard/courses",
  progress: "/dashboard/progress",
  reports: "/dashboard/reports",
  createProfile: "/dashboard/create-profile",
  createProfileFeeling: "/dashboard/create-profile/feeling",
  deepBreathing: "/dashboard/deep-breathing",
  chakraMeditation: "/dashboard/chakra-meditation",
  profile: "/dashboard/profile",
  profileEdit: "/dashboard/profile/edit",
  profileCompleted: "/dashboard/profile/completed",
  profilePlan: "/dashboard/profile/plan",
  applications: "/dashboard/applications",
  applicationDetails: "/dashboard/applications/:applicationId",
  applicationContract: "/dashboard/applications/:applicationId/contract",
} as const;

export function getApplicationDetailsRoute(applicationId: string): string {
  return `${ROUTES.applications}/${applicationId}`;
}

export function getApplicationContractRoute(applicationId: string): string {
  return `${getApplicationDetailsRoute(applicationId)}/contract`;
}
