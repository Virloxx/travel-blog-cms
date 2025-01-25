import React, { useState, useEffect } from 'react'

function manageUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
      async function getUsers() {
          const response = await fetch('/api/user_get')
          const json = await response.json()
          setUsers(json)
      }
      getUsers()
    }, [])
    
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
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.user.login}</td>
                        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                        <td>{new Date(user.editedAt).toLocaleDateString()}</td>
                        <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                        <td>
                            <img
                                src={user.profilePicUrl}
                                alt="Profile Pic URL"
                                className="thumbnail"
                            />
                        </td>
                        <td>
                            <a href={`/users/${user.id}/edit`}><button className="button primary fit">Edit</button></a>
                            <button className="button fit delete-button">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </main>
        </div>
    )
}

export default manageUsers