import { MainNav } from './MainNav';

export function Sidebar() {
  return (
    <div className="w-[250px] place-self-center">
      <h1 className="mb-5 font-caudex text-[23px] text-primary">Essays with Tara</h1>
      <MainNav />
    </div>
  );
}
