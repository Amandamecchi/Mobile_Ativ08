export function Card({ title, description }) {
    return (
        <div style={styles.container}>
            <h2 style={styles.titulo}>{title}</h2>
            <p style={styles.texto}>{description}</p>
        </div>
    );
}

const styles = {
    container: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      margin: '8px',
      backgroundColor: 'white',
    },
    titulo: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    texto: {
      color: '#555',
    },
  };