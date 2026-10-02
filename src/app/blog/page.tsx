"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Calendar, User, ChevronRight } from 'lucide-react';

export default function BlogList() {
  const { t } = useLanguage();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(
          collection(db, 'blogs'),
          where('published', '==', true),
          orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        const blogData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">{t('nav.blog')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover travel tips, local guides, and everything you need for your perfect Sri Lankan holiday.
          </p>
        </div>
      </div>

      {/* Blog List */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-16">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col group">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  {blog.coverImage ? (
                    <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">No Image</div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition">{blog.title}</h2>
                  <p className="text-slate-600 mb-4 flex-1 line-clamp-3">{blog.excerpt}</p>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 text-sm text-slate-500">
                    <div className="flex items-center gap-4">
                      {blog.author && <span className="flex items-center gap-1.5"><User size={14}/> {blog.author}</span>}
                      {blog.createdAt && (
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14}/> 
                          {new Date(blog.createdAt.toDate()).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No Posts Yet</h3>
            <p className="text-slate-500">Check back later for exciting travel stories and guides!</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
