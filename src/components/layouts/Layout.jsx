export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <header>
        <h1 className="text-gradient">Memora</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Created with ❤️ by Abdelrahman Elsayed</p>
      </footer>
    </>
  );
}
