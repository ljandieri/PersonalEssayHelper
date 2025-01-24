import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

export function AppLayout() {
  return (
    <div className="flex p-12">
      <Sidebar />
      <Outlet />
    </div>
  );
}
