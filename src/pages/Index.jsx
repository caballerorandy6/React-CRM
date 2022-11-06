import { useLoaderData } from "react-router-dom";
import { getCustomers } from "../data/customers";
import Customer from "../components/Customer";

//Loading Customers
export function loader() {
  const customers = getCustomers();
  return customers;
}

function Index() {
  const customers = useLoaderData();
  //console.log(customers);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-6xl font-bold text-green-800 uppercase">
        Customers
      </h1>
      <p className="text-center mt-6 text-green-800">
        Manage your customers here
      </p>

      {customers?.length ? (
        <table className="w-11/12 bg-white shadow mt-10 table-auto">
          <thead className="bg-green-800 text-white">
            <tr>
              <th>Customers</th>
              <th>Contact</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <Customer customer={customer} key={customer.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-2xl font-bold text-green-800 uppercase">
          No customers yet.
        </p>
      )}
    </div>
  );
}

export default Index;
