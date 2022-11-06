const NewCustomerForm = ({ customer }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-800" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Customer Name"
          className="mt-2 border-gray-300 border-2 w-full p-2 focus:outline-none
           hover:border-gray-400 hover:bg-gray-50 rounded shadow-md transition-colors"
          defaultValue={customer?.name}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-800" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          className="mt-2 border-gray-300 border-2 w-full p-2 focus:outline-none
           hover:border-gray-400 hover:bg-gray-50 rounded shadow-md transition-colors"
          defaultValue={customer?.username}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-800" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="mt-2 border-gray-300 border-2 w-full p-2 focus:outline-none
           hover:border-gray-400 hover:bg-gray-50 rounded shadow-md transition-colors"
          defaultValue={customer?.phone}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-800" htmlFor="email">
          Email
        </label>
        <input
          id="username"
          type="email"
          name="email"
          placeholder="Email"
          className="mt-2 border-gray-300 border-2 w-full p-2 focus:outline-none
           hover:border-gray-400 hover:bg-gray-50 rounded shadow-md transition-colors"
          defaultValue={customer?.email}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-800" htmlFor="website">
          Website
        </label>
        <input
          id="website"
          type="text"
          name="website"
          placeholder="Website"
          className="mt-2 border-gray-300 border-2 w-full p-2 focus:outline-none
           hover:border-gray-400 hover:bg-gray-50 rounded shadow-md transition-colors"
          defaultValue={customer?.website}
        />
      </div>
    </div>
  );
};

export default NewCustomerForm;
