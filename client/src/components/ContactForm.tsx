import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Instagram } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto border-card-border">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✓</span>
          </div>
          <h2 className="text-3xl font-bold mb-4" data-testid="text-success-title">Message Sent!</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)} data-testid="button-send-another">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="border-card-border">
          <CardHeader className="space-y-0 pb-2">
            <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-muted-foreground">Have a question? We'd love to hear from you.</p>
          </CardHeader>
          <CardContent className="pb-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} data-testid="input-name" />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          className="min-h-[150px]"
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full font-semibold" size="lg" data-testid="button-submit">
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Whether you have questions about our services, pricing, or want to learn more about mobile recovery, we're here to help.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Email</h3>
              <a
                href="mailto:Ryan@onflex.fit"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
                <span>Ryan@onflex.fit</span>
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Social Media</h3>
              <a
                href="https://instagram.com/onflex"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
                <span>@onflex</span>
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Service Area</h3>
              <p className="text-muted-foreground">
                Currently serving Pittsburgh, PA and surrounding areas. Contact us to confirm coverage for your location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
