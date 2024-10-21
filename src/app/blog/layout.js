import '../globals.css';
import { BlogProvider } from '../context/BlogContext';

export default function RootLayout({ children }) {
    return (
      <div className="flex flex-col min-h-screen">
        <BlogProvider>
        {children}
      </BlogProvider>
      </div>
    )
  }
  