# Caverna 🦋

Una experiencia web inmersiva e interactiva que combina poesía, música y arte digital en una atmósfera nocturna mágica.

## 🌙 Descripción

Caverna es una landing page interactiva que presenta:

- **Paisaje onírico nocturno**: Una caverna mágica con flores gigantes y mariposas bioluminiscentes
- **8 mariposas interactivas**: Cada una revela fragmentos de canciones al ser tocadas, con efectos visuales carmesí
- **Mensaje final**: Al activar todas las mariposas, aparece un mensaje especial
- **Soneto XVII de Pablo Neruda**: Presentado en una subpágina con estética de pergamino antiguo
- **Playlist "Canciones en Carmesí"**: 8 canciones cuidadosamente seleccionadas con descripciones poéticas

## 🎨 Paleta de Colores

- **Carmesí y rosado** como colores dominantes
- **Azul cyan bioluminiscente** para las mariposas
- **Fondos oscuros índigo y negro** para atmósfera nocturna

## 🛠️ Tecnologías

- **React 18** + **TypeScript**
- **Vite** como build tool
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **shadcn/ui** para componentes base

## 📦 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/chongo00/caverna-.git
cd caverna-

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🚀 Despliegue en GitHub Pages

El proyecto está configurado para despliegue automático en GitHub Pages mediante GitHub Actions.

### Configuración:

1. **Push al repositorio**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Habilitar GitHub Pages**:
   - Ve a Settings → Pages
   - En "Source", selecciona **GitHub Actions**
   - El workflow se ejecutará automáticamente en cada push a `main`

3. **Acceder al sitio**:
   - URL: `https://chongo00.github.io/caverna-/`

## 🎵 Playlist

1. **Sailor Song** – Gigi Perez
2. **Ma meilleure ennemie** – Stromae & Pomme
3. **City of Stars** – Ryan Gosling
4. **Everyone Adores You (quiet)** – Matt Maltese
5. **Californica** – La Gusana Ciega
6. **The Death of Peace of Mind** – Bad Omens
7. **Moon Dance** – Michael Bublé
8. **Talk That Talk** – TWICE

## 📱 Características

- ✨ **Animaciones fluidas** con Framer Motion
- 🎨 **Diseño responsivo** para móviles y desktop
- 🦋 **Interactividad visual** con efectos de partículas
- 📖 **Navegación inmersiva** entre secciones
- 🎭 **Estética onírica** y atmosférica

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Butterfly.tsx          # Mariposas interactivas
│   ├── CavernMenu.tsx         # Menú de navegación
│   ├── PoemSection.tsx        # Soneto XVII
│   ├── PlaylistSection.tsx    # Lista de canciones
│   ├── FinalMessage.tsx       # Mensaje final
│   ├── NavigationSymbol.tsx   # Emblema heráldico (abeja + tridente)
│   ├── LightParticles.tsx     # Partículas de luz
│   └── SoundToggle.tsx        # Control de audio
├── pages/
│   └── Index.tsx              # Página principal
└── assets/
    └── cavern-bg.jpg          # Imagen de fondo
```

## 🎨 Componentes Clave

### Butterfly
Cada mariposa tiene:
- Animación de aleteo y flotación
- Diferentes profundidades de campo (blur)
- Pulso carmesí al hacer clic
- Revelación de texto poético

### NavigationSymbol
Emblema heráldico SVG con:
- Abeja estilizada vista desde arriba
- Tridente (trishula) emergiendo de la cabeza
- Ornamentación art nouveau
- Glow carmesí en hover

### CavernMenu
Menú overlay con dos opciones:
- Soneto XVII
- Canciones en Carmesí

### PoemSection
Presentación del poema con:
- Fondo de pergamino antiguo
- Partículas flotantes rosadas
- Fade-in por estrofas

### PlaylistSection
Lista de canciones con:
- Descripciones poéticas
- Estética carmesí profunda
- Animaciones staggered

---

**Desarrollado con ❤️ y carmesí** 🌹
