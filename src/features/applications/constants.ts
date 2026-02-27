import type { ApplicationItem, ApplicationStatus } from "./types";

export const applicationStatusConfig: Record<
  ApplicationStatus,
  { label: string; className: string }
> = {
  accepted: {
    label: "Application Accepted",
    className:
      "border-[#008000] bg-[#d9f8e6] text-[#008000]",
  },
  in_review: {
    label: "Review in Process",
    className:
      "border-[#ffa500] bg-[#fffbe7] text-[#ffa500]",
  },
  rejected: {
    label: "Application Rejected",
    className:
      "border-[#ea4f4f] bg-[#f3cfd3] text-[#ea4f4f]",
  },
};

export const mockApplications: ApplicationItem[] = [
  {
    id: "app-1",
    title: "Apply For a Coach",
    signedDate: "Jan 2, 2026",
    status: "accepted",
    iconUrl:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/sjBddNqX7Z.png",
    actions: [{ label: "View Application" }, { label: "Check and Sign Contract" }],
  },
  {
    id: "app-2",
    title: "Apply For a Coach",
    signedDate: "Jan 2, 2026",
    status: "in_review",
    iconUrl:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/C8dAYkCS2w.png",
    actions: [{ label: "View Application" }, { label: "Download Application" }],
  },
  {
    id: "app-3",
    title: "Apply For a Coach",
    signedDate: "Jan 2, 2026",
    status: "rejected",
    iconUrl:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/4jccOjjDOD.png",
    actions: [{ label: "View Application" }],
  },
  {
    id: "app-4",
    title: "Apply For Group Program",
    signedDate: "Jan 5, 2026",
    status: "accepted",
    iconUrl:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/sjBddNqX7Z.png",
    actions: [{ label: "View Application" }, { label: "View Contract" }],
  },
  {
    id: "app-5",
    title: "Apply For Wellness Plan",
    signedDate: "Jan 10, 2026",
    status: "in_review",
    iconUrl:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/C8dAYkCS2w.png",
    actions: [{ label: "View Application" }, { label: "Download Application" }],
  },
  {
    id: "app-6",
    title: "Apply For Mentorship",
    signedDate: "Jan 14, 2026",
    status: "rejected",
    iconUrl:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/4jccOjjDOD.png",
    actions: [{ label: "View Application" }],
  },
];
