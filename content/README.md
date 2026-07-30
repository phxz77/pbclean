# Camada de conteúdo

Os componentes visuais não possuem textos institucionais fixos. Eles recebem
objetos tipados exportados por esta camada.

## Edição atual

- `data/home.ts`: conteúdo e indicadores da Home
- `data/company.ts`: história, princípios, linha do tempo e estrutura
- `data/services.ts`: serviços e páginas individuais
- `data/gallery.ts`: categorias e comparativos
- `data/cases.ts`: projetos e resultados
- `data/clients.ts`: segmentos e logos
- `data/blog.ts`: artigos e categorias
- `data/faq.ts`: perguntas e categorias
- `data/contact.ts`: opções e textos do formulário
- `config/site.ts`: telefones, endereço, e-mail, horários e redes

## Integração futura

Mantenha as interfaces de `types/content.ts` e substitua as exportações de
`content/index.ts` por consultas ao CMS. Assim, as páginas e componentes não
precisam ser reescritos.
