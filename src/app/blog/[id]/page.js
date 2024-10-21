"use client";
import { useParams } from 'next/navigation';

const BlogPost = () => {
  const { id } = useParams();
  const posts = [
    {
      id: '1',
      title: 'The Journey of a Web Developer: From Novice to Expert',
      content: `In the fast-paced world of technology, the journey of a web developer is both exciting and challenging. From the moment I wrote my first line of code to building complex web applications, every step has been a learning experience.
Starting as a novice, I dabbled in HTML and CSS, amazed by how simple tags could create beautiful layouts. The thrill of seeing my work come to life in a browser ignited a passion that continues to drive me today. However, the journey was not without obstacles. I faced numerous challenges, from debugging code to learning new frameworks. Each hurdle taught me resilience and the importance of continuous learning.

As I progressed, I delved into JavaScript, transforming static websites into dynamic, interactive experiences. Embracing frameworks like React and Next.js further enhanced my skills, allowing me to create seamless user interfaces. Along the way, I discovered the significance of community and collaboration. Engaging with fellow developers through forums and meetups provided invaluable insights and encouragement.

Today, as I reflect on my journey, I am grateful for every lesson learned and every project completed. The path of a web developer is ever-evolving, and I am excited about the future, ready to embrace new challenges and opportunities. Join me as I explore the latest trends and technologies shaping the world of web development.`
    },
    {
      id: '2',
      title: 'Essential Tools for Every Web Developer',
      content: `As a web developer, having the right tools can make all the difference in productivity and efficiency. Over the years, I've experimented with various software and resources that have significantly improved my workflow. Here are some essential tools that I believe every web developer should consider adding to their toolkit.

1. Visual Studio Code: This powerful code editor is a favorite among developers for its speed and versatility. With numerous extensions available, it can be customized to suit any coding style, making it easier to write and manage code.

2. Git and GitHub: Version control is crucial for any developer, and Git paired with GitHub provides an excellent solution for tracking changes in projects. It not only helps in managing code but also facilitates collaboration with others.

3. Browser Developer Tools: Whether you're using Chrome, Firefox, or Safari, each browser comes equipped with developer tools that are invaluable for debugging and testing. Inspect elements, monitor network requests, and test responsive designs seamlessly.

4. Figma: For front-end developers, Figma is a fantastic tool for designing user interfaces. Its collaborative features allow teams to work together in real time, ensuring that everyone is on the same page.

5. Postman: When working with APIs, Postman simplifies the process of testing and developing RESTful services. It provides a user-friendly interface for sending requests and analyzing responses, making it easier to troubleshoot.

6. Slack: Communication is key in any development team. Slack offers an organized platform for team collaboration, allowing for quick discussions and file sharing, keeping everyone in sync.

In conclusion, the right tools can significantly enhance a developer's workflow. As technology evolves, so do our tools, and it's essential to stay updated with the latest resources available. In my next post, I'll delve deeper into how these tools have impacted my development process and share tips on how to make the most of them. Stay tuned!`
    }
  ];

 const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div className="text-center py-10">Loading...</div>;
  }
  return (
    <div className="min-h-screen py-10 px-5 bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">{post.title}</h1>
        
        <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">
          {post.content}
        </p>

       
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Read More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
