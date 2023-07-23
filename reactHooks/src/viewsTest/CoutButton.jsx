import { toast } from "react-toastify";
import { useState } from "react";

const CoutButton = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount((count) => count + 1);
          toast.success("tang them " + count);
        }}
      >
        count is {count}
      </button>
    </div>
  );
};
export default CoutButton;
