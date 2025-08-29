import Link from "next/link";

const Navbar = () => (
  <nav className="flex justify-between items-center px-4 py-6 bg-transparent mx-10">
    <div className="font-bold text-xl">
      <Link href="/">Merel Vandekerkhove</Link>
    </div>
    <div className="flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
