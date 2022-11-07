import NewCustomerForm from "../components/NewCustomerForm";
import Error from "../components/Error";
import { Form, useNavigate, useActionData, redirect } from "react-router-dom";
import { addCustomer } from "../data/customers";

const timeout = setTimeout(() => {}, 3000);

export async function action({ request }) {
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
  await addCustomer(data);

  return redirect("/");
}

function NewCustomers() {
  const navigate = useNavigate();
  const errors = useActionData();

  return (
    <>
      <h1 className="text-center text-6xl font-bold text-green-800 uppercase">
        New Customer
      </h1>
      <p className="text-center mt-6 mb-10 text-green-800">
        Add a new customer here
      </p>
      <div className="flex justify-end">
        <button
          className="bg-green-800 px-3 py-1 uppercase text-white font-bold mr-10"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>

      <div className="bg-white shadow rounded-md w-9/12 sm:w-5/12 md:w-4/12 lg:w-3/12 mx-auto px-8 py-8 mt-10">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post" noValidate>
          <NewCustomerForm />
          <input
            type="submit"
            value="Register Customer"
            className="w-full bg-blue-800 hover:bg-blue-900 active:bg-blue-800 p-2 text-center text-white font-bold cursor-pointer transition-colors"
          />
        </Form>
      </div>
    </>
  );
}

export default NewCustomers;
