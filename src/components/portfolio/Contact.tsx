"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Loader2 } from 'lucide-react';
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
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-sm md:text-base font-medium mb-8 leading-relaxed">
              Have a project in mind or just want to say hello? Feel free to reach out.
            </p>
            
            <div className="space-y-5">
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 cursor-default">
                <div className="h-10 w-10 rounded-xl bg-white border border-border flex items-center justify-center shadow-sm">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-[7px] font-black text-muted-foreground uppercase tracking-widest mb-0.5">Email</div>
                  <div className="text-sm font-bold text-black">ronienaungayan828@gmail.com</div>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 cursor-default">
                <div className="h-10 w-10 rounded-xl bg-white border border-border flex items-center justify-center shadow-sm">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-[7px] font-black text-muted-foreground uppercase tracking-widest mb-0.5">Phone</div>
                  <div className="text-sm font-bold text-black">09486827293</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-6 rounded-[1.5rem] border border-border shadow-xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[8px] font-black uppercase tracking-widest">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" className="h-11 rounded-lg bg-accent/30 border-none focus-visible:ring-primary text-xs" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[8px] font-black uppercase tracking-widest">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your Email" className="h-11 rounded-lg bg-accent/30 border-none focus-visible:ring-primary text-xs" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[8px] font-black uppercase tracking-widest">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your Message" className="min-h-[100px] rounded-lg bg-accent/30 border-none focus-visible:ring-primary p-3 text-xs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <motion.div {...buttonHover}>
                  <Button type="submit" className="w-full h-12 rounded-full text-[10px] font-black uppercase tracking-widest bg-black text-white hover:bg-primary transition-all" disabled={isSubmitting}>
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