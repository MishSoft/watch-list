export default function WatchList() {
  return (
    <div>
      <div>
        <div>
          <h1>My Watch List</h1>
          <form action="/auth/signout" method="post">
            <button
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              type="submit"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
