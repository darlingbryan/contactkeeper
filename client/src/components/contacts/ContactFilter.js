import React, { useContext, useState } from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
  const { filterContacts, clearFilter } = useContext(ContactContext)
  const [text, setText] = useState('')

  const onChange = e => {
    if (e.target.value) {
      setText(e.target.value)
      filterContacts(text)
    } else {
      clearFilter()
    }
  }

  return (
    <form>
      <input type='text' placeholder='Filter Contacts' onChange={onChange} />
    </form>
  )
}
export default ContactFilter
