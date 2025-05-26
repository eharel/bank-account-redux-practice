import { useSelector } from "react-redux";

function Customer() {
  const customerName = useSelector((store) => store.customer.fullName);

  const name = customerName || "Guest";

  return <h2>👋 Welcome, {name}</h2>;
}

export default Customer;
