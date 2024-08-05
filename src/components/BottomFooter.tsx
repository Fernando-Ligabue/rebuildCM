import { X } from 'lucide-react';
import React, { useState } from 'react'

const BottomFooter = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    return (
        <section className='w-full flex flex-col justify-center items-center bg-black pb-3'>
            <div className="w-full mx-auto flex flex-col flex-wrap justify-center items-center gap-2 mt-10 mb-5">
                <p className="text-sm text-center text-white font-light"><span className="cursor-pointer" onClick={handleModalOpen}>Política de Privacidade</span></p>


                <p className="text-sm text-center text-white font-light">Criado e desenvolvido por Creative Minds</p>


                <div className="w-full bg-white h-px mt-2"></div>
            </div>

            {/* modal politica de privacidade */}
            {openModal && (
                <div className="fixed top-0 left-0 w-full h-full p-5 flex justify-center items-center bg-black bg-opacity-75 z-50">
                    <div className="bg-white px-5 py-8 rounded-md w-full max-w-[650px] xl:max-w-[1080px] max-h-[95vh] overflow-auto relative">
                        <div className="flex flex-col justify-center items-center">
                            <span className='w-full flex justify-end absolute top-5 right-5'> <X size={40} className="text-black cursor-pointer text-right" onClick={handleModalClose} /></span>
                            <div className="w-full flex flex-col justify-center items-center gap-1">
                                <h4 className="w-full text-3xl text-black font-semibold text-left p-1">Política de Privacidade</h4>
                                <p className="text-black w-full text-left p-1">A sociedade Creative Minds – Soluções Globais de Comunicação, Marketing e Gestão, Lda., (adiante, Creative Minds), com o NIPC 507431405 e sede no Edifício Mar do Oriente, Alameda dos Oceanos, n.º 61, 3.2, Parque das Nações, 1990-208 Lisboa, Portugal, é uma sociedade que se dedica a prestar serviços de comunicação, marketing e gestão (entre os quais se contam assessoria de imprensa, clipping, design, web design, programação, gestão de redes sociais, email marketing, vídeo e fotografia, entre outros), que disponibiliza o website www.creative-minds.pt aos seus visitantes (adiante UTILIZADORES).</p>

                                <p className="text-black w-full text-left p-1">A Creative Minds está empenhada em proteger a privacidade dos UTILIZADORES do website, tendo para o efeito elaborado a presente Política de Privacidade com o objetivo de dar a conhecer o seu compromisso e respeito para com as regras relativas à privacidade e à proteção de dados pessoais que recolhe e trata em respeito com a legislação de proteção de dados pessoais.</p>

                                <p className="text-black w-full text-left p-1">ACONSELHA-SE A LEITURA DESTA POLÍTICA DE PRIVACIDADE PARA CONHECER E ACEITAR AS CONDIÇÕES EM QUE DISPONIBILIZA OS SEUS DADOS PESSOAIS E AUTORIZA A SUA RECOLHA, USO E DIVULGAÇÃO DOS MESMOS DE ACORDO COM AS REGRAS AQUI DEFINIDAS.</p>

                                <p className="text-black w-full text-left p-1"><b>ÂMBITO DE APLICAÇÃO</b><br />A presente Política de Privacidade aplica-se exclusivamente à recolha e tratamento de dados pessoais que é efetuada pela Creative Minds para efeitos informativos, permitindo desse modo que a utilização do website recorra de forma expedita e sem transtornos.</p>

                                <p className="text-black w-full text-left p-1"><b>DADOS PESSOAIS</b><br />Por dados pessoais deve ser entendida a informação, de qualquer natureza e suporte, incluindo-se o som e imagem, relativa a uma pessoa singular identificada ou identificável.</p>

                                <p className="text-black w-full text-left p-1">É considerada como identificável uma pessoa que possa ser identificada, direta ou indiretamente, designadamente por referência a um número de identificação ou a um ou mais elementos específicos da sua identidade física, fisiológica, psíquica, económica, cultural ou social.</p>

                                <p className="text-black w-full text-left p-1"><b>RESPONSÁVEL PELO TRATAMENTO</b><br />A Creative Minds é a entidade responsável pela recolha e tratamento dos dados pessoais dos UTILIZADORES, decidindo as categorias de dados recolhidos, qual o tratamento dos mesmos e as finalidades para que são utilizados.</p>

                                <p className="text-black w-full text-left p-1"><b>TIPO DE DADOS RECOLHIDOS</b><br />A Creative Minds poderá recolher os seguintes dados (a) nome, (b) email, (c) telefone, e, (IP), apenas e após ter obtido o seu consentimento, sendo tratados em conformidade com a legislação, nomeadamente através do armazenamento em base de dados devidamente seguras e protegidas, não sendo, em situação alguma, utilizados para outra finalidade que não seja aquela para a qual foi obtido o consentimento.</p>

                                <p className="text-black w-full text-left p-1"><b>“COOKIES”</b><br />“Cookies” são pequenos pedaços de informações que podem ajudar a identificar o seu browser e que podem armazenar informações, por exemplo, configurações e preferências do UTILIZADOR.</p>

                                <p className="text-black w-full text-left p-1">Poderão ser armazenados “cookies” no seu dispositivo para personalizar e facilitar ao máximo a navegação do UTILIZADOR, não fornecendo esses mesmos cookies referências ou dados pessoais do UTILIZADOR, podendo ser utilizados para solução de problemas, estatísticas, garantia de qualidade, e para monitorar a segurança do sistema.</p>

                                <p className="text-black w-full text-left p-1">Com exceção dos “cookies” especificamente necessários ao desempenho do website, o armazenamento de outros “cookies” dependerá sempre da aceitação e consentimento do UTILIZADOR, podendo esse consentimento ser retirado a todo o tempo através de ferramentas específicas do browser.</p>

                                <p className="text-black w-full text-left p-1">O Utilizador poderá configurar o seu navegador para que notifique e rejeite a instalação de “cookies”, reconhecendo desde já que tal comportamento poderá afetar o normal funcionamento do website. O website utiliza o serviço Google Analytics, cujos cookies e política de privacidade podem ser consultados em:</p>

                                <p className="text-black w-full text-left p-1">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage#gajs e https://www.google.com/intl/pt-PT/policies/</p>

                                <p className="text-black w-full text-left p-1"><b>FINALIDADES DO TRATAMENTO</b><br />Os dados pessoais recolhidos pela Creative Minds destinam-se à gestão das relações comerciais com os UTILIZADORES, incluindo-se aqui a ações de informação e de marketing dos serviços da Creative Minds.</p>

                                <p className="text-black w-full text-left p-1"><b>TEMPO DE ARMAZENAMENTO</b><br />A Creative Minds armazena e conserva os dados durante o período máximo de 2 (dois) anos, findo o qual os mesmos serão eliminados.</p>

                                <p className="text-black w-full text-left p-1"><b>RETIFICAÇÃO</b><br />O UTILIZADOR poderá retificar, eliminar, atualizar e/ou modificar os seus dados a qualquer momento através da sua área através do endereço de correio eletrónico protecaodados@creative-minds.pt solicitando essa retificação, atualização e/ou modificação dos seus dados, a qual lhe será comunicada por correio eletrónico assim que seja efetuada.</p>

                                <p className="text-black w-full text-left p-1"><b>DIREITO DE ACESSO</b><br />A Lei de Proteção de Dados garante ao UTILIZADOR, o direito de acesso aos seus dados pessoais, a todo o tempo, bem como o direito de oposição à utilização dos dados facultados, devendo para tal, enviar pedido por escrito através do endereço de correio eletrónico protecaodados@creative-minds.pt.</p>

                                <p className="text-black w-full text-left p-1"><b>MEDIDAS DE SEGURANÇA</b><br />A Creative Minds garante a segurança dos dados pessoais disponibilizados através da adoção de diversas medidas de segurança, de caráter técnico e organizativo, para proteção dos dados pessoais contra a sua difusão, perda, uso indevido, alteração, tratamento ou acesso não autorizado bem como, contra qualquer outra forma de tratamento ilícito.</p>

                                <p className="text-black w-full text-left p-1"><b>COMUNICAÇÃO A TERCEIROS</b><br />A Creative Minds não cederá os seus dados a outras entidades, sem o seu consentimento prévio e expresso.</p>

                                <p className="text-black w-full text-left p-1">A Creative Minds poderá ainda transmitir dados a terceiros no âmbito de investigações, inquéritos e processos judiciais e/ou administrativos ou de natureza semelhante, desde que para tal seja devidamente ordenada por ordem judicial nesse sentido.</p>

                                <p className="text-black w-full text-left p-1"><b>ALTERAÇÕES À POLÍTICA DE PRIVACIDADE</b><br />A Creative Minds reserva-se no direito de reajustar ou alterar a presente Política de Privacidade, a qualquer momento, sendo essas alterações publicitadas.</p>

                                <p className="text-black w-full text-left p-1">O UTILIZADOR DECLARA TER LIDO E ENTENDIDO A PRESENTE POLÍTICA, CONSENTINDO NO TRATAMENTO DOS SEUS DADOS CONFORME EXPOSTO.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default BottomFooter