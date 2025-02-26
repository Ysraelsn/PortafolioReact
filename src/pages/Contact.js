import React, { useState } from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background-color: #f4f4f4;
  color: #000;
  text-align: center;
`;

const ContactContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;

  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  color: #000;

  &:after {
    content: "";
    position: absolute;
    width: 60%;
    height: 0.5rem;
    background-color: #8000ff;
    bottom: -10px;
    left: 20%;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 45rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(128, 0, 255, 0.15);
  position: relative;
  border-top: 5px solid #8000ff;
`;

const FormGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 90%;
  padding: 15px 20px;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f8f8f8;

  &:focus {
    outline: none;
    border-color: #8000ff;
    box-shadow: 0 0 0 2px rgba(128, 0, 255, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  padding: 15px 20px;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  background-color: #f8f8f8;

  &:focus {
    outline: none;
    border-color: #8000ff;
    box-shadow: 0 0 0 2px rgba(128, 0, 255, 0.1);
  }
`;

const SubmitButton = styled.button`
  background-color: #8000ff;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #6a00d9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(128, 0, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <ContactSection>
      <ContactContainer>
        <Title>Trabajemos juntos</Title>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <TextArea
              name="message"
              placeholder="Escribe tu mensaje"
              value={form.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Enviar mensaje</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
