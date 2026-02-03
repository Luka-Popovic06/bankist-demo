const Transactions = ({ reset }) => {
  return (
    <>
      <div className="main-container" type={"button"}>
        <div>
          <p className="p">Current balance</p>
          <p className="current-balance">11,234$</p>
        </div>
        <div className="main-box">
          <div>
            <p className="p">IN</p>
            <p className="incomes">1,345$</p>
          </div>
          <div>
            <p className="p">OUT</p>
            <p className="expenses">5,788$</p>
          </div>
        </div>
      </div>
      <button className="btn-logout" onClick={reset}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
        <p>Logout</p>
      </button>
    </>
  );
};
export default Transactions;
