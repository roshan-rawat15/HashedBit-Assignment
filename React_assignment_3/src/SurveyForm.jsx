import { useState } from 'react';
import './SurveyForm.css';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    weight: '',
    healthCondition: '',
    donationFrequency: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform form validation and submission
    console.log(formData);
  };

  return (
    <div className="blood-donation-survey-form-container">
      <h2>Blood Donation Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Blood Group:</label>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="form-group">
          <label>Weight (in kg):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Health Condition:</label>
          <input
            type="text"
            name="healthCondition"
            value={formData.healthCondition}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Donation Frequency:</label>
          <select name="donationFrequency" value={formData.donationFrequency} onChange={handleChange}>
            <option value="">Select</option>
            <option value="regular">Regular</option>
            <option value="occasional">Occasional</option>
            <option value="first-time">First-time</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;
