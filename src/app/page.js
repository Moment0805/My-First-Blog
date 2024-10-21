import "./globals.css";
import Footer from "./component/Footer";
import Content from "./component/Content";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Content />
      </main>
      <Footer />
    </div>
  );
}
