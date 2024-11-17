"use client"
import React, { useState } from 'react';
import './MovieAdmin.css';
import Link from 'next/link';
import { usePathname} from 'next/navigation'

// Định nghĩa kiểu dữ liệu phim
interface Movie {
  id: number;
  name: string;
  screenType: string;
  language: string;
  genre: string;
  price: string;
}

export const MovieAdmin: React.FC = () => {
  const pathname = usePathname()
  // Tạo state để lưu trữ danh sách phim và dữ liệu phim mới
  const [movies, setMovies] = useState<Movie[]>([
    { id: 1, name: 'Venom', screenType: '4Dx', language: 'Vietnamese', genre: 'Action/Sci-Fi', price: '200.000VND' },
  ]);
  const [newMovie, setNewMovie] = useState<Movie>({ id: 0, name: '', screenType: '', language: '', genre: '', price: '' });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);

  // Xử lý thêm phim mới
  const addMovie = () => {
    if (newMovie.name && newMovie.screenType && newMovie.language && newMovie.genre && newMovie.price) {
      setMovies([...movies, { ...newMovie, id: Date.now() }]);
      setNewMovie({ id: 0, name: '', screenType: '', language: '', genre: '', price: '' });
    } else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  };

  // Xử lý xóa phim
  const deleteMovie = (id: number) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  // Xử lý sửa phim
  const editMovie = (movie: Movie) => {
    setIsEditing(true);
    setEditingMovie(movie);
    setNewMovie(movie);
  };

  const updateMovie = () => {
    if (editingMovie) {
      setMovies(movies.map(movie => (movie.id === editingMovie.id ? newMovie : movie)));
      setIsEditing(false);
      setNewMovie({ id: 0, name: '', screenType: '', language: '', genre: '', price: '' });
      setEditingMovie(null);
    }
  };

  return (
    <div className="movie-admin">
      <h1>Quản lý Phim</h1>

      <div className="movie-form">
        <input
          type="text"
          placeholder="Tên phim"
          value={newMovie.name}
          onChange={(e) => setNewMovie({ ...newMovie, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Loại màn hình"
          value={newMovie.screenType}
          onChange={(e) => setNewMovie({ ...newMovie, screenType: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ngôn ngữ"
          value={newMovie.language}
          onChange={(e) => setNewMovie({ ...newMovie, language: e.target.value })}
        />
        <input
          type="text"
          placeholder="Thể loại"
          value={newMovie.genre}
          onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Giá vé"
          value={newMovie.price}
          onChange={(e) => setNewMovie({ ...newMovie, price: e.target.value })}
        />
        {isEditing ? (
          <button onClick={updateMovie}>Cập nhật Phim</button>
        ) : (
          <button onClick={addMovie}>Thêm Phim</button>
        )}
      </div>

      <div className="movie-list">
        <h2>Danh sách Phim</h2>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <p><strong>Tên:</strong> {movie.name}</p>
            <p><strong>Loại màn hình:</strong> {movie.screenType}</p>
            <p><strong>Ngôn ngữ:</strong> {movie.language}</p>
            <p><strong>Thể loại:</strong> {movie.genre}</p>
            <p><strong>Giá vé:</strong> {movie.price}</p>
            <button onClick={() => editMovie(movie)}>Sửa</button>
            <button onClick={() => deleteMovie(movie.id)}>Xóa</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieAdmin;
