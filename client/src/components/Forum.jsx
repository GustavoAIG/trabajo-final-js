import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import '../styles/forum.css'; // Archivo CSS para estilos

const socket = io('https://backend-mongo-in5c.onrender.com/');

const Forum = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState(''); // Aquí podemos capturar el nombre de usuario

  useEffect(() => {
    // Obtener todos los comentarios desde el servidor al conectarse
    socket.on('all-comments', (commentsData) => {
      setComments(commentsData);
    });

    socket.on('new-comment', (commentData) => {
      setComments((prevComments) => [...prevComments, commentData]);
    });

    return () => {
      socket.off('new-comment');
      socket.off('all-comments');
    };
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && username.trim()) {
      const commentData = {
        username: username,
        text: newComment,
        timestamp: new Date().toLocaleString(),
      };
      // Enviar el nuevo comentario al servidor
      socket.emit('new-comment', commentData);
      setNewComment('');
    } else {
      alert('Por favor, ingresa un comentario y un nombre de usuario');
    }
  };

  return (
    <div className="forum-container">
      <h2 className="forum-title">Foro de Comentarios</h2>

      <form onSubmit={handleCommentSubmit} className="comment-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Tu nombre"
          className="comment-input"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe un comentario..."
          rows="4"
          className="comment-input"
        ></textarea>
        <button type="submit" className="comment-button">
          Comentar
        </button>
      </form>

      <div className="comments-section">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p className="comment-timestamp">{comment.timestamp}</p>
            <p className="comment-username"><strong>{comment.username}</strong></p>
            <p className="comment-text">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
