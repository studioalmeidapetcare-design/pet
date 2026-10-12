# Plano — Luppy Pet Care

## Objetivo

Refazer somente a experiência visual da landing page existente para a marca **Luppy Pet Care**, mantendo o domínio atual, a infraestrutura React/Vite/Express, o mapa, a galeria, o conteúdo operacional disponível e os rastreadores já configurados.

## Requisitos preservados

- Manter a tag Google `AW-18115117778` no HTML de entrada.
- Manter o script Umami com os placeholders `VITE_ANALYTICS_ENDPOINT` e `VITE_ANALYTICS_WEBSITE_ID`.
- Manter o canonical no domínio atual `https://studioalmeidapetcare.com.br/`, pois a troca de nome não veio acompanhada de um novo domínio.
- Manter a rota `/`, a rota de fallback `/404`, o mapa do Jardim das Américas, a galeria com modal, os depoimentos, horários, CNPJ e links operacionais já existentes quando não houver novo dado fornecido.
- Atualizar todos os CTAs de atendimento para `https://wa.me/message/YIPZSQPDCCGRB1`.
- Atualizar título, descrição, Open Graph, Twitter Card, sitemap e textos indexáveis para Luppy Pet Care.

## Direção de design

- **Movimento:** editorial botânico contemporâneo, com sensação de ateliê acolhedor e cuidado premium.
- **Princípios:** clareza de leitura, calor humano, sofisticação sem excesso e foco em conversão para WhatsApp.
- **Filosofia de cor:** verde profundo inspirado nas letras do logo para confiança e natureza; dourado-mel inspirado nos pelos/elementos do logo para calor e destaque; creme e areia para criar leveza e fazer o logo respirar.
- **Paradigma de layout:** narrativa vertical com hero assimétrico, faixa de prova social, blocos alternados de conteúdo e uma seção de contato com mapa como encerramento; evitar aparência de dashboard ou grade rígida.
- **Elementos assinatura:** molduras orgânicas, linhas onduladas e selos circulares; logo aplicado em recortes claros em vez de marca d’água escura.
- **Interação:** microinterações suaves e úteis; hover revela ação, galeria abre o detalhe e o WhatsApp permanece acessível sem interromper a leitura.
- **Animação:** entrada discreta por elevação/opacidade, flutuação lenta no selo do hero e transições de 200–400 ms; respeitar `prefers-reduced-motion`.
- **Tipografia:** Fraunces/Playfair Display para títulos expressivos e Inter para corpo, navegação e CTAs.
- **Essência da marca:** estética animal cuidadosa para tutores que buscam segurança, carinho e acabamento bonito em Curitiba; personalidade acolhedora, caprichosa e confiável.
- **Voz:** direta, calorosa e específica. Exemplos: “Um cuidado bonito começa pelo bem-estar.” e “Agende o próximo momento de carinho.”
- **Logo:** usar o arquivo fornecido pelo usuário como marca principal, com fundo removido para aplicação sobre superfícies claras.
- **Cor proprietária:** verde Luppy `#185E56`, combinado com dourado Luppy `#D29C46`.

## Estrutura do projeto

- `client/src/pages/Home.tsx`: landing page, navegação, hero, serviços, galeria, depoimentos, contato, mapa e modal.
- `client/src/index.css`: tokens de cor, tipografia, utilitários e animações do novo sistema visual.
- `client/index.html` e `index.html`: metadados indexáveis e scripts de rastreamento preservados/atualizados.
- `client/public/images/`: logo Luppy e fotos de pets já existentes.
- `client/public/robots.txt` e `client/public/sitemap.xml`: documentos de descoberta atualizados.
- `client/src/components/Map.tsx`: embed de localização preservado, com títulos e comentários de marca atualizados.

## Implementação

1. Preparar o logo fornecido com transparência externa e um favicon derivado.
2. Substituir a Home por uma composição Luppy mais clara e editorial, sem remover os comportamentos existentes.
3. Atualizar o sistema visual global e os metadados.
4. Validar TypeScript, build, busca por referências antigas de marca/WhatsApp e resposta HTTP dos documentos de SEO.
