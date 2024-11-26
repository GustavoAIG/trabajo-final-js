import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import '../styles/forum.css'; // Archivo CSS para estilos

const socket = io('http://localhost:4000');

const Forum = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    socket.on('new-comment', (commentData) => {
      setComments((prevComments) => [...prevComments, commentData]);
    });

    return () => {
      socket.off('new-comment');
    };
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const commentData = {
        text: newComment,
        timestamp: new Date().toLocaleString(),
      };
      socket.emit('new-comment', commentData);
      setNewComment('');
    }
  };

  return (
    <div className="forum-container">
      <h2 className="forum-title">Foro de Comentarios</h2>

      <form onSubmit={handleCommentSubmit} className="comment-form">
        
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe un comentario..."
          rows="4"
          cols="50"
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
            <p className="comment-text">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
