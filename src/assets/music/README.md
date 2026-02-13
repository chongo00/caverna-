# 🎵 Música de Fondo

## Instrucciones:

1. **Copia tu archivo de música** en esta carpeta: `src/assets/music/`

2. **Nombre del archivo:** Debe llamarse exactamente `background.mp3`
   - Si tu archivo tiene otro nombre, renómbralo a `background.mp3`
   - Si usas otro formato (.ogg, .wav), actualiza la extensión en `src/pages/Index.tsx` línea 12

3. **Formatos soportados:**
   - ✅ MP3 (recomendado)
   - ✅ OGG
   - ✅ WAV (más pesado)

4. **Tamaño recomendado:**
   - Máximo 5 MB para carga rápida
   - Si es más grande, considera comprimirlo o usar una versión más corta

## Ejemplo de estructura:

```
src/
└── assets/
    └── music/
        └── background.mp3  ← Tu archivo aquí
```

## Funcionamiento:

- La música **NO se reproduce automáticamente** al cargar (los navegadores lo bloquean)
- El usuario debe **hacer clic en el icono de bocina** (esquina inferior derecha) para activar la música
- Una vez activada, la música se reproduce en **loop infinito**
- Hacer clic nuevamente en el icono **pausa** la música

## Si tu archivo tiene otro nombre:

Si tu archivo se llama diferente (por ejemplo `ambient.mp3`), cambia la línea 12 en `src/pages/Index.tsx`:

```typescript
// De:
import backgroundMusic from "@/assets/music/background.mp3";

// A:
import backgroundMusic from "@/assets/music/ambient.mp3";
```
