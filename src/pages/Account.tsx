export default function Account() {
  const label = "block text-sm font-medium mb-1";
  const input =
    "block w-full min-h-11 rounded border border-gray-300 bg-white px-3 py-2 text-base text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white";
  const primary =
    "inline-flex min-h-11 w-full items-center justify-center rounded bg-black px-4 py-2 text-base text-white hover:bg-gray-700 sm:w-auto dark:bg-white dark:text-black dark:hover:bg-gray-300";
  const secondary =
    "inline-flex min-h-11 items-center justify-center rounded border border-gray-300 px-3 py-2 text-base hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800";
  const section =
    "space-y-4 rounded border border-gray-200 p-4 sm:p-6 dark:border-gray-700";
  const heading = "text-lg font-semibold";

  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">Account</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className={section}>
          <h2 className={heading}>Profile</h2>

          <div>
            <label htmlFor="username" className={label}>
              Username
            </label>
            <input id="username" type="text" className={input} />
          </div>
          <div>
            <label htmlFor="email" className={label}>
              Email
            </label>
            <input id="email" type="email" className={input} />
          </div>

          <button type="button" className={primary}>
            Save changes
          </button>
        </section>

        <section className={section}>
          <h2 className={heading}>Password</h2>

          <div>
            <label htmlFor="current-password" className={label}>
              Current password
            </label>
            <input id="current-password" type="password" className={input} />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="new-password" className={label}>
                New password
              </label>
              <input id="new-password" type="password" className={input} />
            </div>
            <div>
              <label htmlFor="confirm-password" className={label}>
                Confirm new password
              </label>
              <input id="confirm-password" type="password" className={input} />
            </div>
          </div>

          <button type="button" className={primary}>
            Change password
          </button>
        </section>

        <section className={section}>
          <h2 className={heading}>Appearance</h2>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-medium">Theme</span>
            <button type="button" className={`${secondary} w-full sm:w-auto`}>
              Light / Dark
            </button>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span id="text-size-label" className="text-sm font-medium">
              Text size
            </span>

            <div
              role="radiogroup"
              aria-labelledby="text-size-label"
              className="grid w-full grid-cols-3 overflow-hidden rounded border border-gray-300 sm:w-auto dark:border-gray-600"
            >
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="text-size"
                  value="small"
                  className="peer sr-only"
                />
                <span className="flex min-h-11 items-center justify-center px-5 text-sm hover:bg-gray-100 peer-checked:bg-black peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-inset peer-focus-visible:ring-black dark:hover:bg-gray-800 dark:peer-checked:bg-white dark:peer-checked:text-black dark:peer-focus-visible:ring-white">
                  Small
                </span>
              </label>
              <label className="cursor-pointer border-x border-gray-300 dark:border-gray-600">
                <input
                  type="radio"
                  name="text-size"
                  value="regular"
                  defaultChecked
                  className="peer sr-only"
                />
                <span className="flex min-h-11 items-center justify-center px-5 text-base hover:bg-gray-100 peer-checked:bg-black peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-inset peer-focus-visible:ring-black dark:hover:bg-gray-800 dark:peer-checked:bg-white dark:peer-checked:text-black dark:peer-focus-visible:ring-white">
                  Regular
                </span>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="text-size"
                  value="large"
                  className="peer sr-only"
                />
                <span className="flex min-h-11 items-center justify-center px-5 text-lg hover:bg-gray-100 peer-checked:bg-black peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-inset peer-focus-visible:ring-black dark:hover:bg-gray-800 dark:peer-checked:bg-white dark:peer-checked:text-black dark:peer-focus-visible:ring-white">
                  Large
                </span>
              </label>
            </div>
          </div>
        </section>

        <section className={section}>
          <h2 className={heading}>Session</h2>
          <button
            type="button"
            className="inline-flex min-h-11 w-full items-center justify-center rounded border-2 border-black px-4 py-2 text-base font-medium text-black hover:bg-black hover:text-white sm:w-auto dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Logout
          </button>
        </section>
      </div>
    </div>
  );
}
