export type AuthMode = "login" | "signup";

export interface AuthenticationButtonProps {
  mode?: AuthMode;
  buttonText?: string;
  onLogin?: () => void;
  onSignup?: () => void;
}

export default function AuthenticationButton({
  mode = "login",
  buttonText,
  onLogin,
  onSignup,
}: AuthenticationButtonProps) {
  const label = buttonText ?? (mode === "login" ? "Login" : "Sign up");

  const handleClick = () => {
    if (mode === "signup") {
      onSignup?.();
    } else {
      onLogin?.();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-black text-white text-center py-2 rounded hover:bg-green-600 focus-visible:outline-green-600"
    >
      {label}
    </button>
  );
}
