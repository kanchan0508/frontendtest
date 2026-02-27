export type ProfileFormState = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  gender: string;
  dateOfBirth: string;
  role: string;
  location: string;
};

export type ProfileChecklistItem = {
  done: boolean;
  label: string;
  progress: string;
};
