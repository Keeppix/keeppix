export default function Login() {
  return (
    <div className="login-container min-h-[calc(100dvh-var(--navbar-h))] bg-gray-100">
      <h1>Login</h1>

      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
