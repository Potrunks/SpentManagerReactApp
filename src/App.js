import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./components/form/CreateAccount";
import ModifySpent from "./components/form/ModifySpent";
import Navbar from "./components/UI/Navbar";
import "./style/navbar.css";
import "./style/form.css";
import "./style/popup.css";
import "./style/successPage.css";
import "./style/display.css";
import "./style/loading.css";
import LoginAccount from "./components/form/LoginAccount";
import Menu from "./components/UI/Menu";
import NewSpendingPeriod from "./components/form/NewSpendingPeriod";
import Success from "./components/page/Success";
import NewSpent from "./components/form/NewSpent";
import SpendingPeriodInProgress from "./components/display/SpendingPeriodInProgress";
import SpendingPeriodByID from "./components/display/SpendingPeriodByID";
import DeleteSpentConfirm from "./components/page/DeleteSpentConfirm";
import ModifySalary from "./components/form/ModifySalary";
import MonthlySpentManager from "./components/display/MonthlySpentManager";
import NewMonthlySpent from "./components/form/NewMonthlySpent";
import DeleteMonthlySpentConfirm from "./components/page/DeleteMonthlySpentConfirm";
import ModifyMonthlySpent from "./components/form/ModifyMonthlySpent";
import TransformMonthlySpentConfirm from "./components/page/TransformMonthlySpentConfirm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<LoginAccount />} />
          <Route path="/" element={<LoginAccount />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/newSpendingPeriod" element={<NewSpendingPeriod />} />
          <Route path="/success" element={<Success />} />
          <Route path="/newspent" element={<NewSpent />} />
          <Route
            path="/displayspendingperiodinprogress"
            element={<SpendingPeriodInProgress />}
          />
          <Route
            path="/displayspendingperiod/:idPeriodSpent"
            element={<SpendingPeriodByID />}
          />
          <Route path="/modifySpent/:idSpent" element={<ModifySpent />} />
          <Route
            path="/deleteSpent/:idSpentToDelete"
            element={<DeleteSpentConfirm />}
          />
          <Route
            path="/monthlySpent/delete/:iditem"
            element={<DeleteMonthlySpentConfirm />}
          />
          <Route
            path="/monthlySpent/modify/:iditem"
            element={<ModifyMonthlySpent />}
          />
          <Route
            path="/monthlySpent/transform/:iditem"
            element={<TransformMonthlySpentConfirm />}
          />
          <Route
            path="/modifySalary/:idSalaryToModify"
            element={<ModifySalary />}
          />
          <Route
            path="/monthlySpent/getAllByIdUser"
            element={<MonthlySpentManager />}
          />
          <Route path="/monthlySpent/new" element={<NewMonthlySpent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
