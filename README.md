# Educrat - Professional LMS Online Education Course ReactJS Template

## Descrição do Projeto

Educrat é um template profissional de LMS (Learning Management System) desenvolvido em ReactJS. Ele foi projetado para oferecer uma experiência de aprendizado online moderna e eficiente, com suporte a cursos, eventos, blogs e um painel de controle completo para usuários e administradores.

Este projeto inclui uma ampla gama de funcionalidades, como páginas de cursos, carrinho de compras, finalização de pedidos, páginas de eventos, blogs e um painel de controle robusto. O objetivo é fornecer uma solução completa para plataformas de ensino online.

---

## Estrutura do Projeto

### Páginas Mantidas
- **Home 1**: Página inicial com design moderno e responsivo.
- **About**: Página "Sobre Nós" para descrever a missão e visão da plataforma.
- **Contact Us**: Página de contato com formulário funcional.
- **Courses List V4**: Página de listagem de cursos com filtros e categorias.
- **Course V6**: Página de detalhes de um curso específico.
- **Course Cart**: Página de carrinho de compras para cursos.
- **Course Checkout**: Página de finalização de compra de cursos.
- **Lesson Page 2**: Página de lições com conteúdo detalhado.
- **Blog 3**: Página de listagem de blogs.
- **Blog Single**: Página de detalhes de um blog específico.
- **Dashboard Completo**: Painel de controle completo para gerenciamento de cursos, mensagens, configurações e mais.
- **Eventos 2**: Página de listagem de eventos.
- **Event Cart**: Página de carrinho de compras para eventos.
- **Event Checkout**: Página de finalização de compra de eventos.

---

## Funcionalidades

- **Cursos**: Listagem, detalhes, carrinho e finalização de compra.
- **Eventos**: Listagem, carrinho e finalização de compra.
- **Blog**: Listagem e detalhes de postagens.
- **Painel de Controle**: Gerenciamento de cursos, mensagens, configurações e muito mais.
- **Formulários**: Formulários funcionais para contato e envio de mensagens.
- **Design Responsivo**: Compatível com dispositivos móveis e desktops.
- **Animações**: Uso de AOS (Animate On Scroll) para animações suaves.

---

## Tecnologias Utilizadas

- **ReactJS**: Biblioteca principal para construção da interface.
- **React Router**: Gerenciamento de rotas.
- **AOS (Animate On Scroll)**: Animações ao rolar a página.
- **FontAwesome**: Ícones modernos e personalizáveis.
- **SCSS**: Estilização modular e reutilizável.
- **SwiperJS**: Slider responsivo para carrosséis.
- **React Calendar**: Componente de calendário interativo.
- **MUI (Material-UI)**: Biblioteca de componentes para estilização e design.

---

## Estrutura de Diretórios

- `/src/components`: Componentes reutilizáveis, como cabeçalhos, rodapés, cartões de cursos, etc.
- `/src/pages`: Páginas principais do projeto.
- `/src/data`: Dados estáticos, como menus e informações de cursos.
- `/src/styles`: Arquivos SCSS para estilização.
- `/public/assets`: Recursos estáticos, como imagens e arquivos CSS.

---

## Modificações Realizadas

### Arquivos Modificados
- **`/src/App.jsx`**: Removidas rotas de páginas não utilizadas e mantidas apenas as rotas das páginas listadas acima.
- **`/src/components/cartsAndCheckout/CourseCart.jsx`**: Ajustes no componente para corrigir lógica e melhorar funcionalidade.
- **`/src/components/aboutCourses/lesson/LessonItems.jsx`**: Melhorias no componente para otimizar o comportamento e corrigir bugs.

### Arquivos Removidos
- **Páginas e Componentes Não Necessários**:
  - Home 2 a Home 10.
  - Course List V1, V2, V3, V5, V6, V7, V8.
  - Course Single V1, V2, V3, V4, V5.
  - Lesson Page V1.
  - Instructors List V1, V2, Instructors Single, Become an Instructor.
  - Dashboard Pages não listadas (e.g., My Courses, Bookmarks, Add Listing, etc.).
  - Event List 1, Event Single.
  - Blog List 1, Blog List 2.
  - About 2, Contact 2.
  - Shop Pages (e.g., Shop Cart, Shop Checkout, Shop List, etc.).
  - Membership Plans, 404 Page, FAQs, Help Center, Login, Register, UI Elements.

---

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd educrat
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

4. **Acesse no navegador**:
   ```
   http://localhost:3000
   ```

---

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça as alterações necessárias e commit:
   ```bash
   git commit -m "Descrição da minha feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---
