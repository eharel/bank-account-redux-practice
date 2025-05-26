import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, loanPayback, loanRequest, withdraw } from "./state/actions";
import { payLoan, requestLoan } from "./state/accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const account = useSelector((store) => store.account);

  function handleDeposit() {
    if (depositAmount <= 0) {
      alert("Deposit amount must be greater than zero.");
      return;
    }

    dispatch(deposit(Number(depositAmount), currency));
    // alert(`Deposited ${depositAmount} ${currency}`);
    setDepositAmount("");
    setCurrency("USD");
  }

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Handle withdrawal button click event.
   *
   * If withdrawal amount is <= 0, alert user to enter a positive amount.
   * If withdrawal amount is > current balance, alert user that there are insufficient funds.
   * Otherwise, dispatch withdrawal action and reset withdrawal amount to empty string.
   */
  /*******  56c44b5a-ee2d-41b1-80b8-d4fd88053705  *******/
  function handleWithdrawal() {
    if (withdrawalAmount <= 0) {
      alert("Withdrawal amount must be greater than zero.");
      return;
    }
    if (withdrawalAmount > account.balance) {
      alert("Insufficient funds for withdrawal.");
      return;
    }
    // Dispatch withdrawal action here (not implemented in this example)
    dispatch(withdraw(Number(withdrawalAmount)));
    // alert(`Withdrew ${withdrawalAmount} ${currency}`);
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (loanAmount <= 0) {
      alert("Loan amount must be greater than zero.");
      return;
    }
    if (loanPurpose.trim() === "") {
      alert("Please provide a purpose for the loan.");
      return;
    }
    dispatch(requestLoan(Number(loanAmount), loanPurpose));
    // alert(`Requested loan of ${loanAmount} ${currency} for ${loanPurpose}`);
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
    // alert(`Paid back loan of ${account.loan} ${currency}`);
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit} disabled={account.isLoading}>
            {account.isLoading ? "Converting..." : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {account.loan > 0 && (
          <div>
            <span>
              Pay back {account.loan} ({account.loanPurpose})
            </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
