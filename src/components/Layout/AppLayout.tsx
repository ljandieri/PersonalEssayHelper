import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';

export function AppLayout() {
  return (
    <div className="flex h-screen w-full flex-col p-[70px]">
      <TopBar />
      <div className="flex grow">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
