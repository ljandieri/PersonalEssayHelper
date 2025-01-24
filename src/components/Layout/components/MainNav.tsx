import { Home, Apple, Pencil, ShoppingBag, CircleUserRound, CircleHelp } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col space-y-2">
        <li>
          <NavLink to="/dashboard" className="flex items-center">
            <Home strokeWidth="1" className="mr-3" />
            <span className="font-darkerGrotesque text-[20px]">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-courses" className="flex items-center">
            <Apple strokeWidth="1" className="mr-3" />
            <span className="font-darkerGrotesque text-[20px]">My Courses</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tools" className="flex items-center">
            <Pencil strokeWidth="1" className="mr-3" />
            <span className="font-darkerGrotesque text-[20px]">Tools</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="shop" className="flex items-center">
            <ShoppingBag strokeWidth="1" className="mr-3" />
            <span className="font-darkerGrotesque text-[20px]">Add Courses & Tools</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" className="flex items-center">
            <CircleUserRound strokeWidth="1" className="mr-3" />
            <span className="font-darkerGrotesque text-[20px]">Account</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" className="flex items-center">
            <CircleHelp strokeWidth="1" className="mr-3" />
            <span className="font-darkerGrotesque text-[20px]">Help</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
