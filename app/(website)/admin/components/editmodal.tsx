import React from "react";
import { useState } from "react";

interface EditModalProps {
  onClose: () => void;
  handleUpdateUser: (user: {
    name: string;
    email: string;
    age: number;
  }) => void;
}

const Editmodal: React.FC<EditModalProps> = ({ onClose, handleUpdateUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUpdateUser({ name, email, age: parseInt(age) });
    setName("");
    setEmail("");
    setAge("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white border border-black p-8 rounded-lg z-50 w-[30rem]">
        <div className="text-lg font-semibold mb-4">Update User</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Age</label>
            <input
              type="number"
              className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              required
              min="1"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editmodal;
