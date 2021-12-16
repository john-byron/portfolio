import React from 'react'

function Budget() {
    return (
        <div>
            <h1>Need Help Budgeting?</h1>
            <h2>Here Is A Sample Budget To Help You Get Started</h2>

            <div className="budget-container" id="budget-main-container">
        <div className="budget-container" id="income-container">
            <h3 className="budget-title">Income: </h3>

            <div className="budget-container income container-income" id="donations">
                <h4 className="Budget Cat">Donations Given: </h4>
                <input className="Budget In" type="number" placeholder="number" />
                <div className="notes income" id="donation-notes"><textarea>Notes</textarea></div>

            </div>

            <div className="budget-container income container-income" id="salary">
                <h4 className="Budget Cat">Salary: </h4>
                <input className="Budget In" type="number" placeholder="number" />
                <div className="notes income income-notes" id="salary-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container income container-income" id="family">
                <h4 className="Budget cat-name">Family: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes income income-notes" id="family-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container income container-income" id="friends">
                <h4 className="Budget cat-name">Friends: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes income income-notes" id="friends-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container income container-income" id="churches">
                <h4 className="Budget cat-name">Churches: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes income income-notes" id="churches-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container income container-income" id="other">
                <h4 className="Budget cat-name">Other: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes income income-notes" id="other-notes"><textarea>Notes</textarea></div>
            </div>



        </div>

        <div className="budget-container" id="expense-container">
            <h3 className="budget-title">Expenses</h3>

            <div className="budget-container expense container-expense" id="housing">
                <h4 className="Budget cat-name">Housing: </h4>
                {/*  write script that if span is written over then put span in that category's h4 area   */}

                <input className="Budget" type="number" placeholder="<span>#housing</span>" />
                <div className="notes expense expense-notes" id="housing-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense sub container-expense" id="utilities">
                <h4 className="Budget cat-name">Utilities: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="utilities-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense container-expense" id="food">
                <h4 className="Budget cat-name">Food: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="food-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense container-expense" id="transportation">
                <h4 className="Budget cat-name">Transportation: </h4>
                {/*  write script that if span is written over then put span in that category's h4 area   */}
                <input className="Budget" type="number" placeholder="<span>#transportation</span>" />
                <div className="notes expense expense-notes" id="transportation-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense sub container-expense" id="vehicle">
                <h4 className="Budget cat-name">Vehicle: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="vehicle-notes"><textarea>Notes</textarea></div>
            </div>


            <div className="budget-container expense sub container-expense" id="trans-insurance">
                <h4 className="Budget cat-name">Auto Insurance: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="trans-insurance-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense sub container-expense" id="gas">
                <h4 className="Budget cat-name">Gas: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="gas-notes"><textarea>Notes</textarea></div>
            </div>


            <div className="budget-container expense container-expense" id="communications">
                <h4 className="Budget cat-name">Communications: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="communications-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense container-expense" id="travel">
                <h4 className="Budget cat-name">Travel: </h4>
                {/*  write script that if span is written over then put span in that category's h4 area   */}

                <input className="Budget" type="number" placeholder="<span>#travel</span>" />
                <div className="notes expense expense-notes" id="travel-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense sub container-expense" id="air">
                <h4 className="Budget cat-name">Getting There: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="air-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense sub container-expense" id="visa">
                <h4 className="Budget cat-name">Visa: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="visa-notes"><textarea>Notes</textarea></div>
            </div>


            <div className="budget-container expense container-expense" id="administrative">
                <h4 className="Budget cat-name">Administrative: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="administrative-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense container-expense" id="taxes">
                <h4 className="Budget cat-name">Taxes: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="taxes-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense container-expense" id="trainings">
                <h4 className="Budget cat-name">Training: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="trainings-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense container-expense" id="medical">
                <h4 className="Budget cat-name">Medical: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="medical-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense container-expense" id="other-insurances">
                <h4 className="Budget cat-name">Insurance: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="other-insurances-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense container-expense" id="entertainment">
                <h4 className="Budget cat-name">Entertainment: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="entertainment-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense container-expense" id="other-tech-needs">
                <h4 className="Budget cat-name">Technology: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="other-tech-needs-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense container-expense" id="ministry">
                <h4 className="Budget cat-name">Ministry: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="ministry-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense container-expense" id="child-education">
                <h4 className="Budget cat-name">Child Education: </h4>
                <input className="Budget" type="number" placeholder="number" />
                <div className="notes expense expense-notes" id="child-education-notes"><textarea>Notes</textarea></div>
            </div>

            <div className="budget-container expense container-expense" id="safety-net">
                <h4 className="Budget cat-name">Safety Net:
                    <br />Suggested amount: <span>#net</span>
                    {/*  Add note: (This category is suggested to be 5% of the total expenses without this section, but you may put whatever amount you wish.) */}
                </h4>
                <input className="Budget" type="number" placeholder="number" />
                
                <div className="notes expense expense-notes" id="safety-net-notes"><textarea>Notes</textarea></div>

                
                    {/* - This category is suggested to be 5% of the total without this section 
                    - To calculate this, there should be a subtotal that adds everything without this section and then add it to the subtotal to get the entire total */}
                
            </div>



        </div>




        <div className="total">

            <h3 className="Budget-Total" id="total-income">Total Income: <span>#inc-total</span></h3>
           
            <h3 className="Budget-Total" id="total-expense">Total Expenses: <span>#exp-total</span></h3>

            <h3 className="Budget-Total" id="final-total">Final Total: <span>#fin-total</span></h3>

            


        </div>

    </div>

        </div>
    )
}

export default Budget
