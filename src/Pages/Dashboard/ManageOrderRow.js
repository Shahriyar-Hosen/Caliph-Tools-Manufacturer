import React from 'react';
import { Link } from 'react-router-dom';

const ManageOrderRow = ({order, index}) => {
    const { toolsName, orderQuantity, price, status, paid } = order;

  return (
    <tr>
      <th>{index + 1}</th>
      <td title={toolsName}>
        {toolsName.length > 20 ? toolsName.slice(0, 20) + "..." : toolsName}
      </td>
      <td>{orderQuantity}</td>
      <td>${price}</td>
      <td className="text-green-500">
        {paid ? (
          status
        ) : (
          <Link
            to="/payment"
            className="btn btn-xs btn-info bg-green-500 border-0 text-white"
          >
            Pay
          </Link>
        )}
      </td>
      <td>
        {!paid ? (
          <button className="btn btn-xs btn-warning hover:text-black bg-red-400 border-0 text-white">
            Delete
          </button>
        ) : (
          <span>Transaction Id</span>
        )}
      </td>
    </tr>
    );
};

export default ManageOrderRow;