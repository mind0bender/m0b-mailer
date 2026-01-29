import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center gap-8 px-12 py-8 border-t border-t-zinc-400 dark:border-t-zinc-800">
      <span></span>
      <span>
        Built by{" "}
        <Link href={"https://github.com/mind0bender/"}>Yash Gupta</Link>
      </span>
      <span>Bye!</span>
    </footer>
  );
}
