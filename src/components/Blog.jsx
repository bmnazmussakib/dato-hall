import React from 'react';

const BlogCard = ({ category, comments, title, imageUrl, date }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
    <div className="relative">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="absolute bottom-[-20px] right-6 bg-slate-900 text-white text-center rounded-md p-2 w-16">
        <span className="text-2xl font-bold block">{date.day}</span>
        <span className="text-xs font-semibold block">{date.month}</span>
      </div>
    </div>
    <div className="p-8">
      <p className="text-sm text-slate-500 mb-2">
        <span className="text-lime-600 font-semibold">{category}</span> • {comments} Comments
      </p>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-lime-600 transition-colors">
        {title}
      </h3>
    </div>
  </div>
);

const Blog = () => {
  const posts = [
    {
      category: 'HYDROPOWER',
      comments: 0,
      title: 'How sustainable hydropower can promote biodiversity',
      imageUrl: 'https://picsum.photos/seed/blog1/400/250',
      date: { day: '16', month: 'NOV' },
    },
    {
      category: 'HYDROPOWER',
      comments: 0,
      title: 'What is the potential of hydroelectric power',
      imageUrl: 'https://picsum.photos/seed/blog2/400/250',
      date: { day: '16', month: 'NOV' },
    },
    {
      category: 'HYDROPOWER',
      comments: 0,
      title: 'What effects does hydropower have on the environment?',
      imageUrl: 'https://picsum.photos/seed/blog3/400/250',
      date: { day: '16', month: 'NOV' },
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-lime-600 font-semibold tracking-wider mb-2">READ OUR BLOG</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Latest News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => <BlogCard key={post.title} {...post} />)}
        </div>
        <div className="text-center mt-12">
          <button className="bg-lime-500 text-white font-bold py-3 px-8 rounded-full hover:bg-lime-600 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
