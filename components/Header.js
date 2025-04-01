export default function Header() {
    return (
      <header style={headerStyles.header}>
        <h1 style={headerStyles.titulo}>Não há Ferrolhos</h1>
      </header>
    );
  }

  const headerStyles = {
    header: {
      backgroundColor: '#7c1424',
      color: 'white',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw', 
      margin: 0, 
    },
    titulo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  };