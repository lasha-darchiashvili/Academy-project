"use client";
import React from "react";
import Editmodal from "./components/editmodal";
import Addmodal from "./components/addmodal";
import Deletemodal from "./components/deletemodal";
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const AdminPanel = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [idToDelete, setIdToDelete] = useState(-1);
  const [idToEdit, setIdToEdit] = useState(-1);

  const getUsers = async () => {
    try {
      const response = await fetch("/api/get-users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data.users.rows);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onDeleteClick = async () => {
    try {
      await fetch("/api/delete-user", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: idToDelete }),
      });
      getUsers();
    } catch (error) {
      console.error("An error occurred while deleting the user:", error);
    }
    setIsDeleteModalOpen(false);
  };

  console.log(users);

  const handleAddUser = async (newUser: {
    name: string;
    email: string;
    age: number;
  }) => {
    try {
      const response = await fetch("/api/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }
      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteIconClick = async (id: number) => {
    setIsDeleteModalOpen(true);
    setIdToDelete(id);
  };

  const onUpdateIconClick = async (id: number) => {
    setIsEditModalOpen(true);
    setIdToEdit(id);
  };

  const handleUpdateUser = async (updatedUser: {
    name: string;
    email: string;
    age: number;
  }) => {
    try {
      const response = await fetch(`/api/update-user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: idToEdit, ...updatedUser }),
      });

      if (!response.ok) {
        console.log({ idToEdit, ...updatedUser });
        throw new Error("Failed to update user");
      }
      console.log({ idToEdit, ...updatedUser });
      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-200 text-black p-4 min-h-screen ">
      {isEditModalOpen && (
        <Editmodal
          onClose={() => setIsEditModalOpen(false)}
          handleUpdateUser={handleUpdateUser}
        />
      )}
      {isAddModalOpen && (
        <Addmodal
          onClose={() => setIsAddModalOpen(false)}
          handleAddUser={handleAddUser}
        />
      )}
      {isDeleteModalOpen && (
        <Deletemodal
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={() => onDeleteClick()}
        />
      )}

      <div className=" mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold">Users</div>
          <img
            src="/assets/add.svg"
            alt="add"
            className="cursor-pointer w-[2rem]"
            onClick={() => setIsAddModalOpen(true)}
          />
        </div>
        <div className="max-h-48 overflow-y-auto max-h-[400px]">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Id</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2"></th> {/* Empty cell for icons */}
              </tr>
            </thead>
            <tbody>
              {users.map((user: User) => {
                return (
                  <tr key={user?.id}>
                    <td className="px-4 py-2 text-center">{user?.id}</td>
                    <td className="px-4 py-2 text-center">{user?.name}</td>
                    <td className="px-4 py-2 text-center">{user?.email}</td>
                    <td className="px-4 py-2 text-center">{user?.age}</td>
                    <td className="px-4 py-2 text center flex justify-end">
                      <div className="flex">
                        {" "}
                        <img
                          src="/assets/edit.svg"
                          alt="edit"
                          className="cursor-pointer w-[1.5rem]"
                          onClick={() => onUpdateIconClick(user?.id)}
                        />
                        <img
                          src="/assets/delete.svg"
                          alt="delete"
                          className="cursor-pointer w-[1.8rem]"
                          onClick={() => onDeleteIconClick(user?.id)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
