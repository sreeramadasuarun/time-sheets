import React from "react";

const Employees = () => {
  return (
    <div className="mt-[5rem] relative">
      <div className="absolute inset-y-0 left-[18rem] w-[61rem] min-h-screen">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  User Email
                </th>
                <th scope="col" class="px-6 py-3">
                  User Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Tittle
                </th>
                <th scope="col" class="px-6 py-3">
                  Company
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
