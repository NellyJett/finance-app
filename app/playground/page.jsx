import PageHeader from "../components/page-header"
import Trend from "../components/trend"
import TransactionItem from "../components/transaction-item"
import TransactionSummaryItem from "../components/transaction-summary-item"
import Button from "../components/button"
import Input from "../components/input"
import Select from "../components/select"

const Playground = () =>{
    return(
        <main className="space-y-8 mb-44">
            <h1 className="text-4xl mt-8">Playground</h1>
            <div>
                <h2  className="mb-4 text-lg font-mono">PageHearder</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div><PageHeader /></div>
            </div>

            <div>
                <h2  className="mb-4 text-lg font-mono">Trend</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="flex space-x-8">
                    <Trend type="Income" amount={1000} prevAmount={900} />
                    <Trend type="Expense" amount={12000} prevAmount={10000} />
                    <Trend type="Investment" amount={7000} prevAmount={11000} />
                    <Trend type="Saving" amount={500} prevAmount={950} />
                </div>
            </div>

            <div className="space-y-4">
                <h2  className="mb-4 text-lg font-mono">TransactionItem</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="space-y-4">
                    <TransactionItem type="Income" description="Salary" amount={2000} />
                    <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={29} />
                    <TransactionItem type="Investment" description="In Microsoft" amount={5500} />
                    <TransactionItem type="Saving" description="For children" amount={9000} />
                </div>
            </div>

            <div className="space-y-4">
                <h2  className="mb-4 text-lg font-mono">TransactionSummaryItem + TransactionItem</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="space-y-4">
                    <TransactionSummaryItem date="2024-11-30" amount={3500} /> 
                    <hr className="mb-4 border-gray-200 dark:border-gray-800" />                   <TransactionItem type="Income" description="Salary" amount={2000} />
                    <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={29} />
                    <TransactionItem type="Investment" description="In Microsoft" amount={5500} />
                    <TransactionItem type="Saving" description="For children" amount={9000} />
                </div>
            </div> 

            <div className="space-y-4">
                <h2  className="mb-4 text-lg font-mono">Button</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="space-x-4">
                    <Button>Hello</Button>
                    <Button variant="outline">Hello</Button>
                    <Button variant="ghost">Hello</Button>

                    <Button size="xs">Hello</Button>
                    <Button size="sm">Hello</Button>
                    <Button size="lg">Hello</Button>
                </div>

                <div>
                    <h2  className="mb-4 text-lg font-mono">Forms</h2>
                    <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1">Your name</label>
                            <Input type="text" placeholder="Type somthing in here..." />
                        </div>
                        <div>
                            <label className="mb-1">City</label>
                            <Select>
                                <option>Warsaw</option>
                                <option>Berlin</option>
                                <option>London</option>
                                <option>Germany</option>
                            </Select>
                        </div>
                        <div className="flex items-center">
                            <Input type="checkbox" id="terms" />
                            <label className="ml-2" htmlFor="terms">Accept terms</label>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>

            </div> 
            
        </main>
    )
}

export default Playground