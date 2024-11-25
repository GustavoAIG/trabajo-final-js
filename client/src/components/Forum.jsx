import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

// Establecer conexión con el servidor WebSocket
const socket = io('http://localhost:4000');

const Forum = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Escuchar los comentarios nuevos
    socket.on('new-comment', (commentData) => {
      setComments((prevComments) => [...prevComments, commentData]);
    });

    return () => {
      // Limpiar el socket cuando el componente se desmonte
      socket.off('new-comment');
    };
  }, []);

  // Enviar un nuevo comentario
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const commentData = {
        text: newComment,
        timestamp: new Date().toLocaleString(),
      };

      // Emitir el nuevo comentario al servidor
      socket.emit('new-comment', commentData);

      setNewComment(''); // Limpiar el campo del comentario
    }
  };

  return (
    <div>
      <h2>Foro de Comentarios</h2>

      {/* Formulario de nuevo comentario */}
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe un comentario..."
          rows="4"
          cols="50"
        ></textarea>
        <button type="submit">Comentar</button>
      </form>

      {/* Mostrar los comentarios */}
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p><strong>{comment.timestamp}</strong></p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
