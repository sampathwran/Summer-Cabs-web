"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const q = query(collection(db, 'blogs'), where('slug', '==', slug));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          setBlog({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() });
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <div className="flex-1 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <div className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Post Not Found</h1>
          <p className="text-slate-600 mb-8">The article you are looking for does not exist or has been removed.</p>
          <Link href="/blog" className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-xl hover:bg-yellow-500 transition">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      {/* Header Image */}
      <div className="w-full h-[40vh] md:h-[50vh] bg-slate-900 relative mt-20">
        {blog.coverImage ? (
          <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover opacity-60" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 font-semibold mb-6 hover:text-yellow-300 transition">
              <ArrowLeft size={20} /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm md:text-base font-medium">
              {blog.author && <span className="flex items-center gap-2"><User size={18}/> {blog.author}</span>}
              {blog.createdAt && (
                <span className="flex items-center gap-2">
                  <Calendar size={18}/> 
                  {new Date(blog.createdAt.toDate()).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
        <article className="prose prose-slate prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-a:text-yellow-600 hover:prose-a:text-yellow-700 prose-img:rounded-2xl">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </article>
      </div>

      <Footer />
    </div>
  );
}
