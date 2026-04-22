import { User } from '../types/user';

const USER_KEY = 'lendsqr_selected_user';
const ALL_USERS_KEY = 'lendsqr_all_users';

export const storage = {
  saveAllUsers: (users: User[]) => {
    localStorage.setItem(ALL_USERS_KEY, JSON.stringify(users));
  },

  getAllUsers: (): User[] | null => {
    const data = localStorage.getItem(ALL_USERS_KEY);
    return data ? JSON.parse(data) : null;
  },

  saveSelectedUser: (user: User) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  getSelectedUser: (): User | null => {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  },

  // NEW: Update a specific user within the master 500-record list
  updateUserInMasterList: (userId: string, newStatus: User['status']) => {
    const allUsers = storage.getAllUsers();
    if (allUsers) {
      const updatedList = allUsers.map(u => 
        u.id === userId ? { ...u, status: newStatus } : u
      );
      storage.saveAllUsers(updatedList);
    }
  }
};