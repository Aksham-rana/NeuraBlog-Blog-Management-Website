import React from 'react'
import { assets } from '../../assets/assets';

const BlogTableItem = ({ blog, fetchBlogs, index }) => {

  const { title, createdAt, isPublished } = blog;
  const BlogDate = new Date(createdAt);

  return (
    <tr className='border-y border-gray-300 text-gray-700'>

      <th className='px-2 py-4 font-medium'>{index}</th>

      <td className='px-2 py-4'>{title}</td>

      <td className='px-2 py-4 max-sm:hidden'>
        {BlogDate.toDateString()}
      </td>

      {/* Status */}
      <td className='px-2 py-4 max-sm:hidden'>
        <p
          className={`font-medium ${
            isPublished
              ? 'text-green-600'
              : 'text-red-600'
          }`}
        >
          {isPublished ? 'Published' : 'Unpublished'}
        </p>
      </td>

      {/* Actions */}
      <td className='px-2 py-4 flex items-center gap-3 text-xs'>

        <button
          className={`px-2 py-0.5 rounded border
          transition-all cursor-pointer
          ${
            isPublished
              ? 'text-red-600 border-red-500 hover:bg-red-500/10'
              : 'text-green-600 border-green-500 hover:bg-green-500/10'
          }`}
        >
          {isPublished ? 'Unpublish' : 'Publish'}
        </button>

        <img
          src={assets.cross_icon}
          className='w-7 cursor-pointer
          hover:scale-110
          hover:drop-shadow-[0_0_4px_rgba(220,38,38,0.4)]
          transition-all'
          alt=''
        />
      </td>

    </tr>
  )
}

export default BlogTableItem
