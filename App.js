import Header from './components/Header';
import { Card } from './components/Card';

export default function Home() {
  return (
<div>
      <Header />
      <div className={styles.container}>
        <Card title="Card 1" description="primeiro" />
        <Card title="Card 2" description="segundo" />
        <Card title="Card 3" description="terceiro" />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
  },
};