"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Loader2, Github, Linkedin, Facebook, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { fadeInUp, buttonHover } from '@/lib/animations';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('jaysonbalbiran16@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      toast.error("Failed to copy to clipboard");
    });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success("Message sent successfully!");
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-light-blue/20 dark:bg-slate-900/30 relative border-t border-royal/10 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 xl:px-28">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information */}
          <motion.div {...fadeInUp} className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-[10px] font-bold uppercase tracking-widest mb-4 border border-gold/20">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-deep-navy dark:text-white mb-4 transition-colors duration-300">Let's Connect</h2>
              <p className="text-sm text-dark-gray dark:text-slate-400 font-medium leading-relaxed max-w-md transition-colors duration-300">
                Whether you have a project in mind, a question about my work, or just want to say hello, feel free to reach out. I'm always open to discussing new opportunities.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-white dark:bg-slate-800 border border-royal/20 dark:border-slate-700 flex items-center justify-center shadow-sm text-gold-dark dark:text-gold transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-dark-gray dark:text-slate-400 uppercase tracking-widest mb-0.5 transition-colors duration-300">Email Me At</div>
                  <div className="group flex items-center gap-2">
                    <a href="mailto:jaysonbalbiran16@gmail.com" className="text-sm font-bold text-deep-navy dark:text-white hover:text-gold dark:hover:text-gold transition-colors duration-300">
                      jaysonbalbiran16@gmail.com
                    </a>
                    <button 
                      onClick={handleCopy}
                      className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity p-1.5 rounded-md text-navy dark:text-slate-300 hover:text-gold dark:hover:text-gold bg-light-blue/50 dark:bg-slate-800 hover:bg-light-blue dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      aria-label="Copy email address"
                      title="Copy email"
                    >
                      {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                    </button>
                    <span className={`text-[10px] font-bold text-green-500 transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
                      Copied!
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-white dark:bg-slate-800 border border-royal/20 dark:border-slate-700 flex items-center justify-center shadow-sm text-gold-dark dark:text-gold transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-dark-gray dark:text-slate-400 uppercase tracking-widest mb-0.5 transition-colors duration-300">Call Me At</div>
                  <div className="group flex items-center gap-2">
                    <a href="tel:09957233738" className="text-sm font-bold text-deep-navy dark:text-white hover:text-gold dark:hover:text-gold transition-colors duration-300">
                      09957233738
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold text-dark-gray dark:text-slate-400 uppercase tracking-widest mb-4 transition-colors duration-300">Follow My Journey</div>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook className="h-4 w-4" />, href: "https://www.facebook.com/share/1BqcSrjY7Z/" },
                    { icon: <Github className="h-4 w-4" />, href: "https://github.com/Jayson25-BSIS" },
                    { icon: <Linkedin className="h-4 w-4" />, href: "https://ph.linkedin.com/in/balbiran-jayson-74a384311" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href}
                      className="h-10 w-10 rounded-xl bg-white dark:bg-slate-800 border border-royal/20 dark:border-slate-700 flex items-center justify-center text-deep-navy dark:text-slate-300 hover:bg-navy dark:hover:bg-slate-700 hover:text-white dark:hover:text-white hover:border-navy dark:hover:border-slate-600 transition-all duration-300 shadow-sm"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] border border-royal/10 dark:border-slate-800 shadow-xl shadow-navy/5 dark:shadow-none transition-colors duration-300"
          >
            <h3 className="text-xl font-black mb-6 text-deep-navy dark:text-white transition-colors duration-300">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-dark-gray dark:text-slate-400 transition-colors duration-300">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" className="h-12 rounded-xl bg-light-blue/50 dark:bg-slate-800 border-royal/20 dark:border-slate-700 focus-visible:ring-gold text-sm text-deep-navy dark:text-white transition-colors duration-300 placeholder:dark:text-slate-500" {...field} />
                      </FormControl>
                      <FormMessage className="dark:text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-dark-gray dark:text-slate-400 transition-colors duration-300">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Your Email Address" className="h-12 rounded-xl bg-light-blue/50 dark:bg-slate-800 border-royal/20 dark:border-slate-700 focus-visible:ring-gold text-sm text-deep-navy dark:text-white transition-colors duration-300 placeholder:dark:text-slate-500" {...field} />
                      </FormControl>
                      <FormMessage className="dark:text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-dark-gray dark:text-slate-400 transition-colors duration-300">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can I help you?" className="min-h-[120px] rounded-xl bg-light-blue/50 dark:bg-slate-800 border-royal/20 dark:border-slate-700 focus-visible:ring-gold p-4 text-sm resize-none text-deep-navy dark:text-white transition-colors duration-300 placeholder:dark:text-slate-500" {...field} />
                      </FormControl>
                      <FormMessage className="dark:text-red-400" />
                    </FormItem>
                  )}
                />
                <motion.div {...buttonHover} className="pt-2">
                  <Button type="submit" className="w-full h-12 rounded-xl text-xs font-black uppercase tracking-widest bg-gold text-deep-navy hover:bg-gold/90 transition-all shadow-md shadow-gold/20 dark:shadow-none" disabled={isSubmitting}>
                    {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;