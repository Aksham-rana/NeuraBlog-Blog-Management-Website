import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'

const BlogList = () => {

  const [menu, setMenu] = useState('All')

  return (
    <div>

      {/* Category Filter */}
      <div className='flex flex-wrap justify-center gap-3 sm:gap-6 my-12 relative'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              onClick={() => setMenu(item)}
              className={`relative z-10 cursor-pointer
              text-sm sm:text-base px-4 py-1.5 rounded-full
              transition-all duration-200
              ${
                menu === item
                  ? 'text-white font-medium'
                  : 'text-gray-500 hover:text-red-600'
              }`}
            >
              {item}

              {menu === item && (
                <motion.div
                  layoutId='underline'
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className='absolute inset-0 -z-10
                  bg-red-600 rounded-full
                  shadow-sm shadow-green-500/25'
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5
      gap-8 mb-24 mx-4 sm:mx-10 xl:mx-20 2xl:mx-28'>
        {blog_data
          .filter((blog) => (menu === 'All' ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>

    </div>
  )
}

export default BlogList
