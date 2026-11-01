import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 — Page Not Found</h1>
      <p>Мұндай бет жоқ.</p>
      <Link to="/">← Басты бетке қайту</Link>
    </div>
  );
}