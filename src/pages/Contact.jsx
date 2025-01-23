import { useState } from "react";
import { Mail, Phone, Building2, MapPin, Instagram, Github, Linkedin } from 'lucide-react';
import { FaArrowTurnDown } from "react-icons/fa6";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f7318c1-3c9d-4abc-9ad5-d3259cfa9940");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    services: ''
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (

    
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
              name="services"
              value={formData.services}
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
  )
}

export default Contact