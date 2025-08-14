# FIPE Model Finder

Pequeno projeto web em **HTML**, **CSS** e **JavaScript** que permite consultar e exibir os **modelos de carros** disponíveis na [Tabela FIPE](https://deividfortuna.github.io/fipe/).  
O usuário seleciona uma marca e visualiza automaticamente a lista de modelos correspondentes, com dados carregados diretamente da API.

## ✨ Recursos

- Lista dinâmica de **marcas** obtida via API.
- Exibição em tempo real dos **modelos** para a marca selecionada.
- Mensagens de feedback para erros ou quando não há modelos.
- Interface limpa, com foco na simplicidade.
- Totalmente baseado em **JavaScript puro**, sem bibliotecas externas.

## 📁 Estrutura

```
.
├── index.html       # Estrutura HTML da página
├── styles.css       # Estilos visuais
├── script.js        # Lógica e consumo da API FIPE
```

## 🖥 Tecnologias

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

## 🚀 Como Executar

1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/ckzwebber/unesc-fipe-web-search.git
   ```
2. Abra o arquivo `index.html` diretamente no navegador.
3. Escolha a marca no seletor e veja os modelos.

## 📡 API Utilizada

Os dados são obtidos em tempo real da API pública da Tabela FIPE:  
[https://parallelum.com.br/fipe/api/v1](https://parallelum.com.br/fipe/api/v1)

## 📜 Licença

Este projeto foi desenvolvido para estudo e demonstração.  
Todos os dados pertencem à **Tabela FIPE**.
