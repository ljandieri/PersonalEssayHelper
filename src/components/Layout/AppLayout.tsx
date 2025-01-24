import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

export function AppLayout() {
  return (
    <div className="flex w-full p-[70px]">
      <Sidebar />
      <Outlet />
    </div>
  );
}
