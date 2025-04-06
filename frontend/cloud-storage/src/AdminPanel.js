import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/AdminPanel.css';

export const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate;

    useEffect (() => {
        const fetchUsers = async () => {
            try {
                const recponse = await axios.get('/api/users', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`}
                });
                setUsers(Response.data);
            } catch (error) {
                if (error.response?.status === 403) navigate('/');
            }
        };
        fetchUsers();
    }, [navigate])

    const handleAdminToggle = async (userId, isAdmin) => {
        try {
            await axios.put(`/api/users/${userId}`, { isAdmin }, {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setUsers(users.map(user => user._id === userId ? { ...user, isAdmin }: user));
        } catch (error) {
            console.error('Update failed: ', error);
        }
    };

    const handleDelete = async userId => {
        if (window.confirm('Удалить пользователя?')) {
            try {
                await axios.delete(`/api/users/${userId}`, {
                    header: { Authorization: `Bearer ${localStorage.getItem('token')}`}
                });
                setUsers(users.filter(user => user._id !== userId));
            } catch (error) {
                console.error('Delete failed: ', error);
            }
        }
    }

  return (
    <div className="admin_container">
        <h1>Администритивная панель</h1>
        <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>E-mail</th>
                    <th>Администратор</th>
                    <th>Файлы</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user._id}>
                        <td>{user.fullName}</td>
                        <td>{user.email}</td>
                        <td>
                            <input type='checkbox' checked={user.isAdmin} onChange={e => handleAdminToggle(user._id, e.target.checked)}/>
                        </td>
                        <td>
                            {user.storage?.fileCount || 0} файлов (
                                {(user.storage?.totalSize /1024 / 1024).toFixed(2)} MB
                            )
                            <button onClick={() => navigate(`/files/${user._id}`)}>Управление</button>
                        </td>
                        <td>
                            <button className='delete-btn' onClick={() => handleDelete(user._id)}>Удалить</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
