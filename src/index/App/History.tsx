import React from 'react';

export default function History() {
  return (
    <table>
      <thead>
        <tr>
          <th>Source</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Term</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="flex items-center">
              <div>
                <div class="text-sm leading-5 font-medium text-gray-900">
                  70.80.151.11
                </div>
                <div class="text-sm leading-5 text-gray-500">Local PC</div>
              </div>
            </div>
          </td>
          <td>
            <div class="text-sm leading-5 text-gray-900">182.198.89.114</div>
            <div class="text-sm leading-5 text-gray-500">u-Ready Web</div>
          </td>
          <td>
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Permit
            </span>
          </td>
          <td className="text-sm leading-5 text-gray-500">~2021/03/12</td>
          <td class="px-6 py-4 whitespace-no-wrap text-left border-b border-gray-200 text-sm leading-5 font-medium">
            <a
              href="#"
              class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
            >
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
