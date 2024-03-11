import { React, useRef } from 'react';
import './App.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_zzoyvnh', 'template_0gzh3zk', form.current, {
        publicKey: 'R-03LjkpUJpidtfS5',
      })
      .then(
        () => {
          console.log("Message envoyé");
          form.current.reset();
          toast("Message envoyé!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className='family'>
        <div className='card am'>
          <header>
            <div className='card nav'>
              <input readOnly className='input'></input>
            </div>
          </header>
          <div className='card fam'>
            <h1 className='h1'>DEVELOPPEUSE WEB</h1>
            <div className='row'>
              <div className='col-sm-6'>
                <img src='../yo.jpg' alt='image' className='yo' />
              </div>
              <div className='col-sm-6'>
                <div className='card info'>
                  <p className='text-center oli'>TODISOA HARIVELO OLINAH</p>
                  <p className='text-center' style={{ fontSize: 'large', fontStyle: "italic", fontFamily: "inherit" }}>Agée de 24 ans,<br></br>
                    Je suis une développeuse web,<br></br>
                    Avoir la connaissance de conception et de design <br></br> UX
                  </p><br></br>
                  <div className='card progres text-sm'>
                    <label style={{ height: '8px' }}> Design</label>
                    <div className="col-sm-5 progress bar" style={{ height: '8px', width: '45%' }}>
                      <div className="bg-info" style={{ width: '50%' }}></div>
                    </div><br></br>
                    <label style={{ height: '8px' }}> Devéloppement Frontend</label>
                    <div className="col-sm-5 progress bar" style={{ height: '8px', width: '45%' }}>
                      <div className="bg-info" style={{ width: '60%' }}></div>
                    </div><br></br>
                    <label style={{ height: '8px' }}> Devéloppement Backend</label>
                    <div className="col-sm-5 progress bar" style={{ height: '8px', width: '45%' }}>
                      <div className="bg-info" style={{ width: '45%' }}></div>
                    </div><br></br>
                    <label style={{ height: '8px' }}> Conception et analyse</label>
                    <div className="col-sm-5 progress bar" style={{ height: '8px', width: '45%' }}>
                      <div className="bg-info" style={{ width: '70%' }}></div>
                    </div><br></br>
                  </div>
                </div>
              </div>
            </div>
            <div><br></br>
              <div className='card compet'>
                <p className='text-center'>J'UTILISE MA PASSION ET MES COMPÉTENCES<br></br>
                  POUR CRÉER DES PRODUITS NUMÉRIQUES ET EXPÉRIENCES NATIONALE.
                  LES CLIENTS <br></br> COMPTENT SUR MOI POUR L'ANALYSE, LA CONCEPTION ET LE DEVELOPPEMENT DES <br></br>SITES WEB OU DES APPLICATIONS.</p><br></br>
                <p className='text-center'>JE SUIS UNE FEMME RESPONSABLE ET RIGOUREUSE QUI S'ADAPTENT A TOUT POUR <br></br>PROGRESSER MES CONNAISSANCES CAR POUR MOI TOUT S'APPREND.</p>
              </div>
            </div>
            <div className='row'>
              <h4 className='text-uppercase h4'>Expériences professionelles</h4>
              <div className='col-sm-7'>
                <div className='card exp'>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <b className='text-sm'>Stage de l'entreprise au sein de HAISOA SARLU à Antananarivo</b>
                      <p>Pendant la stage j'ai accompli la conception et la réalisation d'une application MIHARO qui a une objectif  de communiquer les acteurs et de mettre en ligne les produits agricoles et les matériaux agricoles en utilisant react js et node js</p>
                    </div>
                    <div className='col-sm-3'>
                      <b className='text-sm'>2023</b>
                    </div>
                  </div><br></br>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <b className='text-sm'>Stage au sein de VIVA évènement à Toamasina</b>
                      <p>Conception et réalisation d'un site web pour publier les nouveaux et de mettre en direct l'évènement de VIVA en utilisant PHP</p>
                    </div>
                    <div className='col-sm-3'>
                      <b className='text-sm'>2021</b>
                    </div>
                  </div><br></br>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <b className='text-sm'>Stage au sein de la DRENETP Atsimo andrefana </b>
                      <p>Conception et réalisation d’une application web pour la gestion des notes de CEPE en utilisant PHP</p>
                    </div>
                    <div className='col-sm-3'>
                      <b className='text-sm'>2019</b>
                    </div>
                  </div><br></br>
                  <div>
                    <h4 className='text-uppercase text-lg'>Diplomes</h4>
                  </div><br></br>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <b className='text-sm'>Master professionnel en Informatique Générale</b>
                    </div>
                    <div className='col-sm-3'>
                      <b className='text-sm'>2023</b>
                    </div>
                  </div><br></br>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <b className='text-sm'>Licence professionnelle en Informatique Générale</b>
                    </div>
                    <div className='col-sm-3'>
                      <b className='text-sm'>2021</b>
                    </div>
                  </div><br></br>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <b className='text-sm'>Baccalauréat serie D</b>
                    </div>
                    <div className='col-sm-3'>
                      <b className='text-sm'>2017</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-5'>
                <img src='../od.jpg' alt='image' className='ya' />
              </div>
            </div>
            <div>
              <h2 className='text-center h2'>CONTACTEZ-MOI</h2>
              <div className='card formulaire'>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="relative border-b-2">
                    <input type="nom" required={true} name="nom" id='nom' placeholder=" " className="block w-full appearance-none focus:outline-none bg-transparent text-sm" />
                    <label htmlFor="nom" className="absolute top-0 -z-1 duration-300 origin-0 text-sm ">Votre nom</label>
                  </div><br></br>
                  <div className="relative border-b-2 focus-within:border-blue-500">
                    <input type="email" required={true} name="email" id='email' placeholder=" " className="block w-full appearance-none focus:outline-none bg-transparent text-sm" />
                    <label htmlFor="email" className="absolute top-0 -z-1 duration-300 origin-0 text-sm ">Votre email</label>
                  </div><br></br>
                  <div className="relative border-b-2 focus-within:border-blue-500">
                    <textarea type="message" required={true} name="message" id='message' placeholder=" " className="block w-full appearance-none focus:outline-none bg-transparent text-sm" />
                    <label htmlFor="message" className="absolute top-2 -z-1 duration-300 origin-0 text-sm ">Votre message</label>
                  </div><br></br>
                  <div className='flex flex-col items-center justify-center'>
                    <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
                focus:ring-4 focus:ring-gray-100 font-medium rounded-full
                text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600
                dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Envoyer </button>
                    <ToastContainer />
                  </div>
                </form>
              </div>
            </div>
            <div>
            </div>
            <br></br>
            <div className='card contact text-xs text-center'>
              <b>TODISOA Harivelo Olinah</b>
              <p>Lot Besakoa, Tuléar</p>
              <p>Phone : +261324186289</p>
              <p>+261347432233</p>
              <p className='text-primary'>olinahharivelo@gmail.com</p>
            </div><br></br>
            <div className='reseau'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a href='https://web.facebook.com/profile.php?id=100006938772608'> <FaFacebook className='fbs' /> </a>
                    </td>
                    <td><a href='https://www.instagram.com/olynah3'> <FaInstagramSquare className='inst' /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
            <div className='container_footer2'>
              <div className='copyright col'>
                <p>ⓒ Développeuse. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
