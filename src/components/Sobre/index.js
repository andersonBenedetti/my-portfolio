import React from 'react';
import styles from './Sobre.module.css';

import { MdEmail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { ImLinkedin } from 'react-icons/im';

export default function Sobre() {
  const sociais = [
    {
      id: 'email',
      icon: <MdEmail />,
      opcao: 'E-mail',
      nome: 'andersonjcbenedetti@gmail.com',
      link: 'mailto:andersonjcbenedetti@gmail.com',
    },
    {
      id: 'github',
      icon: <BsGithub />,
      opcao: 'Github',
      nome: 'andersonBenedetti',
      link: 'https://github.com/andersonBenedetti',
    },
    {
      id: 'linkedin',
      icon: <ImLinkedin />,
      opcao: 'LinkedIn',
      nome: 'Anderson Benedetti',
      link: 'https://www.linkedin.com/in/dev-anderson-benedetti/',
    },
    {
      id: 'whats',
      icon: <IoLogoWhatsapp />,
      opcao: 'Whatsapp',
      nome: '+55 51 99704-2710',
      link: 'https://api.whatsapp.com/send?phone=5551997042710&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seu%20servi%C3%A7o.',
    },
  ];

  return (
    <div className="container">
      <div id="sobre" className={styles.Sobre}>
        <h1>Sobre mim</h1>
        <p>
          Busco uma oportunidade de atuar como desenvolvedor e, por meio deste
          cargo, assumir novos desafios. Atualmente, estou focado no JavaScript,
          estudando ReactJS. Sou apaixonado por esportes, música e tecnologia,
          estou cursando o último módulo no curso Técnico de Informática.
        </p>

        <section className={styles.social}>
          {sociais.map((social) => (
            <a key={social.id} href={social.link}>
              <div className={styles.itens}>
                <span className={styles.icon}>{social.icon}</span>
                <h2>{social.opcao}</h2>
                <p>{social.nome}</p>
              </div>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
}
