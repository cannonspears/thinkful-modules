import React, { useState } from "react";

function RSVPForm() {
  const initialFormState = {
    name: "",
    age: "",
    isNewMember: false,
    comment: "",
  }
  const [formData,setFormData] = useState({...initialFormState})
  
  const handleChange = ({target}) => {
    const value = target.type === "checkbox" ? target.checked : target.value
    setFormData({...formData, [target.name]: value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const {name, age, isNewMember, comment} = formData
    console.log(name, age, isNewMember, comment)
    setFormData({...initialFormState})
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
         Name:
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <br />
        <label htmlFor="age">
            What is your age?
            <select
                id="age"
                name="age"
                onChange={handleChange}
                value={formData.age}
                >
                <option value="Prefer not to say">Prefer not to say</option>
                <option value="0-19">0-19</option>
                <option value="20-39">20-39</option>
                <option value="40-59">40-59</option>
                <option value="60+">60+</option>
            </select>
        </label>
        <br />
        <label htmlFor="isNewMember">
            Are you a new member?
            <input
                id="isNewMember"
                type="checkbox"
                name="isNewMember"
                onChange={handleChange}
                checked={formData.isNewMember}
                value="isNewMember"
            />
        </label>
        <br />
        <label htmlFor="comment">
         Comment:
          <input
            id="comment"
            type="text"
            name="comment"
            onChange={handleChange}
            value={formData.comment}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  
  )
}

export default RSVPForm;
