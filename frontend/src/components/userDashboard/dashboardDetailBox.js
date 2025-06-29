import incomeImg from '../../assets/images/income.png'
import expenseImg from '../../assets/images/expense.png'
import cashInHandImg from '../../assets/images/cashInHand.png'
import transactionImg from '../../assets/images/transaction.png'

function DashboardDetailBox({ total_income, total_expense, cash_in_hand, no_of_transactions }) {
    return (
        <div className='details' style={{gap:'12px'}}>
            <Box amount={'Rs. ' + total_income} src={incomeImg} title="Income"/>
            <Box amount={'Rs. ' + total_expense} src={expenseImg} title="Expense"/>
            <Box amount={'Rs. ' + cash_in_hand} src={cashInHandImg} title="Cash in hand"/>
            <Box amount={no_of_transactions} src={transactionImg} title="No of transactions"/>
        </div>
    )
}

function Box({amount, src, title}) {
    return (
        <div style={{padding:'12px 8px', borderRadius:'12px', minWidth:'90px', maxWidth:'120px', boxShadow:'0 0 6px #00FF9D22', background:'#181818', display:'flex',flexDirection:'column',alignItems:'center',gap:'8px'}}>
            <div>
                <h2 style={{fontSize:'1.1rem'}}>{amount}</h2>
                <h4 style={{fontSize:'0.95rem'}}>{title}</h4>
            </div>
            <img src={src} style={{height:'38px',width:'38px',borderRadius:'50%'}}/>
        </div>
    )
}

export default DashboardDetailBox;