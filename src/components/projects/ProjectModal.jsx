const ProjectModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] h-[90%] rounded-xl shadow-lg relative overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-xl font-bold">
            ×
          </button>
        </div>
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default ProjectModal;
