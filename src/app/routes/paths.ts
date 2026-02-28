export const ROUTES = {
  root: "/",
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard",
  postPurchaseDashboard: "/dashboard/post-purchase",
  valueGifts: "/dashboard/value-gifts",
  moduleToEar: "/dashboard/module-to-ear",
  connectToCoach: "/dashboard/connect-to-coach",
  courses: "/dashboard/courses",
  courseDetails: "/dashboard/courses/:courseId",
  coursePaymentStepOne: "/dashboard/courses/:courseId/payment/review",
  coursePaymentStepTwo: "/dashboard/courses/:courseId/payment/schedule",
  coursePaymentStepThree: "/dashboard/courses/:courseId/payment/session",
  coursePaymentStepFour: "/dashboard/courses/:courseId/payment/checkout",
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

export function getCourseDetailsRoute(courseId: string): string {
  return `/dashboard/courses/${courseId}`;
}

export function getCoursePaymentStepOneRoute(courseId: string): string {
  return `/dashboard/courses/${courseId}/payment/review`;
}

export function getCoursePaymentStepTwoRoute(courseId: string): string {
  return `/dashboard/courses/${courseId}/payment/schedule`;
}

export function getCoursePaymentStepThreeRoute(courseId: string): string {
  return `/dashboard/courses/${courseId}/payment/session`;
}

export function getCoursePaymentStepFourRoute(courseId: string): string {
  return `/dashboard/courses/${courseId}/payment/checkout`;
}
