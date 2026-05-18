import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Lock, Download, RefreshCw, Users, Trash2 } from 'lucide-react';

const ADMIN_PASSWORD = 'Xpred1234!@';

interface WaitlistEntry {
  id: string;
  email: string;
  created_at: string;
}

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      fetchEntries();
    } else {
      setError('Incorrect password');
    }
  };

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const { data, error, count } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEntries(data || []);
      setTotalCount(count || 0);
    } catch (err) {
      console.error('Error fetching entries:', err);
    } finally {
      setLoading(false);
    }
  };

  const exportCSV = () => {
    if (entries.length === 0) return;

    const headers = ['Email', 'Signed Up At'];
    const rows = entries.map((entry) => [
      entry.email,
      new Date(entry.created_at).toLocaleString(),
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `xpred-waitlist-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const deleteEntry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this entry?')) return;
    try {
      const { error } = await supabase.from('waitlist').delete().eq('id', id);
      if (error) throw error;
      setEntries(entries.filter((e) => e.id !== id));
      setTotalCount((prev) => prev - 1);
    } catch (err) {
      console.error('Error deleting entry:', err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#030303] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8">
            <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock size={24} className="text-brand-gold" />
            </div>
            <h1 className="text-2xl font-bold text-white text-center mb-2 font-display">Admin Panel</h1>
            <p className="text-gray-500 text-sm text-center mb-8">Enter password to access waitlist data</p>

            <form onSubmit={handleLogin}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-brand-gold/50 transition-colors mb-4"
              />
              {error && <p className="text-red-400 text-xs mb-4">{error}</p>}
              <button
                type="submit"
                className="w-full bg-brand-gold text-black font-bold py-3 rounded-xl hover:scale-105 transition-transform"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030303] pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-display">Waitlist Admin</h1>
            <p className="text-gray-500 mt-1">Manage your waitlist signups</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchEntries}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-medium hover:bg-white/10 transition-colors disabled:opacity-50"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
            <button
              onClick={exportCSV}
              disabled={entries.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-brand-gold text-black rounded-xl text-sm font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
            >
              <Download size={16} />
              Export CSV
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users size={20} className="text-brand-gold" />
              <span className="text-gray-400 text-sm">Total Signups</span>
            </div>
            <p className="text-3xl font-bold text-white">{totalCount}</p>
          </div>
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users size={20} className="text-green-400" />
              <span className="text-gray-400 text-sm">Today</span>
            </div>
            <p className="text-3xl font-bold text-white">
              {entries.filter((e) => {
                const today = new Date().toDateString();
                return new Date(e.created_at).toDateString() === today;
              }).length}
            </p>
          </div>
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users size={20} className="text-blue-400" />
              <span className="text-gray-400 text-sm">This Week</span>
            </div>
            <p className="text-3xl font-bold text-white">
              {entries.filter((e) => {
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return new Date(e.created_at) >= weekAgo;
              }).length}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-xs font-bold text-gray-500 uppercase">
            <div className="col-span-1">#</div>
            <div className="col-span-6">Email</div>
            <div className="col-span-3">Signed Up</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {loading ? (
            <div className="p-12 text-center text-gray-500">Loading...</div>
          ) : entries.length === 0 ? (
            <div className="p-12 text-center text-gray-500">No signups yet</div>
          ) : (
            entries.map((entry, index) => (
              <div
                key={entry.id}
                className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors"
              >
                <div className="col-span-1 text-gray-500 text-sm">{index + 1}</div>
                <div className="col-span-6 text-white text-sm font-medium truncate">{entry.email}</div>
                <div className="col-span-3 text-gray-400 text-sm">
                  {new Date(entry.created_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
                <div className="col-span-2 text-right">
                  <button
                    onClick={() => deleteEntry(entry.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors p-1"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Logout */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-500 hover:text-white text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
