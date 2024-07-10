import React from 'react'

export default function Regulation() {
  const item1 = `A written notice of withdrawal of admission  must be given 3 months in advance before the due \ndate for payment of term fees.`
  const item2 = "Students leaving the college during the term will not be entitled to any refund."
  const item3 = 'Leave of absence except in the case of unforeseen illness or emergency requires prior sanction \nof the school authorities. For absence due to illness:'
  const item4 = `An application for the college leaving certificate will be accepted only during college working \nhours. The college leaving certificate will be issued after 7 working days subject to conditions \nmentioned above.`
  const item5 = `A duplicate certificate will not be issued except in special circumstances and subject to \nconditions as may be imposed. Charges will be taken to issue any kind of duplicate copy. \nApplication for certificate (leaving, bonafide and attestation of mark sheet) must be submitted in \nthe college office and should be collected after 10 days.`
  const items = [item1, item2, item3, item4, item5];
  return (
    <div className='rulecomponents5'>
      <div className='rulecomponents1text'>
        <ul style={{ listStyle: 'none' }} >
          {/* Using map() to generate list items */}
          {items.map((item, index) => (
            <li key={index} className='component1list'>
              <div className='componentbullet'></div>
              <pre className='componentlistdata'>{item}</pre>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}
