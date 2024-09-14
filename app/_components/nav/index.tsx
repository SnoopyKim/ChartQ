export default function Nav() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-transparent z-20">
      <div className="flex space-x-8">
        <div className="text-2xl font-bold text-white">ChartQ</div>
        <a href="#" className="hover:text-gray-300">
          Product
        </a>
        <a href="#" className=" hover:text-gray-300">
          Blog
        </a>
        <a href="#" className=" hover:text-gray-300">
          Price
        </a>
      </div>
      <div>
        <a
          href="#"
          className="text-secondary bg-primary-dark px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Login
        </a>
      </div>
    </nav>
  );
}
