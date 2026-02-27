import { ROUTES } from "@/app/routes/paths";

export interface DashboardNavItem {
  label: string;
  icon: string;
  path: string;
}

export const DASHBOARD_NAV_ITEMS: DashboardNavItem[] = [
  {
    label: "My Dashboard",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/s0J7hL3TJ0.png",
    path: ROUTES.dashboard,
  },
  {
    label: "Value Gifts",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Z82rsN47nT.png",
    path: ROUTES.valueGifts,
  },
  {
    label: "Module to EAR",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/TaGCB8kV9x.png",
    path: ROUTES.moduleToEar,
  },
  {
    label: "Connect to Coach",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/afAv9MExhT.png",
    path: ROUTES.connectToCoach,
  },
  {
    label: "Courses",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/GpaTEyHnhM.png",
    path: ROUTES.courses,
  },
  {
    label: "Progress",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/QyCwhMxfMR.png",
    path: ROUTES.progress,
  },
  {
    label: "Reports",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ZHsruG4Nw2.png",
    path: ROUTES.reports,
  },
];
