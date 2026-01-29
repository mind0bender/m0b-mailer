import { Code2, Send } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-zinc-50 dark:bg-black sticky top-0 border-b border-b-zinc-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href={"/"}
          className="font-bold flex gap-2 justify-center items-center"
        >
          <div className="bg-violet-400 rounded-md w-8 h-8 aspect-square flex justify-center items-center text-black">
            <Send size={20} />
          </div>
          <div className="flex flex-col">
            m0b-mailer
            <span className="text-xs font-light text-zinc-700 dark:text-zinc-300">
              Reliable email delivery with DLQ support
            </span>
          </div>
        </Link>
        <Link
          className="hover:bg-orange-500 hover:dark:bg-orange-400 rounded-full p-2 hover:text-white hover:dark:text-black duration-200"
          href={"https://github.com/mind0bender/m0b-mailer.git"}
          title="View on GitHub"
        >
          <Code2 size={16} />
        </Link>
      </div>
    </nav>
  );
}
