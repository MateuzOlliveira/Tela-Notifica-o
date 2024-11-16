import React, { useState } from "react";

const NotificationAccordion = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, sender: "Nome do E-mail", message: "blá, blá, blá", isOpen: false },
    { id: 2, sender: "Nome do E-mail", message: "blá, blá, blá.", isOpen: false },
  ]);

  const toggleAccordion = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, isOpen: !notif.isOpen } : { ...notif, isOpen: false }
      )
    );
  };

  const handleEditMessage = (id, newMessage) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, message: newMessage } : notif
      )
    );
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f4f8",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Notificações
      </h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {notifications.map((notif) => (
          <li key={notif.id} style={{ marginBottom: "15px" }}>
            <div
              style={{
                padding: "10px 15px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: notif.isOpen ? "#e9f5ff" : "#fff",
                borderColor: notif.isOpen ? "#007BFF" : "#ddd",
                transition: "all 0.3s ease",
                fontWeight: "bold",
              }}
              onClick={() => toggleAccordion(notif.id)}
            >
              <strong>De:</strong> {notif.sender}
            </div>

            {notif.isOpen && (
              <div
                style={{
                  marginTop: "10px",
                  padding: "10px 15px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <textarea
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                    backgroundColor: "#f9f9f9",
                    resize: "none",
                  }}
                  rows="4"
                  value={notif.message}
                  onChange={(e) =>
                    handleEditMessage(notif.id, e.target.value)
                  }
                />
                <button
                  style={{
                    marginTop: "10px",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={() =>
                    alert(`Mensagem editada: "${notif.message}"`)
                  }
                >
                  Salvar
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>

    

  );
};


export default NotificationAccordion;
