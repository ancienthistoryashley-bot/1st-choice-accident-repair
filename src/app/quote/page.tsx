"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, X, Car, FileText, CheckCircle, Send } from "lucide-react";

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Vehicle details
    make: "",
    model: "",
    year: "",
    reg: "",
    // Damage details
    damageArea: "",
    damageDescription: "",
    // Contact details
    name: "",
    email: "",
    phone: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-strong rounded-2xl p-12"
          >
            <div className="w-20 h-20 rounded-full bg-[#ff6b35]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#ff6b35]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Quote Request Received!
            </h2>
            <p className="text-white/60 mb-6">
              Thank you for your quote request. We'll review the details and photos 
              and get back to you within 24 hours.
            </p>
            <a href="/" className="btn-primary inline-flex">
              Back to Home
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-[#ff6b35] font-medium">GET A QUOTE</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2">
              Free No Obligation Quote
            </h1>
            <p className="text-xl text-white/60 mt-4 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: "Vehicle" },
              { num: 2, label: "Damage" },
              { num: 3, label: "Contact" },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step >= s.num
                      ? "bg-[#ff6b35] text-white"
                      : "glass text-white/40"
                  }`}
                >
                  {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
                </div>
                <span
                  className={`ml-2 text-sm hidden sm:block ${
                    step >= s.num ? "text-white" : "text-white/40"
                  }`}
                >
                  {s.label}
                </span>
                {i < 2 && (
                  <div
                    className={`w-16 sm:w-24 h-0.5 mx-2 ${
                      step > s.num ? "bg-[#ff6b35]" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-8">
        <div className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Vehicle Details */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Car className="w-6 h-6 text-[#ff6b35]" />
                  <h2 className="text-2xl font-bold text-white">Vehicle Details</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Make *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.make}
                      onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#ff6b35] transition-colors"
                      placeholder="e.g., Ford, BMW, Toyota"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Model *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#ff6b35] transition-colors"
                      placeholder="e.g., Focus, 3 Series, Corolla"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Year *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#ff6b35] transition-colors"
                      placeholder="e.g., 2022"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Registration
                    </label>
                    <input
                      type="text"
                      value={formData.reg}
                      onChange={(e) => setFormData({ ...formData, reg: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#ff6b35] transition-colors"
                      placeholder="e.g., AB12 XYZ"
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="button" onClick={nextStep} className="btn-primary">
                    Next Step
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Damage Details */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-[#ff6b35]" />
                  <h2 className="text-2xl font-bold text-white">Damage Details</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Area of Damage *
                    </label>
                    <select
                      required
                      value={formData.damageArea}
                      onChange={(e) => setFormData({ ...formData, damageArea: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ff6b35] transition-colors"
                    >
                      <option value="" className="bg-[#0a0a0a]">Select area...</option>
                      <option value="front" className="bg-[#0a0a0a]">Front</option>
                      <option value="rear" className="bg-[#0a0a0a]">Rear</option>
                      <option value="side" className="bg-[#0a0a0a]">Side</option>
                      <option value="roof" className="bg-[#0a0a0a]">Roof</option>
                      <option value="multiple" className="bg-[#0a0a0a]">Multiple Areas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Description of Damage *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.damageDescription}
                      onChange={(e) => setFormData({ ...formData, damageDescription: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#ff6b35] transition-colors resize-none"
                      placeholder="Please describe the damage in detail..."
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Upload Photos (Recommended)
                    </label>
                    <p className="text-white/40 text-sm mb-3">
                      4 corners of vehicle + front + rear + area of damage
                    </p>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-[#ff6b35] transition-colors"
                    >
                      <Upload className="w-10 h-10 text-white/40 mx-auto mb-3" />
                      <p className="text-white/60">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-white/40 text-sm mt-1">
                        PNG, JPG up to 10MB each
                      </p>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between glass rounded-lg px-4 py-2"
                          >
                            <span className="text-white/80 text-sm truncate">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-white/40 hover:text-red-400"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="btn-secondary">
                    Back
                  </button>
                  <button type="button" onClick={nextStep} className="btn-primary">
                    Next Step
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Send className="w-6 h-6 text-[#ff6b35]" />
                  <h2 className="text-2xl font-bold text-white">Your Details</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#ff6b35] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#ff6b35] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#ff6b35] transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="btn-secondary">
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Quote
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}