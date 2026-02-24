import { useState, useEffect } from "react";
import { accounts } from "./data.js";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import userContex from "./UserContext.jsx";

const Root = () => {
  const [loginData, setLoginData] = useState({
    pin: "",
    username: "",
  });
  const [account, setAccount] = useState("");

  const totalIncomes = account?.movements?.reduce(
    (sum, currentValue) => (currentValue > 0 ? sum + currentValue : sum),
    0,
  );
  const totalExpenses = account?.movements?.reduce(
    (sum, currentValue) => (currentValue < 0 ? sum + currentValue : sum),
    0,
  );
  const currentBalance = totalIncomes + totalExpenses;

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const foundAccount = accounts.find(
      (acc) =>
        acc.username === loginData.username &&
        acc.pin === Number(loginData.pin),
    );

    if (foundAccount) {
      setAccount(foundAccount);
      navigate("/transactions");
    } else {
      setAccount("");
      navigate("/");
    }
  };

  useEffect(() => {
    if (!account) navigate("/");
  }, []);

  return (
    <>
      <nav>
        <div>
          {account?.owner?.firstName ? (
            <p>Good Day, {account?.owner?.firstName}!</p>
          ) : (
            <p>Log in to get started</p>
          )}
        </div>
        <div>
          <img src="logo.png" alt="logo" />
        </div>
        <form className="form-box" onSubmit={handleSubmit}>
          <input
            type="text"
            name="text-inp"
            maxLength={3}
            value={loginData.username}
            onChange={(e) =>
              setLoginData((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
            placeholder="USER"
            required
          />
          <input
            type="number"
            name="number-inp"
            value={loginData.pin}
            onChange={(e) =>
              loginData.pin.length <= 4 &&
              setLoginData((prev) => ({
                ...prev,
                pin: e.target.value,
              }))
            }
            placeholder="PIN"
            required
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </form>
      </nav>
      <main>
        <userContex.Provider
          value={{
            account,
            currentBalance,
            totalIncomes,
            totalExpenses,
            reset: () => {
              setAccount("");
              setLoginData({ pin: "", username: "" });
            },
          }}
        >
          <Outlet />
        </userContex.Provider>
      </main>
    </>
  );
};

export default Root;
