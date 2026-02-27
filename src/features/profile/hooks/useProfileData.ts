import React from "react";
import { loadAvatar, loadProfile, saveAvatar, saveProfile } from "../storage";
import type { ProfileFormState } from "../types";

export function useProfileData() {
  const [form, setForm] = React.useState<ProfileFormState>(loadProfile);
  const [avatarPreview, setAvatarPreview] = React.useState<string | null>(loadAvatar);
  const [uploadError, setUploadError] = React.useState("");

  const setField = React.useCallback(
    (field: keyof ProfileFormState, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const persist = React.useCallback(() => {
    saveProfile(form);
  }, [form]);

  const handleUpload = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }

      const isSupportedType = ["image/jpeg", "image/png", "image/gif"].includes(file.type);
      const isValidSize = file.size <= 2 * 1024 * 1024;

      if (!isSupportedType || !isValidSize) {
        setUploadError("Please upload JPG, PNG, or GIF under 2MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const result = typeof reader.result === "string" ? reader.result : "";
        if (!result) {
          setUploadError("Unable to read image. Please try another file.");
          return;
        }

        setAvatarPreview(result);
        saveAvatar(result);
        setUploadError("");
      };
      reader.onerror = () => {
        setUploadError("Unable to read image. Please try another file.");
      };
      reader.readAsDataURL(file);
    },
    []
  );

  const avatarInitial = form.fullName.trim().charAt(0).toUpperCase() || "S";

  return {
    form,
    setField,
    persist,
    avatarPreview,
    avatarInitial,
    uploadError,
    handleUpload,
  };
}
