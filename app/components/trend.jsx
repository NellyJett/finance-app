const Trend = ({type, amount, prevAmount}) =>{
    const colorClasses = {
        'Income': 'text-green-700 dark:text-green-300',
        'Expense': 'text-green-700 dark:text-green-300',
        'Investment': 'text-indigo-700 dark:text-green-300',
        'Saving': 'text-green-700 dark:text-green-300'
    }
    const calPercentageChange = (amount, prevAmount) =>{
        if(prevAmount === 0) return 0;
        return ((amount-prevAmount) / prevAmount) * 100
    }
    const formatCurrency = (amount) =>
        new Intl.NumberFormat('en-US', {style:'currency', currency:'EUR'}).format(amount)
    
    return<div>
        <div className={`font-semibold ${colorClasses[type]}`}>{type}</div>
        <div className="text-2xl font-semibold text-black dark:text-white mb-2">{amount ? formatCurrency(amount): formatCurrency(0)}</div>
    </div>
}

export default Trend