import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-5 items-center">
        <Link className="font-extrabold text-2xl text-white" href="/">
          devstore
        </Link>
        <form className="bg-zinc-900 flex gap-3 items-center px-5 py-3 ring-bg-zinc-700 rounded-full w-[320px]">
          <Search className="h-5 text-zinc-700 w-5" />
          <input
            className="bg-transparent flex-1 outline-none placeholder:text-zinc-500 text-sm"
            type="text"
            placeholder="Buscar produto"
          />
        </form>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <ShoppingBag className="h-4 w-4" />
          <span className="text-sm">Cart(0)</span>
        </div>
        <div className="bg-zinc-700 h-4 w-px" />
        <Link href="/" className="flex gap-2 hover:underline items-center">
          <span className="text-sm">Account</span>
          <Image
            className="h-6 rounded-full w-6"
            src="https://www.github.com/emmanuelmarcosdeoliveira.png"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};
export default Header;
