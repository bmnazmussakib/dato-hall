import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ category, comments, title, imageUrl, date, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true, amount: 0.2 }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="relative overflow-hidden">
      <motion.img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute bottom-[-20px] right-6 bg-slate-900 text-white text-center rounded-md p-2 w-16">
        <span className="text-2xl font-bold block">{date.day}</span>
        <span className="text-xs font-semibold block">{date.month}</span>
      </div>
    </div>
    <div className="p-8">
      <p className="text-sm text-slate-500 mb-2">
        <span className="text-[#27ad4c] font-semibold">{category}</span> • {comments} Comments
      </p>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-[#27ad4c] transition-colors">
        {title}
      </h3>
    </div>
  </motion.div>
);

const Blog = () => {
  const posts = [
    {
      category: "HYDROPOWER",
      comments: 0,
      title: "How sustainable hydropower can promote biodiversity",
      imageUrl: "https://picsum.photos/seed/blog1/400/250",
      date: { day: "16", month: "NOV" },
    },
    {
      category: "HYDROPOWER",
      comments: 0,
      title: "What is the potential of hydroelectric power",
      imageUrl: "https://picsum.photos/seed/blog2/400/250",
      date: { day: "16", month: "NOV" },
    },
    {
      category: "HYDROPOWER",
      comments: 0,
      title: "What effects does hydropower have on the environment?",
      imageUrl: "https://picsum.photos/seed/blog3/400/250",
      date: { day: "16", month: "NOV" },
    },
  ];

  return (
    <section className="lg:py-24 md:py-16 py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#27ad4c] font-semibold tracking-wider mb-2">
            READ OUR BLOG
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Latest News
          </h2>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.title} {...post} index={index} />
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-[#27ad4c] text-white font-bold py-3 px-8 rounded-full hover:bg-[#1e8c3c] transition-colors">
            Read More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
