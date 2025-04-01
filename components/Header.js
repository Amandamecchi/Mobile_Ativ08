export default function Header() {
    return (
      <header style={headerStyles.header}>
        <h1 style={headerStyles.titulo}>Meu Aplicativo</h1>
      </header>
    );
  }

  const headerStyles = {
    header: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  };