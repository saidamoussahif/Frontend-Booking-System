import React from "react";

function SideBar() {
  return (
    <div className="h-full fixed">
      <aside className="w-64 h-full" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-blue-50 rounded h-full dark:bg-indigo-800 flex flex-col justify-between">
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-blue-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-blue-900 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3 uppercase font-bold font-[Poppin]">
                  Admin panel
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-blue-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-blue-900 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
              </a>
            </li>
            <li>
              <a
                href="/DisplayUsers"
                className="flex items-center p-2 text-base font-normal text-blue-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-blue-900 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-blue-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-blue-900 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Travels</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-blue-900 rounded-lg transition duration-75 hover:bg-blue-100 dark:hover:bg-blue-700 dark:text-white group"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-blue-900 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
                <span className="ml-3">Components</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-blue-200 dark:border-blue-700">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-blue-900 rounded-lg transition duration-75 hover:bg-blue-100 dark:hover:bg-blue-700 dark:text-white group"
              >
                <span className="flex-shrink-0 text-2xl w-6 h-6 text-blue-900 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white">
                  <ion-icon name="log-out"></ion-icon>
                </span>
                <span className="ml-3">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
