import { getCustomer, updateCustomer } from "../data/customers";
import NewCustomerForm from "../components/NewCustomerForm";
import {
  Form,
  useNavigate,
  useLoaderData,
  useActionData,
  redirect,
} from "react-router-dom";
import Error from "../components/Error";

//Loading the client to be edited
export async function loader({ params }) {
  console.log(params);
  const customer = await getCustomer(params.customerId);

  //Validation by creating our own error message
  if (Object.values(customer).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Customer not found",
    });
  }

  console.log(customer);
  return customer;
}

export async function action({ request, params }) {
  const formData = await request.formData();

  //Data from form
  const data = Object.fromEntries(formData);
  //console.log(data);

  //Validation
  const errors = [];
  if (Object.values(data).includes("")) {
    errors.push("All fields are required!");
  }

  //console.log(errors);

  const email = formData.get("email");

  //Email Validation
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errors.push("Invalid Email!");
  }

  //Returning errors if they exist
  if (Object.keys(errors).length) {
    return errors;
  }

  //Add Customers
  await updateCustomer(params.customerId, data);

  return redirect("/");
}

function EditCustomer() {
  const navigate = useNavigate();
  const customer = useLoaderData();
  const errors = useActionData();

  return (
    <>
      <h1 className="text-center text-6xl font-bold text-green-800 uppercase">
        Edit Customer
      </h1>
      <p className="text-center mt-6 mb-10 text-green-800">
        You can then change the data of a customer
      </p>
      <div className="flex justify-end">
        <button
          className="bg-green-800 px-3 py-1 uppercase text-white font-bold mr-10"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>

      <div className="bg-white shadow rounded-md w-2/5 mx-auto px-8 py-8 mt-10">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post" noValidate>
          <NewCustomerForm customer={customer} />
          <input
            type="submit"
            value="Save Changes"
            className="w-full bg-blue-800 hover:bg-blue-900 active:bg-blue-800 p-2 text-center text-white font-bold cursor-pointer transition-colors"
          />
        </Form>
      </div>
    </>
  );
}

export default EditCustomer;
