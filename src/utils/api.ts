export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  return phoneRegex.test(phone);
};

export const validateName = (name: string): boolean => {
  return name.length >= 2 && /^[a-zA-Z\s-']+$/.test(name);
};

export const validateDate = (date: string): boolean => {
  const selectedDate = new Date(date);
  const today = new Date();
  return selectedDate >= today;
}; 