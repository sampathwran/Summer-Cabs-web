"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function LatestBlogs() {
  const { t } = useLanguage();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(
          collection(db, 'blogs'),
          where('published', '==', true)
        );
        const snapshot = await getDocs(q);
        const blogData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Sort in JavaScript (avoid index issue)
        blogData.sort((a: any, b: any) => {
          const dateA = a.createdAt?.toMillis() || 0;
          const dateB = b.createdAt?.toMillis() || 0;
          return dateB - dateA;
        });

        // Get top 3 latest blogs
        setBlogs(blogData.slice(0, 3));
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading || blogs.length === 0) return null; // Don't show anything if loading or no blogs

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              {t('nav.blog')} & Travel Guides
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl">
              Discover Sri Lanka’s most beautiful destinations and learn why traveling with a private cab is the best choice.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 font-bold text-yellow-600 hover:text-yellow-700 transition">
            View All Posts <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col group border border-slate-100">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                {blog.coverImage ? (
                  <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">No Image</div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition leading-tight">
                  {blog.title}
                </h3>
                <p className="text-slate-600 mb-4 flex-1 line-clamp-3 text-sm">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-200">
                  {blog.author && <span className="flex items-center gap-1.5"><User size={12}/> {blog.author}</span>}
                  {blog.createdAt && (
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12}/> 
                      {new Date(blog.createdAt.toDate()).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
