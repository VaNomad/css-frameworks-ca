export function save() {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load() {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return null
  }
}

export function remove() {
  localStorage.removeItem(key);
}

export function userProfile(profile) {
  try {
    const profileData = localStorage.getItem(profile);
    return JSON.parse(profileData);
  } catch (error) {
    return null
  }
}