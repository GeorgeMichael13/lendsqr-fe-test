import { User } from '../types/user';

const USER_KEY = 'lendsqr_selected_user';
const ALL_USERS_KEY = 'lendsqr_all_users';

export const storage = {
  // Save the 500 users locally after the first fetch
  saveAllUsers: (users: User[]) => {
    localStorage.setItem(ALL_USERS_KEY, JSON.stringify(users));
  },

  getAllUsers: (): User[] | null => {
    const data = localStorage.getItem(ALL_USERS_KEY);
    return data ? JSON.parse(data) : null;
  },

  // Save specific user for the Details Page
  saveSelectedUser: (user: User) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  getSelectedUser: (): User | null => {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  }
};