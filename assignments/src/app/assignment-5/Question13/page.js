'use client'
import { useState } from 'react';
import Modal from './Modal'; 

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Open modal and set content
  const openModalWithContent = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  
  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Reusable Modal Demo</h1>

      <button
        onClick={() =>
          openModalWithContent(
            <div>
              <h2>Simple Text Content</h2>
              <p>This is a modal with simple text content.</p>
            </div>
          )
        }
        style={{ marginRight: '1rem', padding: '0.5rem 1rem' }}
      >
        Open Text Modal
      </button>

      <button
        onClick={() =>
          openModalWithContent(
            <div>
              <h2>Form inside Modal</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Form submitted!');
                  closeModal();
                }}
              >
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  required
                  style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
                />
                <button type="submit" style={{ padding: '0.5rem 1rem' }}>
                  Submit
                </button>
              </form>
            </div>
          )
        }
        style={{ padding: '0.5rem 1rem' }}
      >
        Open Form Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
}
