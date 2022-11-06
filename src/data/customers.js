//Get Customers
export async function getCustomers() {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const result = await response.json();
  return result;
}

//Get Customer
export async function getCustomer(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const result = await response.json();
  return result;
}

//Add Customer
export async function addCustomer(data) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}

//Update
export async function updateCustomer(id, data) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCustomer(id) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}
