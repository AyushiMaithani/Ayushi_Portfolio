import { useState } from "react";
import { Mail, Phone, Building2, MapPin, Instagram, Github, Linkedin } from 'lucide-react';
import { FaArrowTurnDown } from "react-icons/fa6";
import { X } from 'lucide-react';

function Contact() {
  const [result, setResult] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const onSubmit = async (event) => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setShowSuccessDialog(true);
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key",import.meta.env.VITE_API_KEY );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
  <>
    {showSuccessDialog && (
      <div className="fixed font-mono inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
          <button onClick={() => setShowSuccessDialog(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-6">Thank you for reaching out. I'll get back to you soon!</p>
            <button onClick={() => setShowSuccessDialog(false)} className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 font-mono">
              Okay
            </button>
          </div>
        </div>
      </div>
    )}
    

    
    <div className="p-10 text-zinc-100 bg-[#141516] text-6xl font-mono">
        <div  className="max-w-6xl mx-auto ">
        <h2 className="mx-auto text-6xl font-mono py-10  flex items-center">
              <FaArrowTurnDown className="mr-2 mb-4" /> Contact Me
        </h2>
            <p className="text-xl text-zinc-100 mb-16">
              Feel free to reach out to me for any queries or collaborations.
            </p>
    <div className="grid md:grid-cols-[2fr,1fr] gap-20 max-w-6xl mx-auto text-2xl">
      <form onSubmit={onSubmit} className="space-y-12">
        <div className="space-y-6">
          <div>
            <div className="text-zinc-500 mb-1">01</div>
            <label className="text-2xl font-light block mb-4">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-zinc-700 py-2 text-xl focus:outline-none focus:border-white transition-colors"
              placeholder="John Doe *"
              required
            />
          </div>

          <div>
            <div className="text-zinc-500 mb-1">02</div>
            <label className="text-2xl font-light block mb-4">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-zinc-700 py-2 text-xl focus:outline-none focus:border-white transition-colors"
              placeholder="example@one.com *"
              required
            />
          </div>

          <div>
            <div className="text-zinc-500 mb-1">03</div>
            <label className="text-2xl font-light block mb-4">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-zinc-700 py-2 text-xl focus:outline-none focus:border-white transition-colors"
              placeholder="Message*"
              rows={1}
            />
          </div>

          <div className="pt-12">
            <button
              type="submit"
              className="relative px-8 py-4 overflow-hidden rounded-lg text-white hover:bg-zinc-800  bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="relative z-10 flex items-center justify-center text-lg font-medium ">
                Send Message
              </div>
            </button>
          </div>
        </div>
      </form>

      <div className="space-y-16">
        <div className="text-zinc-500">
          <h3 className="text-sm mb-6">CONTACT DETAILS</h3>
          <div className="space-y-4">
            <a href="mailto:ayushimaithani04@gmail.com" className="block text-lg hover:text-zinc-300 transition-colors">
              <Mail className="inline-block mr-2" size={18} />
              ayushimaithani04@gmail.com
            </a>
            <a href="https://www.google.com/maps?q=India" target="_blank" className="flex items-start text-lg  hover:text-zinc-300 transition-colors">
              <MapPin className="inline-block mr-2 mt-1 " size={18} />
              Location: India
            </a>
            
          </div>
        </div>

        <div className="text-zinc-500">
          <h3 className="text-sm mb-6">SOCIALS</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Contact