import React, { useState, useEffect } from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        async function getUsers() {
            const response = await fetch('/api/user_get');
            const json = await response.json();
            setUsers(json);
        }
        getUsers();
    }, []);

    const openPopUp = (id) => {
        setSelectedUserId(id);
        setIsPopUpOpen(true);
    };

    const closePopUp = () => {
        setSelectedUserId(null);
        setIsPopUpOpen(false);
    };

    const deleteUser = async () => {
        try {
            const response = await fetch('/api/user_delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: selectedUserId }),
            });

            if (response.ok) {
                setUsers((prevUsers) => prevUsers.filter((user) => user.id !== selectedUserId));
            } else {
                const errorData = await response.json();
                alert(`Failed to delete user: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('An error occurred while deleting the user');
        } finally {
            closePopUp();
        }
    };

    return (
        <div className="dashboard-container">
            <main className="dashboard-content">
                <div className="table-container">
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Login</th>
                                <th>Created At</th>
                                <th>Edited At</th>
                                <th>is Admin</th>
                                <th>Profile Pic</th>
                                <th className="th-actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.user.login}</td>
                                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                    <td>{user.editedAt ? new Date(user.editedAt).toLocaleDateString() : 'N/A'}</td>
                                    <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                                    <td>
                                        <img
                                            src={user.profilePicUrl}
                                            alt="Profile Pic URL"
                                            className="thumbnail"
                                        />
                                    </td>
                                    <td className="action-buttons">
                                        <a href={`/users/${user.id}/edit`}>
                                            <button className="button primary fit edit-button">
                                                <MdEdit />
                                            </button>
                                        </a>
                                        <button
                                            className="button fit delete-button"
                                            onClick={() => openPopUp(user.id)}
                                        >
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            {isPopUpOpen && (
                <div id="popup-overlay">
                    <div className="popup">
                        <p>Are you sure you want to delete this user?</p>
                        <div className="popup-actions">
                            <button className="button fit delete-button" onClick={deleteUser}>
                                Yes, Delete
                            </button>
                            <button className="button primary fit" onClick={closePopUp}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ManageUsers;
