import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const InputText = () => {
  const [name, setName] = useState("se");
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    toast.success(name);
  }, []);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleClickThat = () => {
    toast.success(name);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <input type="text" value={name} onChange={handleInputChange} />
      <select value={selectedValue} onChange={handleChange}>
        <option value="1">thông báo thành công</option>
        <option value="2">thông báo đang cập nhật</option>
        <option value="3">thông báo cảnh cáo</option>
        <option value="4">thông báo lỗi</option>
      </select>
      <button onClick={handleClickThat}>click me</button>
    </>
  );
};

export default InputText;
