# Auditoría Visual y Reestructuración de Color: Postres Perla

Actuando bajo el rol de Senior UX/UI & Product Designer, he analizado el sistema visual actual a partir de los componentes (`site-hero.js`, `site-catalog.js`, `portion-calculator.js`, `site-testimonials.js`) y las hojas de estilo (`styles.css`).

El diagnóstico principal es claro: **La interfaz adolece de monotonía cromática.** A pesar de tener una paleta cálida (rosados y amarillos) declarada, la ejecución se apoya casi por completo en fondos casi blancos (`#fffefa`, `slate-50`, `gray-50`) combinado con grises oscuros (`gray-800`, `gray-900`). El uso descontrolado de colores ajenos a la marca (como el verde y el morado en los testimonios) diluye la identidad, y la excesiva claridad visual (falta de contrastes profundos o bloques de acento) provoca fatiga visual y debilita la jerarquía de conversión.

A continuación presento la auditoría profunda y las decisiones estructurales para inyectar "vida visual".

---

## 1. Auditoría de Color

### Paleta Actual Detectada
- **Variables Crudas (CSS):** `--perla-soft-green`, `--light-yellow`, `--salmon-color`, `--light-pink`, `--white-bone`, `--perla-yellow`.
- **Uso Crudo en Tailwind:** `pink-500`, `pink-700/80`, `yellow-200`, `slate-50`, `gray-800/900`, `purple-100`, `green-100`.

### Diagnóstico de Percepción
1. **Falta de cohesión (Dilución de marca):** Incorporar fondos púrpura (`purple-100`) y verdes (`green-100`) en la sección de testimonios rompe absolutamente el binomio "Rosado / Amarillo" y degrada la percepción premium hacia algo de "fiesta infantil genérica".
2. **Confianza y Deseo:** El rosado pastel transmite dulzura, pero los grises pesados (`gray-900`) en los botones del catálogo y la calculadora generan una fricción subconsciente ("botón de sistema" vs "botón apetitoso"). El gris tan oscuro en CTAs tácticos mata el apetito (menor CTR).
3. **Exceso de "Luz" (Pobreza de Fondos):** 
   - Hero: Imagen + Overlay blanco al 65%.
   - Catálogo: `bg-[var(--perla-yellow)]` (que es virtualmente blanco).
   - Calculadora: `bg-slate-50`.
   El ojo no descansa y no detecta transiciones entre bloques. Todo se fusiona y aplanamiento total del layout.

---

## 2. Lista Priorizada de Problemas

### 🔴 CRÍTICOS (Impactan Conversión Directamente)
1. **Call To Actions (CTAs) sin fuerza coherente:** En el Hero el CTA principal es `pink-500`. En el catálogo, el botón para ver producto primario es `bg-gray-900`, y el CTA de la calculadora es inicialmente `bg-gray-100` (disabled) pasando a `bg-gray-900/90`. Esta inconsistencia evita pavimentar un "camino de conversión cognitivo" (el cerebro no asocia un solo color accionante con "comprar").
2. **Fusión visual de secciones (Falta de encapsulamiento):** Pasar del catálogo (casi blanco) a la calculadora (`slate-50`) no representa un cambio rítmico. El usuario scrollea sin sentir que descubrió una nueva herramienta y por ende la pasa de largo.

### 🟡 MEDIOS (Impactan Jerarquía y Emoción)
3. **Descontrol en los Testimonios:** Mezcla de colores aleatorios y un fondo SVG de "onda verde suave". Al ser el bloque principal de prueba social (Social Proof), debe transmitir confianza unificada, pero actualmente parece un arcoíris desvinculado de la marca "Perla".
4. **Calculadora con 'look & feel' muy clínico/tecnológico:** Usa la dualidad de inputs gris/blancas. Se percibe como un panel SaaS B2B en lugar de una experiencia guiada y divertida de pastelería boutique (Consumer UI).

### 🟢 MENORES (Impactan Accesibilidad y Pulido)
5. **Contraste de las pastillas (Pills):** Los tabs de categoría (`bg-yellow-200 text-gray-800`) están bien, pero los de la calculadora cambian a `bg-pink-700/80`. Este tono tan agresivo se siente rudo y desconectado del delicado `pink-500` predominante.

