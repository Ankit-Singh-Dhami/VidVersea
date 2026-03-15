const Features = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl/tight font-bold text-black-700 sm:text-4xl dark:text-white">
          Features for Vidversea
        </h2>

        <p className="mt-4 text-lg text-pretty text-gray-700 dark:text-gray-200">
          Create professional AI videos in seconds — just choose a topic,
          duration, and style.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Feature 1 */}
          <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-6">
            <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-violet-600">
                Create Videos with a Prompt
              </h3>
              <p className="mt-2 text-pretty text-gray-700">
                Just enter a topic, choose the duration and style — Vidversea
                generates a complete video for you.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-6">
            <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-violet-600">
                AI Script & Visuals
              </h3>
              <p className="mt-2 text-pretty text-gray-700">
                AI automatically writes the script, selects visuals, and
                structures scenes.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-6">
            <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-violet-600">
                No Editing Skills Needed
              </h3>
              <p className="mt-2 text-pretty text-gray-700">
                No timelines, no software, no learning curve. Create videos in
                minutes.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-6">
            <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-violet-600">
                Ready to Share
              </h3>
              <p className="mt-2 text-pretty text-gray-700">
                Download or publish instantly in formats optimized for all
                platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
