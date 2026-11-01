import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div>
      <Header name="Ақбота Нұршат" role="Frontend Developer" />
      <main>
        <Outlet />
      </main>
      <Footer email="botanurrr@gmail.com" />
    </div>
  );
}