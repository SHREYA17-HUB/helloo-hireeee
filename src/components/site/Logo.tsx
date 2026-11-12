import { Link } from "@tanstack/react-router";
import logo from "@/assets/hellohire-logo.png.asset.json";

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <Link to="/" aria-label="HelloHire home" className="shrink-0">
      <img src={logo.url} alt="HelloHire" width={461} height={145} className={`${className} w-auto -my-2`} />
    </Link>
  );
}
