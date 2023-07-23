import { toast } from "react-toastify";
import { AppContext } from "./AppContext";
import { useContext } from "react";

const ListNoti = (props) => {
  const list = props.list;
  const theme = useContext(AppContext);

  const handleClickHaveNoti = (x) => {
    switch (x.status) {
      case 1:
        toast.success(x.name);
        break;
      case 2:
        toast.dark(x.name);
        break;
      case 3:
        toast.warning(x.name);
        break;
      case 4:
        toast.error(x.name);
        break;

      default:
        break;
    }
  };
  return (
    <div
      className={"bg-" + theme.userData.bg + " text-" + theme.userData.color}
      style={{ cursor: "pointer" }}
    >
      {list.map((item, index) => {
        return (
          <li key={item.id} onClick={() => handleClickHaveNoti(item)}>
            {index}: {item.name} <i class="bx bx-child"></i>
          </li>
        );
      })}
    </div>
  );
};
export default ListNoti;
