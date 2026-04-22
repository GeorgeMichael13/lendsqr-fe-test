import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { User } from '../types/user';
import { storage } from '../utils/localStorage';

const API_URL = 'https://lendsqr-api-test.free.beeceptor.com/users'; 

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    try {
      const localData = storage.getAllUsers();
      
      if (Array.isArray(localData) && localData.length > 0) {
        setUsers(localData);
      } else {
        // Axios implementation
        const response = await axios.get(API_URL);
        const fetchedUsers = response.data;

        if (Array.isArray(fetchedUsers)) {
          storage.saveAllUsers(fetchedUsers);
          setUsers(fetchedUsers);
          setError(null);
        } else {
          throw new Error("Invalid data format received from API");
        }
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError('Failed to fetch users. Please check your API connection.');
      setUsers([]); 
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const updateUserStatus = (userId: string, newStatus: User['status']) => {
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUsers);
    storage.updateUserInMasterList(userId, newStatus);
    
    const targetUser = updatedUsers.find(u => u.id === userId);
    if (targetUser) storage.saveSelectedUser(targetUser);
  };

  const getUserById = (id: string | undefined) => {
    return Array.isArray(users) ? users.find(u => u.id === id) : undefined;
  };

  return { users, loading, error, updateUserStatus, getUserById };
};