import { Link } from "react-router";

export type NavigationButtonProps = {
  link: string;
  buttonText: string;
  className?: string;
};

export default function NavigationButton({
  link,
  buttonText,
  className,
}: NavigationButtonProps) {
  return (
    <Link to={link} className={className}>
      {buttonText}
    </Link>
  );
}
