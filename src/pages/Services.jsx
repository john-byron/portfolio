import React from 'react';

import AdminHelp from './AdminHelp';
function Services() {
    return (
        <div>
            <h1>A List Of Our Services</h1>

                
            <div className="services" id="admin">
                
                <img src="https://images.pexels.com/photos/259178/pexels-photo-259178.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Office Supplies" />

                <h2 className="service-title" id="">Administration</h2>

                <button href="">Click Here</button>
            </div>
                
            
            <div className="services" id="fundraising">
                
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Ffinancial-finance-report-investment-accounting-interest-tax-planning-budgeting-expenditure-sales-economy-numbers-income-inspector-liquidity-depreciation-economic-subject-annual-analysis-profitability-statistics-credit-control-controlling-expenditures-crisis-numeracy-costing-cost-business-savings-budget-invest-payroll-profit-bookkeeping-costs-machine-auditing-statements-rates-balance-money-bank-return-recession-people-saving-coin-currency-prescription-drug-paper-metal-money-handling-1588959.jpg&f=1&nofb=1" alt="Coins on balanace sheet" />

                <h2 className="service-title" id="">Fundraising</h2>

                <button href="">Click Here</button>
            </div>
            
            <div className="services" id="mental">
                
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.rawpixel.com%2Fs3fs-private%2Frawpixel_images%2Fwebsite_content%2F392-mckinsey-21a1011.jpg%3Fw%3D800%26dpr%3D1%26fit%3Ddefault%26crop%3Ddefault%26auto%3Dformat%26fm%3Dpjpg%26q%3D75%26vib%3D3%26con%3D3%26usm%3D15%26bg%3DF4F4F3%26ixlib%3Djs-2.1.2%26s%3D2065f46ff3c94e425a5c79d0368c5b1b&f=1&nofb=1" alt="Counseling session" />

                <h2 className="service-title" id="">Counseling</h2>

                <button href="">Click Here</button>
            </div>

        </div>
    )
}

export default Services
