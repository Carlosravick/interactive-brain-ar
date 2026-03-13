# 🧠 Cérebro Interativo AR

Uma experiência imersiva de Realidade Aumentada para explorar a anatomia do cérebro humano em 3D. Utilize a câmera do seu dispositivo e o marcador Hiro para visualizar e interagir com diferentes regiões do cérebro.

## 🎯 Recursos

- 🎨 **8 regiões cerebrais** com informações detalhadas
- 🖐️ **Controle por toque** - Arraste para girar o cérebro livremente
- 🎯 **Clique em hotspots** - Selecione regiões para ver detalhes
- 📱 **Responsivo** - Funciona em qualquer dispositivo com câmera
- 🔄 **Rotação automática** - O cérebro gira continuamente quando inativo
- ✨ **Efeitos visuais** - Animações suaves e cores dinâmicas

## 📋 Regiões Disponíveis

1. **Córtex Pré-Frontal** - Planejamento e tomada de decisões
2. **Córtex Motor** - Controle de movimentos voluntários
3. **Lobo Parietal** - Percepção sensorial
4. **Lobo Temporal** - Audição e memória
5. **Lobo Occipital** - Processamento visual
6. **Cerebelo** - Coordenação e equilíbrio
7. **Tronco Encefálico** - Funções vitais
8. **Corpo Caloso** - Comunicação inter-hemisférica

## 🚀 Como Executar

### Opção 1: GitHub Pages (Recomendado)

1. **Faça upload para GitHub:**
   ```bash
   git push origin main
   ```

2. **Ative GitHub Pages nos settings do repositório:**
   - Vá em **Settings → Pages**
   - Selecione a branch `main` como source
   - Clique em **Save**

3. **Acesse via:**
   ```
   https://seu-usuario.github.io/interactive-brain-ar/
   ```

### Opção 2: Hospedagem Online

#### 🎯 **Netlify (Recomendado)** ✨
1. Acesse [netlify.com](https://netlify.com)
2. Conecte seu repositório GitHub
3. Defina:
   - **Build command:** deixe vazio
   - **Publish directory:** `.` (raiz do projeto)
4. Deploy automático realizado!

#### Outras Opções:

- **Vercel:** Deployar automaticamente do GitHub
- **Firebase Hosting:** Hospedagem gratuita do Google

## 🎯 Acesso Rápido

### 🌐 **Onde Usar a Aplicação?**

**Escolha uma das opções acima e use a URL fornecida:**

- ✅ **GitHub Pages:** `https://Carlosravick.github.io/interactive-brain-ar/`
- ✅ **Netlify:** `https://seu-site.netlify.app` (URL gerada ao fazer deploy)
- ✅ **Vercel ou Firebase:** URL gerada automaticamente pela plataforma

### 📲 **Marcador HIRO (QR Code)**

Este é o marcador que você precisa para a Realidade Aumentada funcionar:

![Hiro Marker](https://upload.wikimedia.org/wikipedia/commons/d/d2/Hiro_marker.png)


## 📱 Como Usar

### 1. **Preparar o Marcador Hiro**
- Use o marcador exibido na seção **Acesso Rápido** acima
- Coloque em frente à câmera do seu dispositivo

### 2. **Controlar o Cérebro**
- **👆 Arrastar:** Gire o cérebro com um dedo
  - Para cima/baixo: inclinar
  - Esquerda/direita: girar
  
- **🎯 Clicar:** Selecione um hotspot (bolinha colorida)
- **❌ Fechar:** Clique no X do painel de informações

### 3. **Ver Informações**
- Cada região mostra:
  - 📖 Descrição anatômica
  - 🧠 Funções principais
  - 🎨 Destaque em cores

## 🛠️ Estrutura do Projeto

```
interactive-brain-ar/
├── index.html              # Estrutura principal
├── css/
│   └── styles.css          # Estilos da interface
├── js/
│   └── script.js           # Lógica interativa
├── assets/
│   └── human-brain.glb     # Modelo 3D do cérebro
└── README.md               # Este arquivo
```

## 🔧 Tecnologias Utilizadas

- **A-Frame** - Framework WebXR para AR/VR
- **AR.js** - Biblioteca para Realidade Aumentada
- **Three.js** - Engine 3D (usado por A-Frame)
- **WebGL** - Renderização gráfica

## 📝 Requisitos

- ✅ Navegador moderno (Chrome, Firefox, Safari, Edge)
- ✅ Câmera funcional no dispositivo
- ✅ Conexão com HTTPS (em produção)
- ✅ Marcador Hiro impresso/exibido

## 🎮 Atalhos e Controles

| Ação | Como fazer |
|------|-----------|
| Girar cérebro | Arrastar com 1 dedo |
| Selecionar região | Clicar no hotspot |
| Fechar painel | Clicar no X |
| Retomar rotação | Soltar o dedo |

## 🐛 Troubleshooting

### Câmera não funciona
- Verifique se autorizou permissão de câmera
- Tente em outra aba/navegador
- Reinicie o dispositivo

### AR não detecta marcador
- Certifique-se que a iluminação é boa
- Impressão clara do marcador Hiro
- Mantenha a câmera estável
- Tente mover o marcador mais perto/longe

### Página em branco
- Aguarde carregamento (especialmente na primeira vez)
- Verifique o console do navegador (F12)
- Tente limpar cache (Ctrl+Shift+Delete)

### Performance baixa
- Use um dispositivo mais recente
- Feche outras abas
- Ajuste a qualidade da câmera

## 📚 Recursos de Aprendizado

- [A-Frame Documentação](https://aframe.io/docs/)
- [AR.js Tutorial](https://ar-js-org.github.io/AR.js-Docs/)
- [Anatomia do Cérebro](https://www.khanacademy.org/science/biology/human-biology/human-brain)

## 📄 Licença

Este projeto está sob licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas features
- Melhorar a documentação
- Otimizar o código

## 👨‍💻 Autor

Desenvolvido como projeto educacional de Realidade Aumentada e Anatomia.

## 📞 Suporte

Encontrou um problema? Abra uma **issue** no GitHub com:
- Descrição do problema
- Passos para reproduzir
- Seu dispositivo/navegador

---

**Aproveite a experiência! 🎉**
