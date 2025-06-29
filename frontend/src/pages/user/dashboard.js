import '../../assets/styles/dashboard.css';
import '../../assets/styles/cyberStyle.css';
import { useState } from 'react';
import DashboardDetailBox from '../../components/userDashboard/dashboardDetailBox';
import CategoryExpenseChart from '../../components/userDashboard/categoryExpenseChart';
import Header from '../../components/utils/header';
import Budget from '../../components/userDashboard/budget';
import useDashboard from '../../hooks/useDashboard';
import Info from '../../components/utils/Info';
import Container from '../../components/utils/Container';
import toast, { Toaster } from 'react-hot-toast';

function Dashboard() {
    const months = getMonths();
    const [currentMonth, setMonth] = useState(months[0]);
    const [total_expense, total_income, cash_in_hand, no_of_transactions, categorySummary, budgetAmount,
        saveBudget, isLoading, isError] = useDashboard(currentMonth);

    const onMonthChange = (id) => {
        const month = months.find(m => m.id === id);
        setMonth(month);
    }

    return (
        <Container activeNavId={0}>
            <Header title="Dashboard" className="cyber-heading" />
            <Toaster />
            <div className="dashboard-container cyber-bg">
                <div className="month-selector cyber-selector">
                    <select value={currentMonth.id} onChange={(e) => onMonthChange(e.target.value)} className="cyber-select">
                        {months.map((m) => (
                            <option value={m.id} key={m.id}>{m.monthName} {m.year}</option>
                        ))}
                    </select>
                </div>
                {isLoading && <div className="loading cyber-glow-text">Loading...</div>}
                {isError && toast.error("Failed to fetch information. Try again later!")}
                {!isLoading && total_expense === 0 && <Info text={"You have no expenses in this month!"} />}
                {!isError && total_expense !== 0 && (
                    <div className="dashboard-content cyber-center">
                        <div className="dashboard-left cyber-card">
                            <DashboardDetailBox
                                total_expense={total_expense}
                                total_income={total_income}
                                cash_in_hand={cash_in_hand}
                                no_of_transactions={no_of_transactions}
                            />
                        </div>
                        <div className="dashboard-right">
                            <div className="chart-container cyber-card">
                                <CategoryExpenseChart categorySummary={categorySummary} />
                            </div>
                            <div className="budget-container cyber-card">
                                <Budget
                                    totalExpense={total_expense}
                                    budgetAmount={budgetAmount}
                                    saveBudget={saveBudget}
                                    currentMonth={currentMonth}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
}

export default Dashboard;

function getMonths() {
    const months = []
    const current_date = new Date()

    for (let i = 0; i <= 11; i++) {
        const date = new Date(current_date.getFullYear(), current_date.getMonth() - i, 1)
        months.push({
            id: date.getMonth() + 1,
            year: date.getFullYear(),
            monthName: date.toLocaleString('en-US', { month: 'long' })
        })
    }

    return months;
}