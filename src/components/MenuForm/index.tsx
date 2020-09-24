import React from 'react';

import { Container, DropBoxLogo, Form, Navegation } from './styles';

const MenuForm: React.FC = () => {

  function handleToggle(){
      if (window.toggleActiveMenu) window.toggleActiveMenu();
  }  
  return(
      <Container>
          <Navegation>
              <h1>
                  <DropBoxLogo />
                  <span>DropBox</span>
              </h1>

              <button className="action--close" onClick={handleToggle}>X</button>
          </Navegation>

          <Form>
              
            <span className="title">Registre-se</span>
            <span className="subtitle">preencha o formulário abaixo</span>

            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenome" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />

            <button>Prosseguir</button>

            <span className="terms">
                Esta página está sujeita à Política de privacidade e aos Termos de serviço.
            </span>


          </Form>

      </Container>
  )
}

export default MenuForm;