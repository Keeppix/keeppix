import AuthenticationButton from "../components/AuthenticationButton";
import NavigationButton from "../components/NavigationButton";

export default function Signup() {
  return (
    <div className="signup-container min-h-[calc(100dvh-var(--navbar-h))] flex flex-col items-center pt-30 px-4">
      <h1 className="text-3xl uppercase font-bold mb-4 self-start">Sign Up</h1>

      <form className="signup-form w-full flex flex-col gap-8 bg-white p-8 rounded border border-gray-300 shadow-[2px_4px_6px_rgba(0,0,0,0.1)]">
        <label className="flex flex-col gap-2">
          Username:
          <input
            type="text"
            name="username"
            className="border border-gray-300 rounded py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="flex flex-col gap-2">
          Password:
          <input
            type="password"
            name="password"
            className="border border-gray-300 rounded py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <div className="buttons flex flex-col gap-4">
          <AuthenticationButton
            mode="signup"
            onSignup={() => {
              console.log("Sign up clicked");
            }}
            buttonText="Sign Up"
          />

          <NavigationButton
            link="/login"
            buttonText="Login"
            className="bg-gray-500 text-white text-center py-2 rounded hover:bg-gray-600"
          />
        </div>
      </form>
    </div>
  );
}
