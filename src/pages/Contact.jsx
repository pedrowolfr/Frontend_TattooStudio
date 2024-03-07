import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { contactData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
  const { title, info, form } = contactData;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      toast.warning("Complete los campos");
      return;
    }

    emailjs
      .sendForm(
        "service_qevys6f",
        "template_sznblav",
        e.target,

        "WLNSKQkAGmFbiGO9Y"
      )
      .then(
        (response) => {
          console.log("Email Enviado", response.status, response.text);
          setEmail("");
          setMessage("");
          setName("");
          toast.success("Email enviado");
        },
        (err) => {
          console.log("Erro: ", err);
          toast.error("Email no enviado.");
        }
      );
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          {/* texto */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1"
          >
            {/* title */}
            <h2 className="h2 max-w-[490px]">{title}</h2>
            {/* informacion */}
            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              {info.map((item, i) => {
                const { title, subtitle, address, phone, email, cel } = item;

                return (
                  <div key={i}>
                    {/* title */}
                    <div className="mb-3 text-xl font-medium uppercase font-primary">
                      {title}
                    </div>
                    {/* subtitle */}
                    <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">
                      {subtitle}
                    </div>
                    {/* contact */}
                    <div className="flex flex-col mb-8 gap-y-3">
                      <div className="flex items-center gap-[10px]">
                        <div>{address.icon}</div>
                        <div className="font-medium">{address.name}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>{phone.icon}</div>
                        <div className="font-medium">{phone.number}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>{cel.icon}</div>
                        <div className="font-medium">{cel.number}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>{email.icon}</div>
                        <div className="font-medium">{email.address}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 xl:pl-[40px] flex justify-center items-center"
          >
            <form
              onSubmit={sendEmail}
              className="flex flex-col w-full gap-y-10"
            >
              {/* fields */}
              <input
                type="text"
                value={name}
                name="from_name"
                onChange={(e) => setName(e.target.value)}
                placeholder={form.name}
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                style={{
                  borderColor: "black",
                  borderStyle: "solid",
                  borderWidth: "0 0 1px 0",
                }}
              />
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={form.email}
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                style={{
                  borderColor: "black",
                  borderStyle: "solid",
                  borderWidth: "0 0 1px 0",
                }}
              />
              <input
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={form.message}
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                style={{
                  borderColor: "black",
                  borderStyle: "solid",
                  borderWidth: "0 0 1px 0",
                }}
              />
              {/* send button */}
              <button className="self-start btn btn-sm btn-dark rounded-xl">
                {form.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}