import React, { useState } from 'react';

const InputField = ({ label, id, name, type = 'text', placeholder, value, onChange, className = '' }) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
    />
  </div>
);

const TextareaField = ({ label, id, name, placeholder, value, onChange, rows = 4 }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
    />
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Message sent! (Check console for data)');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputField
          label="First name"
          id="firstName"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          label="Last name"
          id="lastName"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <InputField
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="you@company.com"
        value={formData.email}
        onChange={handleChange}
      />
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">Country</label>
            <select
              id="country"
              name="country"
              className="h-full py-0 pl-3 pr-8 border-transparent bg-transparent text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 rounded-md"
            >
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
          />
        </div>
      </div>
      <TextareaField
        label="Message"
        id="message"
        name="message"
        placeholder="Leave us a message..."
        value={formData.message}
        onChange={handleChange}
        rows={5}
      />
      <div>
        <button
          type="submit"
          className="w-full lg:w-auto px-6 py-3 bg-gray-900 text-white font-semibold rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors"
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
