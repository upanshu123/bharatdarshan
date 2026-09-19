export const POLICY_VERSION = '2026-05-01-v1';
export const PRIVACY_KEY = 'bharatdarshan_privacy_version';

let memoryAcceptedVersion = null;

const canUseStorage = () => {
  try {
    return typeof window !== 'undefined' && !!window.localStorage;
  } catch {
    return false;
  }
};

export const hasAcceptedCurrentPrivacy = () => {
  try {
    if (canUseStorage()) {
      return window.localStorage.getItem(PRIVACY_KEY) === POLICY_VERSION;
    }

    // Fallback if storage is blocked/unavailable in the current environment.
    return memoryAcceptedVersion === POLICY_VERSION;
  } catch {
    return memoryAcceptedVersion === POLICY_VERSION;
  }
};

export const savePrivacyAcceptance = () => {
  memoryAcceptedVersion = POLICY_VERSION;

  try {
    if (canUseStorage()) {
      window.localStorage.setItem(PRIVACY_KEY, POLICY_VERSION);
      return true;
    }
  } catch {
    // Keep memory fallback only.
  }

  return false;
};

