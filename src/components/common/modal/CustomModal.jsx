const CustomModal = ({ children }) => {
  return (
    <div
      style={{
        width: 200,
        height: 200,
        border: "2px solid coral",
      }}
    >
      <h2>Este es el modal</h2>

      {children}
    </div>
  );
};

export default CustomModal;