---

## 3. Sistema de Color Propuesto (Design Tokens reales)

Debemos eliminar la "ensalada cromática" y estandarizar un sistema usando el `tailwind.config.js` en lugar de usar utilidades aisladas, basadas en la tríada: Rosado Brillante, Amarillo Soporte, y Superficies Teñidas.

**Solución accionable: Configuración de Tailwind Extendida:**

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2f8',  // Surface alternativa a slate-50 (tinte súper ligero de rosa)
          100: '#fce7f3', // Fondos de cards estéticas
          200: '#fbcfe8', // Hover estéticos y bordes
          500: '#ec4899', // PRIMARY CTA: Exclusivo para "Llamados valiosos".
          600: '#db2777', // HOVER del CTA
          900: '#831843', // Brand-text: Texto muy oscuro, más premium que un 'gray-900' frío
        },
        accent: {
          100: '#fef3c7', // Fondos de chips/tags suaves 
          300: '#fcd34d', // Estrellas y acentos
          400: '#fbbf24', // YELLOW ALERT CTA
        },
        surface: {
          cream: '#fffbf4', // REEMPLAZA a white-bone (Evita usar fondo blanco puro jamás)
        }
      }
    }
  }
}
\`\`\`

**Reglas Oficiales de Uso:**
- **Primary (brand-500):** ÚSESE SÓLO para CTAs primarios. El usuario debe condicionarse a que el Rosado Brillante es sinónimo de compra.
- **Grises (Neutrales Cálidos):** Reemplazar `gray-*` por `stone-*`. Los grises con subtono cálido (taupe) combinan elegantemente con repostería; el gris frío (`gray-900`) choca.
- **Backgrounds:** Alterna `surface-cream` con `brand-50` para separar secciones como capas de pastel.

---

## 4. Rediseño Conceptual por Secciones

Sin alterar la estructura de tu marcado, propongo reenfocar la colorimetría:

### 1. Hero Banner
- **Problema de Enfoque:** El card blanco/translúcido matiza al pastel del contenedor haciéndose pesado. Se siente rudo.
- **Rediseño:** Aplica un fondo tipo "Gradient Overlay" directo a la `<section>` (`from-black/60 to-black/10`). Remueve el `bg-white/65` de la caja de texto central. Esto permitirá textos **blancos puros** y legibles, mientras tu CTA rosado resalta como joya iluminada.

### 2. Catálogo (Productos)
- **Bloques Visuales Plásticos:** El botón actual gris (`bg-gray-900 text-white`) corta el flujo estético del pastelito.
- **Rediseño:**  
  - Fondo de sección: Úsese globalmente `bg-surface-cream`.
  - Diferenciador de botón: Cambia el gris frío por `bg-brand-100 text-brand-600 hover:bg-brand-500 hover:text-white`. Luce dulce, incita a presionar por curiosidad y se mantiene temático.
  - Sombra de las cards: Cambia el genérico `shadow-sm` por una propia `shadow-brand-100/50`.

### 3. Calculadora de Porciones
- **Problema Estético:** Gris sobre gris sobre blanco con bordes gris-400 y active pink-700. Extremadamente plano.
- **Rediseño:**
  - Fondo Global: Píntala con tu nuevo `bg-brand-50`. El rosa extremadamente pálido detendrá visualmente al usuario.
  - Formulario / Pills: Los pills inactivos en `bg-white border-brand-200 text-brand-900`. El pill seleccionado (en vez del oscuro `pink-700`) debería gritar con el tono de acento `bg-accent-400 shadow-md text-stone-900`. 

### 4. Testimonios
- **Problema:** Morado, Verde, Amarillo de guardería. 
- **Rediseño:**  
  - Fondo de sección (`wave.svg`): Desatúralo a grisáceo o dale opacidad al 30% en CSS.
  - Cards: Estandariza la tríada Perla = 1 card `bg-white`, 1 card `bg-brand-50`, 1 card `bg-accent-100`. Remueve los morados y verdes completamente. 

---

## 5. Mejora de Jerarquía Visual

- **El principio de "Aislamiento Inverso":** Todo lo que quieras que retroceda al ojo, acláralo o usa colores fríos. Todo diseño o CTA que deba avanzar, debe usar el contraste más alto cálido. (Pej. tu botón de "Ver resultados de cálculo" pasa al CTA primario `bg-brand-500`).
- **Ritmo Vertical:** Nunca metas dos contenedores hermanos blancos pegados. Patrón sugerido:
  1. Hero -> Oscuro radiante
  2. Catálogo -> Crema muy suave (`surface-cream`)
  3. Calculadora -> Tinte sutil (`brand-50`)
  4. Testimonios -> Crema suave de regreso.
  (Esta técnica del 'cebreado cromático sutil' crea ritmo natural).

---

## 6. Accesibilidad Real (WCAG AA)

1. **Acento sobre Amarillo (Pills/Tabs):** El texto sobre `bg-yellow-200` y `bg-yellow-300` del filtro catálogo SE DEBE OBLIGAR a usar contraste de sombra fuerte (`text-stone-900`). El `text-gray-800` actual de Tailwind pasa rasguñando el umbral de 4.5:1. 
2. **Rosado Activo de CTAs:** El actual `pink-500` con texto blanco cumple, sin embargo, el hover debes oscurecerlo hacia abajo (`bg-pink-600` o `bg-brand-600`), jamas hacia arriba.
3. **No uses blancos puros en texto pequeño si el overlay del hero no es sólido:** Asegúrate de agregar utilidades Tailwind de caída de sombra: `text-white drop-shadow-md` para la descripción debajo del hero.

---

## 7. Recomendaciones Accionables en Código (Implementación de Tailwind)

Estas modificaciones concretas a tus variables y utilidades deben hacerse paso por paso.

**Ejemplo 1 (Unificación visual del botón en Catálogo - `site-catalog.js`):**

\`\`\`html
<!-- ANTES (Técnico e inexpresivo) -->
<button class="... bg-gray-900 text-white hover:bg-pink-600 ...">

<!-- DESPUÉS (Ligero y coqueto) -->
<button class="... bg-pink-50 text-pink-600 hover:bg-pink-500 hover:text-white shadow-[0_4px_14px_0_rgba(236,72,153,0.39)] ...">
\`\`\`

**Ejemplo 2 (Inyectar ritmo al Hero - `site-hero.js`):**

\`\`\`html
<!-- Limpiar capas blancas distractoras. DELEGAR la lectura en contraste invertido -->
<section class="banner relative w-full h-[85vh] overflow-hidden bg-[url('...')] bg-cover">
  <!-- Gradient mask sutil, de oscuro abajo a suave arriba -->
  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-0"></div>
  
  <div class="relative z-20 w-full h-full flex items-center justify-center text-center"> 
    <div class="max-w-2xl">
      <!-- Ahora sin tarjeta blanca que oculte tu fotografía premium -->
      <h1 class="text-white drop-shadow-lg text-6xl font-black">Hechos a mano...</h1>
      <p class="text-stone-200 drop-shadow-md text-xl mt-6">Prueba nuestros productos...</p>
      
      <!-- CTA Principal brillante -->
      <a class="bg-pink-500 hover:bg-pink-600 text-white font-bold tracking-widest px-8 py-4 rounded-full mt-10 inline-block shadow-pink-500/50 shadow-lg">Comprar</a>
    </div>
  </div>
</section>
\`\`\`

### 🎯 Resumen Arquitectónico
Estás construyendo experiencia, no una plantilla general. Tratar los componentes como paneles "tech/SaaS" (grises, blancos asépticos y inputs aburridos) reduce la apetencia natural por el producto. Adoptar los tintes tenues propuestos (`bg-brand-50` y `surface-cream`), deshacerse del arcoíris inconexo y utilizar acentos precisos `pink-500/stone-900` solidificará la marca al instante, aumentando retención general pasiva sin cambiar código duro fundamental.
