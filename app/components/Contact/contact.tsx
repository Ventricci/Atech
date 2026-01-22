'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';

interface FormData {
  name: string;
  phone: string;
  email: string;
  description: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  description?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  // Máscara de telefone
  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara (DD) 9 9999-9999
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 3) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7)}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formatted });
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validação do nome
    if (!formData.name.trim()) {
      newErrors.name = 'Nome completo é obrigatório';
    }

    // Validação do telefone
    const phoneNumbers = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (phoneNumbers.length !== 11) {
      newErrors.phone = 'Telefone deve ter 11 dígitos (DD) 9 9999-9999';
    }

    // Validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    // Validação da descrição
    if (!formData.description.trim()) {
      newErrors.description = 'Descrição é obrigatória';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'Descrição deve ter no mínimo 20 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Limpa mensagens anteriores
    setSubmitMessage(null);

    if (!validateForm()) {
      setSubmitMessage({
        type: 'error',
        text: 'Por favor, corrija os erros no formulário antes de enviar.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Envia os dados para a API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        });
        // Limpa o formulário
        setFormData({
          name: '',
          phone: '',
          email: '',
          description: '',
        });
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contact} id="contato">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Envie-nos uma mensagem</h2>
        <div className={styles.divider}></div>

        <div className={styles.content}>
          {/* Formulário */}
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Entre em contato</h3>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <div className={styles.inputWrapper}>
                    <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="currentColor"/>
                      <path d="M10 12.5C5.58172 12.5 2 14.4289 2 16.875V20H18V16.875C18 14.4289 14.4183 12.5 10 12.5Z" fill="currentColor"/>
                    </svg>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nome Completo"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    />
                  </div>
                  {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputWrapper}>
                    <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M18 15.5C16.75 15.5 15.55 15.3 14.43 14.93C14.08 14.82 13.69 14.9 13.41 15.17L11.21 17.37C8.38 15.93 4.06 11.62 2.62 8.79L4.82 6.58C5.1 6.31 5.18 5.92 5.07 5.57C4.7 4.45 4.5 3.25 4.5 2C4.5 1.45 4.05 1 3.5 1H1C0.45 1 0 1.45 0 2C0 11.39 7.61 19 17 19C17.55 19 18 18.55 18 18V15.5C18 14.95 17.55 14.5 17 14.5Z" fill="currentColor"/>
                    </svg>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telefone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                      maxLength={18}
                    />
                  </div>
                  {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18 2H2C0.9 2 0.01 2.9 0.01 4L0 16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM18 6L10 11L2 6V4L10 9L18 4V6Z" fill="currentColor"/>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  />
                </div>
                {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="description"
                  placeholder="Conte-nos sobre seu projeto..."
                  value={formData.description}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.description ? styles.inputError : ''}`}
                  rows={5}
                />
                {errors.description && <span className={styles.errorMessage}>{errors.description}</span>}
              </div>

              {submitMessage && (
                <div className={`${styles.message} ${styles[submitMessage.type]}`}>
                  {submitMessage.text}
                </div>
              )}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </div>

          {/* Imagem */}
          <div className={styles.imageContainer}>
            <img
              src="/images/contact-illustration.png"
              alt="Ilustração de contato"
              className={styles.illustration}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
