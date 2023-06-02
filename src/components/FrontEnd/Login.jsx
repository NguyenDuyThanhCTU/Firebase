import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi email sử dụng EmailJS
    emailjs.sendForm('service_nz7m77m', 'template_galbvla', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        // Xử lý thành công
      }, (error) => {
        console.log(error.text);
        // Xử lý lỗi
      });

    // Xóa nội dung trong form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Họ và tên:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />

      <label htmlFor="message">Nội dung:</label><br />
      <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" cols="50" required></textarea><br /><br />

      <input type="submit" value="Gửi" />
    </form>
  );
};

export default Form;
