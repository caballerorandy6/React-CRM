import { useNavigate, Form, redirect } from "react-router-dom";
import { deleteCustomer } from "../data/customers";

export async function action({ params }) {
  deleteCustomer(params.customerId);
  //console.log(params);
  return redirect("/");
}

function Customer({ customer }) {
  const navigate = useNavigate();

  const { id, name, username, email, phone, website } = customer;

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2 text-center">
        <p>{name}</p>
        <p>{username}</p>
      </td>

      <td className="p-6 space-y-2 text-center">
        <p>{phone}</p>
        <p>{email}</p>
      </td>

      <td className="p-6 space-y-2 text-center">
        <p>{website}</p>
      </td>

      <td className="flex flex-col sm:flex-row justify-around mt-12">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={() => navigate(`/customer/${id}/edit`)}
        >
          Edit
        </button>

        <Form
          method="post"
          action={`/customers/${id}/delete`}
          onSubmit={(e) => {
            if (!confirm("Do you want to remove this customer?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
}

export default Customer;
