import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group transition-colors duration-300">
      <h1 className="font-headline text-2xl font-bold">
        <span className="text-primary group-hover:text-foreground/80 transition-colors duration-300">M</span>
        <span className="text-foreground group-hover:text-primary transition-colors duration-300">uiz's </span>
        <span className="text-primary group-hover:text-foreground/80 transition-colors duration-300">C</span>
        <span className="text-foreground group-hover:text-primary transition-colors duration-300">odex</span>
      </h1>
    </Link>
  );
}
