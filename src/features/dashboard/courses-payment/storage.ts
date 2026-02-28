export type CourseLearningTrack =
  | "self-paced"
  | "standard-track"
  | "intensive-track";

export interface CourseSessionSelection {
  dateLabel: string;
  day: string;
  time: string;
}

function getTrackStorageKey(courseId: string): string {
  return `course-payment-track:${courseId}`;
}

function getSessionStorageKey(courseId: string): string {
  return `course-payment-session:${courseId}`;
}

export function getStoredLearningTrack(
  courseId: string,
): CourseLearningTrack | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(getTrackStorageKey(courseId));
  if (
    value === "self-paced" ||
    value === "standard-track" ||
    value === "intensive-track"
  ) {
    return value;
  }
  return null;
}

export function setStoredLearningTrack(
  courseId: string,
  track: CourseLearningTrack,
): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(getTrackStorageKey(courseId), track);
}

export function getStoredSessionSelection(
  courseId: string,
): CourseSessionSelection | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(getSessionStorageKey(courseId));
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<CourseSessionSelection>;
    if (
      typeof parsed.dateLabel === "string" &&
      typeof parsed.day === "string" &&
      typeof parsed.time === "string"
    ) {
      return {
        dateLabel: parsed.dateLabel,
        day: parsed.day,
        time: parsed.time,
      };
    }
  } catch {
    return null;
  }

  return null;
}

export function setStoredSessionSelection(
  courseId: string,
  selection: CourseSessionSelection,
): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(
    getSessionStorageKey(courseId),
    JSON.stringify(selection),
  );
}
