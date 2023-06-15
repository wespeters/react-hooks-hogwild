import React, { useState } from 'react';

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    greased: false,
    weight: '',
    'highest medal achieved': '',
    image: '',
  });

  const handleChange = (event) => {
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddHog(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type='text'
        name='specialty'
        placeholder='Specialty'
        value={formData.specialty}
        onChange={handleChange}
      />
      <label>
        Greased:
        <input
          type='checkbox'
          name='greased'
          checked={formData.greased}
          onChange={handleChange}
        />
      </label>
      <input
        type='number'
        name='weight'
        placeholder='Weight'
        value={formData.weight}
        onChange={handleChange}
      />
      <input
        type='text'
        name='highest medal achieved'
        placeholder='Highest medal achieved'
        value={formData['highest medal achieved']}
        onChange={handleChange}
      />
      <input
        type='text'
        name='image'
        placeholder='Image URL'
        value={formData.image}
        onChange={handleChange}
      />
      <button type='submit'>Add Hog</button>
    </form>
  );
}

export default HogForm;
