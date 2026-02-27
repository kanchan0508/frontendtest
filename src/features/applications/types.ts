export type ApplicationStatus = "accepted" | "in_review" | "rejected";

export type ApplicationAction = {
  label: string;
};

export type ApplicationItem = {
  id: string;
  title: string;
  signedDate: string;
  status: ApplicationStatus;
  iconUrl: string;
  actions: ApplicationAction[];
};
