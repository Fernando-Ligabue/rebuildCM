import { footerLogos } from "@/lib/constants";
import { X } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "", // Honeypot field
  });
  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState("Enviar");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const { name, email, phone, message, honeypot } = formData;

    if (honeypot) {
      toast.warning("Envio inválido.");
      setStatus("Enviar");
      return;
    }

    if (!name || !email || !phone || !message) {
      toast.warning("Por favor, preencha todos os campos!");
      setStatus("Enviar");
      return;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (name.length < 5 || name.length > 50) {
        toast.warning("O nome deve ter entre 5 e 50 caracteres.");
        setStatus("Enviar");
        return;
      }
  
      if (!emailRegex.test(email)) {
        toast.warning("Formato de email inválido.");
        setStatus("Enviar");
        return;
      }
  
      if (!phoneRegex.test(phone) || phone.length > 15) {
        toast.warning("Telefone inválido.");
        setStatus("Enviar");
        return;
      }
  
      if (message.length > 1000) {
        toast.warning("A mensagem deve ter no máximo 1000 caracteres.");
        setStatus("Enviar");
        return;
      }
  

    try {
      await axios.post("https://private-sendemail.vercel.app/send_email", {
        name,
        email,
        phone,
        message,
      });
      toast.success("Solicitação de Marcação de Reunião enviada com sucesso!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        honeypot: "",
      });
    } catch {
      toast.error("Algo correu mal! Tente novamente mais tarde.");
    } finally {
      setStatus("Enviar");
    }
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div id="reuniao" className="bg-black w-full h-full py-28 pb-0 flex flex-col justify-center items-center">
      <h2 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" className="text-4xl text-white font-light">
        Marcação de Reunião
      </h2>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1700" className="text-sm text-white font-light text-center">
        A Creative Minds apenas presta serviços a empresas / profissionais
      </p>
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1800"
        className="w-full max-w-[1200px] h-full mx-auto flex flex-wrap justify-evenly items-center gap-2 mt-5 mb-16"
      >
        <form id="schedulle" onSubmit={handleSubmit} className="w-full max-w-[750px] flex flex-col gap-2 p-6">
          <div className="w-full flex">
            <input
              className="w-full h-[50px] rounded-md p-1 outline-none"
              type="text"
              id="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2 ">
            <input
              className="w-full h-[50px] rounded-md p-1 outline-none flex"
              type="text"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="w-full h-[50px] rounded-md p-1 outline-none"
              type="text"
              id="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex">
            <textarea
              className="w-full resize-none rounded-md p-1 outline-none h-24"
              id="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {/* Honeypot field */}
          <div style={{ display: "none" }}>
            <input
              type="text"
              id="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              placeholder="Leave this field empty"
            />
          </div>
          <p className="text-sm text-center text-white font-light">
            Ao enviar este formulário declara aceitar os termos e condições.<br /> Saiba mais{" "}
            <span className="cursor-pointer" onClick={handleModalOpen}>
              aqui
            </span>
            .
          </p>

          <button
            className="text-white font-medium p-3 cursor-pointer border border-white w-full max-w-[220px] mx-auto mt-3 bg-zinc-800 hover:bg-black"
            type="submit"
            disabled={!!formData.honeypot}
          >
            {status}
          </button>
        </form>
      </div>
      <div className="flex mx-auto gap-5">
        {footerLogos.map((logo) => (
          <img key={logo.id} src={logo.logo} alt="contatos" className="w-full max-w-[75px] h-full rounded-md" />
        ))}
      </div>

      {/* modal termos e condições */}
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full p-5 flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="bg-white px-5 py-8 rounded-md w-full max-w-[650px] xl:max-w-[1080px] max-h-[95vh] overflow-auto relative">
            <div className="flex flex-col flex-wrap justify-center items-center">
              <span className="w-full flex justify-end absolute top-5 right-5">
                <X size={40} className="text-black cursor-pointer text-right" onClick={handleModalClose} />
              </span>
              <div className="w-full flex flex-col justify-center items-center gap-1">
                <h4 className="w-full text-3xl text-black font-semibold text-left p-1">Termos e Condições</h4>
                <p className="text-black w-full text-left p-1">
                  1. Os dados pessoais recolhidos (nome, email, telefone) serão utilizados unicamente para a resposta ao
                  seu pedido de Marcação de Reunião, para a sociedade Creative Minds – Soluções Globais de Comunicação,
                  Marketing e Gestão, Lda., após obtermos o seu consentimento prévio e expresso.
                </p>

                <p className="text-black w-full text-left p-1">
                  2. A Creative Minds – Soluções Globais de Comunicação, Marketing e Gestão, Lda., adiante Creative
                  Minds, com o NIPC 507431405 e sede no Edifício Mar do Oriente, Alameda dos Oceanos, n.º 61, 3.2, Parque
                  das Nações, 1990-208 Lisboa, é a responsável pelo tratamento.
                </p>

                <p className="text-black w-full text-left p-1">
                  3. O dado pessoal 'email' é de preenchimento obrigatório, pelo que sem este dado não poderemos realizar
                  o seu pedido.
                </p>

                <p className="text-black w-full text-left p-1">
                  4. Os restantes dados (nome e telefone) permitem-nos personalizar o contacto e estabelecer um contacto
                  telefónico para esclarecimento de dúvidas, caso seja necessário.
                </p>

                <p className="text-black w-full text-left p-1">
                  5. Os dados em questão não serão utilizados para nenhuma outra finalidade, sendo conservados pela
                  Creative Minds durante 2 (dois) anos.
                </p>

                <p className="text-black w-full text-left p-1">
                  6. Poderá exercer os seus direitos previstos na legislação (acesso, retificação, apagamento, limitação,
                  oposição, portabilidade) através de contacto escrito para o seguinte email{" "}
                  <a href="mailto:protecaodados@creative-minds.pt" className="text-zinc-500 hover:text-black">
                    {" "}
                    protecaodados@creative-minds.pt
                  </a>
                  , sem prejuízo do direito a apresentar reclamação à autoridade de controlo competente.
                </p>

                <p className="text-black w-full text-left p-1">
                  7. Quando nos envia os seus dados pessoais, estes serão protegidos através de protocolos de segurança
                  adequados às comunicações via internet.
                </p>

                <p className="text-black w-full text-left p-1">8. A Creative Minds não comunicará os dados identificados nenhuma outra entidade.</p>

                <p className="text-black w-full text-left p-1">
                  9. Quando nos envia os seus dados pessoais, estes são conservados num servidor seguro.
                </p>

                <p className="text-black w-full text-left p-1">10. Poderá retirar o presente consentimento a qualquer momento.</p>

                <p className="text-black w-full text-left p-1">
                  11. Não iremos utilizar os seus dados para outras finalidades sem o seu consentimento prévio e
                  expresso.
                </p>

                <p className="text-black w-full text-left p-1">
                  12. Saiba mais sobre a forma como os seus dados serão tratados através do email
                  <a href="mailto:protecaodados@creative-minds.pt" className="text-zinc-500 hover:text-black">
                    {" "}
                    protecaodados@creative-minds.pt
                  </a>
                  .{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
