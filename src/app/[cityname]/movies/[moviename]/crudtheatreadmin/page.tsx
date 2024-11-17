"use client"
import React, { useState } from 'react';
import './TheatreAdmin.css';


// Định nghĩa kiểu dữ liệu rạp chiếu
interface Theatre {
  id: number;
  name: string;
  location: string;
  screenType: string;
  capacity: number;
}

export const TheatreAdmin: React.FC = () => {
  const [theatres, setTheatres] = useState<Theatre[]>([
    { id: 1, name: 'Lotte Cinema', location: 'Hanoi', screenType: 'IMAX', capacity: 200 },
  ]);
  const [newTheatre, setNewTheatre] = useState<Theatre>({ id: 0, name: '', location: '', screenType: '', capacity: 0 });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingTheatre, setEditingTheatre] = useState<Theatre | null>(null);

  // Xử lý thêm rạp chiếu mới
  const addTheatre = () => {
    if (newTheatre.name && newTheatre.location && newTheatre.screenType && newTheatre.capacity > 0) {
      setTheatres([...theatres, { ...newTheatre, id: Date.now() }]);
      setNewTheatre({ id: 0, name: '', location: '', screenType: '', capacity: 0 });
    } else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  };

  // Xử lý xóa rạp chiếu
  const deleteTheatre = (id: number) => {
    setTheatres(theatres.filter(theatre => theatre.id !== id));
  };

  // Xử lý sửa rạp chiếu
  const editTheatre = (theatre: Theatre) => {
    setIsEditing(true);
    setEditingTheatre(theatre);
    setNewTheatre(theatre);
  };

  const updateTheatre = () => {
    if (editingTheatre) {
      setTheatres(theatres.map(theatre => (theatre.id === editingTheatre.id ? newTheatre : theatre)));
      setIsEditing(false);
      setNewTheatre({ id: 0, name: '', location: '', screenType: '', capacity: 0 });
      setEditingTheatre(null);
    }
  };

  return (
    <div className="theatre-admin">
      <h1>Quản lý Rạp Chiếu</h1>

      <div className="theatre-form">
        <input
          type="text"
          placeholder="Tên rạp"
          value={newTheatre.name}
          onChange={(e) => setNewTheatre({ ...newTheatre, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Địa điểm"
          value={newTheatre.location}
          onChange={(e) => setNewTheatre({ ...newTheatre, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Loại màn hình chiếu"
          value={newTheatre.screenType}
          onChange={(e) => setNewTheatre({ ...newTheatre, screenType: e.target.value })}
        />
        <input
          type="number"
          placeholder="Sức chứa"
          value={newTheatre.capacity}
          onChange={(e) => setNewTheatre({ ...newTheatre, capacity: Number(e.target.value) })}
        />
        {isEditing ? (
          <button onClick={updateTheatre}>Cập nhật Rạp Chiếu</button>
        ) : (
          <button onClick={addTheatre}>Thêm Rạp Chiếu</button>
        )}
      </div>

      <div className="theatre-list">
        <h2>Danh sách Rạp Chiếu</h2>
        {theatres.map((theatre) => (
          <div key={theatre.id} className="theatre-item">
            <p><strong>Tên rạp:</strong> {theatre.name}</p>
            <p><strong>Địa điểm:</strong> {theatre.location}</p>
            <p><strong>Loại màn hình chiếu:</strong> {theatre.screenType}</p>
            <p><strong>Sức chứa:</strong> {theatre.capacity}</p>
            <button onClick={() => editTheatre(theatre)}>Sửa</button>
            <button onClick={() => deleteTheatre(theatre.id)}>Xóa</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheatreAdmin;
