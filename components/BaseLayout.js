
import Container from "./Container";
import Header from "./Header";


export default function BaseLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-4">
        <Container>
          {children}
        </Container>
      </main>

      <footer>>
        <Container>
          <div className="border-t py-4">
            <p>
              Copyright 2022 {process.env.NEXT_PUBLIC_APP_NAME}</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

