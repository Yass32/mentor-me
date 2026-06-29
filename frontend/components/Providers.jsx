'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const RoleContext = createContext({ role: 'mentee', setRole: () => {} });
export const useRole = () => useContext(RoleContext);

export default function Providers({ children }) {
  const [role, setRoleState] = useState('mentee');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mentorme_role');
      if (saved === 'mentor' || saved === 'mentee') setRoleState(saved);
    } catch {}
    setReady(true);
  }, []);

  const setRole = (r) => {
    setRoleState(r);
    try { localStorage.setItem('mentorme_role', r); } catch {}
  };

  return (
    <RoleContext.Provider value={{ role, setRole, ready }}>
      {children}
    </RoleContext.Provider>
  );
}
