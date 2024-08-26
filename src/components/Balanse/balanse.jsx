import { useDispatch, useSelector } from "react-redux";
import { deposit, reset, withdram } from "../../redux/balanseStore";
import SeachLangt from "../Locale/Locale";
import { useState } from "react";

export default function Balanse() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const credit = useSelector((state) => state.balanse.value);
  const handelClick = () => {
    dispatch(deposit(value));
  };
  const handelWithdraw = () => {
    dispatch(withdram(value));
  };
  const handelReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <p>Balanse:{credit}</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={handelClick}>clic</button>
      <button onClick={handelWithdraw}>Clicl -</button>
      <button onClick={handelReset}>reset</button>
      <SeachLangt />
    </div>
  );
}
