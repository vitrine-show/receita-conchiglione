# 📸 Como Adicionar Imagem de Miniatura Personalizada

## 🎯 O que foi configurado

Adicionei **meta tags Open Graph** no site para que apareça uma imagem bonita quando você compartilhar no:
- WhatsApp
- Facebook
- Twitter/X
- LinkedIn
- Telegram

## 🖼️ Opção 1: Usar sua própria foto (RECOMENDADO)

### Passo 1: Tire uma foto linda do Conchiglione
- Use boa iluminação natural
- Foto de cima funciona bem
- Tamanho ideal: 1200x630 pixels

### Passo 2: Hospede a imagem

**Opção A - GitHub (Grátis):**
1. Coloque a foto na pasta do projeto com nome `thumbnail.jpg`
2. Faça commit e push
3. No `index.html`, linha 18, altere:
```html
<!-- De: -->
<meta property="og:image" content="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1200&h=630&fit=crop">

<!-- Para: -->
<meta property="og:image" content="https://vitrine-show.github.io/receita-conchiglione/thumbnail.jpg">
```

**Opção B - Imgur (Mais fácil):**
1. Acesse: https://imgur.com/upload
2. Faça upload da sua foto
3. Copie o link direto da imagem
4. Cole na meta tag `og:image` (linha 18 do index.html)

**Opção C - Google Drive:**
1. Faça upload no Google Drive
2. Clique com botão direito → "Obter link"
3. Mude para "Qualquer pessoa com o link"
4. Use um conversor de link do Drive para link direto

## 🌟 Opção 2: Usar imagem grátis de banco de imagens

Sites com fotos grátis de comida:
- **Unsplash**: https://unsplash.com/s/photos/pasta
- **Pexels**: https://www.pexels.com/search/italian%20food/
- **Pixabay**: https://pixabay.com/images/search/pasta/

Procure por: "conchiglione", "stuffed pasta", "stuffed shells", "pasta italiana"

## 📏 Tamanhos recomendados

- **Facebook/WhatsApp**: 1200x630 pixels
- **Twitter**: 1200x600 pixels
- **LinkedIn**: 1200x627 pixels

**Use 1200x630 que funciona em todos!**

## 🧪 Testar se está funcionando

### Método 1 - Validador do Facebook:
1. Acesse: https://developers.facebook.com/tools/debug/
2. Cole a URL do seu site
3. Clique em "Depurar"
4. Veja a prévia!

### Método 2 - Validador do Twitter:
1. Acesse: https://cards-dev.twitter.com/validator
2. Cole a URL do seu site
3. Veja a prévia!

### Método 3 - WhatsApp:
1. Envie o link para você mesmo
2. Veja a miniatura aparecer!

## ✅ Status Atual

✅ Meta tags configuradas
✅ Imagem temporária do Unsplash (massa italiana)
⏳ Aguardando você adicionar sua própria foto do Conchiglione!

---

**Dica:** Tire uma foto bem bonita do prato pronto e use ela! Vai ficar muito mais especial e pessoal! 📸🍝
