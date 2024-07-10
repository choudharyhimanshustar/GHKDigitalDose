import React from 'react'

export default function RuleConduct() {
  const item1 = `All students must be clean and neatly dressed in their complete school uniform. The students \ncan be fined if not in proper complete school uniform.`
  const item2 = "Students should bring the school handbook, required text books, notebooks, notepads and other \nschool related material every day."
  const item3 = 'Books and other belongings should be neatly labeled with the Name, Standard, Division and Roll \nNo. of the student.'
  const item4 = `Students must take care of their own belongings. The school will not be responsible for the loss of \nany valuables or other articles belonging to the students.`
  const item5 = `No books (other than text books, note books or library books), magazines or papers non-relevant \nto the school may be brought to school.`
  const item6 = `Students should converse only in English both in and outside class`
  const item7 = `No student will be permitted to leave school during school hours (including recess) except in \ncase of an emergency or illness, and with the written permission of the Principal or accompanied \nby the parent.`
  const item8 = `Students will not be exempted from Physical Education or other activities without the permission \nof the teachers. Exemption will not be granted unless there is a valid reason for or any serious \nmedical condition which should be notified and certified..`
  const items = [item1, item2, item3, item4, item5, item6, item7, item8];
  return (
    <div className='rulecomponents3'>
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
