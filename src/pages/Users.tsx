import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { StatsCard } from '@/components/stats';
import { Filters } from '@/components/table';
import { DataTable } from '@/components/table';
import { Pagination } from '@/components/common';
import { User } from '@/types';
import { getUsers } from '@/services/api';
import {
  Users,
  UserCheck,
  FileText,
  PiggyBank,
} from 'lucide-react';

const PAGE_SIZE = 25;

export const Users: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Filters state
  const [filters, setFilters] = useState({
    organization: '',
    username: '',
    email: '',
    date: '',
    phone: '',
    status: '',
  });

  // Fetch all 500 users once
  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  // Client-side filtering
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      return (
        (!filters.organization || user.orgName === filters.organization) &&
        (!filters.username || user.userName.toLowerCase().includes(filters.username.toLowerCase())) &&
        (!filters.email || user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (!filters.phone || user.phoneNumber.includes(filters.phone)) &&
        (!filters.date || user.dateJoined.startsWith(filters.date)) &&
        (!filters.status || user.status.toLowerCase() === filters.status.toLowerCase())
      );
    });
  }, [users, filters]);

  // Pagination
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredUsers.slice(start, start + PAGE_SIZE);
  }, [filteredUsers, currentPage]);

  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);

  const handleViewDetails = (user: User) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    navigate(`/users/${user.id}`);
  };

  const handleReset = () => {
    setFilters({
      organization: '',
      username: '',
      email: '',
      date: '',
      phone: '',
      status: '',
    });
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <Layout>
        <div style={{ padding: '40px', textAlign: 'center' }}>Loading users...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ padding: '32px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#213F7D', marginBottom: '0 0 40px' }}>
          Users
        </h1>

        {/* 4 Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48 }}>
          <StatsCard icon={<Users size={28} color="white" />} label="Users" value={2453} bgColor="#DFDFFF" iconColor="#7F7CFF" />
          <StatsCard icon={<UserCheck size={28} color="white" />} label="Active Users" value={2453} bgColor="#D7FFFE" iconColor="#39CDCC" />
          <StatsCard icon={<FileText size={28} color="white" />} label="Users with Loans" value={12453} bgColor="#FDF3F8" iconColor="#E7338A" />
          <StatsCard icon={<PiggyBank size={28} color="white" />} label="Users with Savings" value={102453} bgColor="#FFF4E5" iconColor="#FF8C38" />
        </div>

        {/* Filters */}
        <Filters
          filters={filters}
          onChange={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))}
          onReset={handleReset}
          onApply={() => setCurrentPage(1)}
        />

        {/* Table */}
        <DataTable data={paginatedUsers} onViewDetails={handleViewDetails} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalItems={filteredUsers.length}
          itemsPerPage={PAGE_SIZE}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  );
};