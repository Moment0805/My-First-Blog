import Header from '../component/Header';
import Footer from '../component/Footer';
import BlogList from './BlogList';

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950"
    >
      <Header />
      <main className="flex-grow mt-44 justify-center items-center">
        <BlogList />
      </main>
      <Footer />
    </div>
  );
}