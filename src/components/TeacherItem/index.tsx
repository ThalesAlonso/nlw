import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/21249630?s=460&u=d301d7f7192e38b8c27afaa29899a85e4ac3b26c&v=4"
            alt=""
          />
          <div>
            <strong>Thales Alonso</strong>
            <span>Programação</span>
          </div>
        </header>

        <p>
          Entusiasta das melhores tecnologias do desenvolvimento web e mobile.
              <br /> <br />
              Apaixonado pela área de ti e pela programação no geral. Já trabalhei na Nasa, Google e
              Facebook e agora ministro aulas de programação por diversão.
            </p>

        <footer>
          <p>
            Preço/hora

                <strong>R$80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="" />
                Entrar em contato
              </button>
        </footer>
      </article>
    </Container>
  )
}

export default TeacherItem;