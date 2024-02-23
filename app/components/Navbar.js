import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link href="/">
        <span className="cursor-pointer text-xl font-bold">Atlas</span>
      </Link>
      <div>
        <Link href="/about">
          <span className="cursor-pointer ml-4">About</span>
        </Link>
        <Link href="/chat">
          <span className="cursor-pointer ml-4">Chatbot</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
