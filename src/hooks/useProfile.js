import { useState, useCallback } from "react";

export function useProfile() {
  const [profile, setProfile] = useState({
    ad: "Ali Həsənov",
    email: "ali@example.com",
  });

  const updateProfile = useCallback((newProfile) => {
    setProfile(newProfile);
  }, []);

  return { profile, updateProfile };
}