"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/constants";
import { Send } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setisSubmitting] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setisSubmitting(true);
    try {
      await emailjs.send(
        // (SERVIÇO ID)
        "service_7aakfrn",
        // (TEMPLATE ID)
        "template_3yfnohh",
        data,
        // (CHAVE PÚBLICA)
        "vZynlgksBqR_lusUB"
      );
      reset();
      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Erro ao enviar mensagem!");
    }
    setisSubmitting(false);
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:flex-row-reverse">
          {/* INFORMAÇÕES DE CONTATO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 order-1 lg:order-2 "
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className={`p-4 rounded-xl ${info.bg}`}>{info.icon}</div>
                <div className="">
                  <h3 className="text-[#00ffd5]/70 mb-1">{info.title}</h3>
                  <p className="text-xl">{info.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* FORMULÁRIO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900/50 p-8 rounded-2xl lg:order-1"
          >
            <h2 className="text-3xl font-bold text-[#00ffd5] mb-4">
              Entre em contato!
            </h2>
            <p className="text-gray-400 mb-8 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dolores necessitatibus, consectetur et ex quas!
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("firstName", { required: true })}
                    placeholder="Nome"
                    className="w-full bg-gray-800 rounded-lg p-3 text-white border border-gray-700 focus:border-[#00ffd5] focus:outline-none"
                  />
                  {formState.errors.firstName && (
                    <span className="text-red-500 text-sm">
                      Nome é obrigatório!
                    </span>
                  )}
                </div>
                <div>
                  <input
                    {...register("lastName", { required: true })}
                    placeholder="Sobrenome"
                    className="w-full bg-gray-800 rounded-lg p-3 text-white border border-gray-700 focus:border-[#00ffd5] focus:outline-none"
                  />
                  {formState.errors.lastName && (
                    <span className="text-red-500 text-sm">
                      Sobrenome é obrigatório!
                    </span>
                  )}
                </div>
              </div>

              <input
                {...register("email", { required: true, pattern: /^\S+@\S+$/ })}
                placeholder="Endereço de email"
                className="w-full bg-gray-800 rounded-lg p-3 text-white border border-gray-700 focus:border-[#00ffd5] focus:outline-none"
              />

              <input
                {...register("phone")}
                placeholder="Número de telefone"
                className="w-full bg-gray-800 rounded-lg p-3 text-white border border-gray-700 focus:border-[#00ffd5] focus:outline-none"
              />

              <select
                {...register("service")}
                className="w-full bg-gray-800 rounded-lg p-3 text-white border border-gray-700 focus:border-[#00ffd5] focus:outline-none"
              >
                <option value="">Selecione um serviço</option>
                <option value="web">Desenvolvimento Web</option>
                <option value="design">Design UI/UX</option>
                <option value="seo">SEO</option>
              </select>

              <textarea
                {...register("message", { required: true })}
                placeholder="Digite a sua mensagem aqui."
                rows={6}
                className="w-full bg-gray-800 rounded-lg p-3 text-white border border-gray-700 focus:border-[#00ffd5] focus:outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 3 }}
                disabled={isSubmitting}
                className="flex items-center gap-4 bg-[#00ffd5] text-gray-950 px-8 py-3 rounded-full border border-transparent font-bold hover:bg-[#00ffd5]/10 hover:text-[#00ffd5] hover:border hover:border-[#00ffd5] transition-colors duration-500 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
