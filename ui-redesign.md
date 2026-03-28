
# 🎯 PROMPT — Ejecución técnica de mejora UI (Color, Contraste y Sistema Visual)

## 🧠 Rol del agente

Actúa como un **Senior Frontend Engineer + UX/UI Engineer**, especializado en:

* Tailwind CSS (modo CDN)
* Sistemas de diseño sin configuración
* Mejora de UI sin romper estructura existente
* Optimización para conversión

No des teoría. Ejecuta cambios concretos en el código existente.

---

## ⚠️ Contexto técnico (CRÍTICO)

* Tailwind CSS se usa vía CDN (NO existe `tailwind.config.js`)
* Alpine.js se usa vía CDN
* NO puedes crear archivos de configuración
* NO puedes modificar build tools
* TODO debe resolverse con:

  * clases Tailwind inline
  * variables CSS existentes o nuevas en `styles.css`

---

## 📌 Restricciones absolutas

* NO cambiar estructura HTML
* NO reordenar componentes
* NO eliminar secciones
* NO rediseñar layout
* SOLO mejorar:
  → color
  → contraste
  → jerarquía visual
  → consistencia

---

## 🎯 Objetivo principal

Corregir la interfaz para:

* eliminar la monotonía visual (exceso de blanco)
* unificar el sistema de color
* mejorar la jerarquía visual
* hacer que los CTAs sean claros, consistentes y dominantes

---

## 🔴 Tareas obligatorias

### 1. Unificación de CTAs (CRÍTICO)

* Detecta TODOS los botones de acción del sistema

* Establece una regla global:

  👉 CTA primario SIEMPRE:

  * `bg-pink-500`
  * `hover:bg-pink-600`
  * `text-white`
  * `shadow-lg shadow-pink-500/40`

* Elimina uso de:

  * `bg-gray-900`
  * `bg-gray-800`
    en botones principales

* Aplica consistencia en:

  * Hero
  * Catálogo
  * Calculadora

---

### 2. Eliminación de “grises fríos”

Reemplaza:

* `gray-*`
* `slate-*`

Por:

* `stone-*` (más cálido)

Ejemplo:

* `text-gray-900` → `text-stone-900`
* `bg-slate-50` → `bg-stone-50`

---

### 3. Crear ritmo visual entre secciones

Actualmente hay fondos blancos consecutivos.

Debes aplicar alternancia:

* Sección 1 (Hero):
  → mantener imagen + overlay oscuro

* Sección 2 (Catálogo):
  → `bg-[#fffbf4]` (cream suave)

* Sección 3 (Calculadora):
  → `bg-pink-50`

* Sección 4 (Testimonios):
  → volver a `bg-[#fffbf4]`

⚠️ Nunca dejar dos secciones blancas consecutivas

---

### 4. Corrección de Hero (alto impacto)

* Elimina cualquier `bg-white` o `bg-white/xx` en el contenido del hero
* Aplica overlay oscuro:

```html
bg-gradient-to-t from-black/80 via-black/40 to-black/10
```

* Forzar:

  * textos en `text-white`
  * subtítulos en `text-stone-200`
  * agregar `drop-shadow` a textos

---

### 5. Mejora del Catálogo (cards + botones)

* Cambiar botones de producto:

  * de `bg-gray-900`
  * a:

    * `bg-pink-50 text-pink-600`
    * `hover:bg-pink-500 hover:text-white`

* Añadir:

```html
shadow-[0_4px_14px_0_rgba(236,72,153,0.25)]
```

* Mantener estética ligera (NO botones pesados)

---

### 6. Rediseño visual de Calculadora (sin cambiar lógica)

* Fondo sección:
  → `bg-pink-50`

* Inputs:

  * fondo blanco
  * bordes:
    → `border-pink-200`

* Pills (opciones):

  * Inactivo:
    → `bg-white border border-pink-200 text-stone-800`
  * Activo:
    → `bg-yellow-400 text-stone-900 shadow-md`

* CTA final:
  → usar CTA primario (`bg-pink-500`)

---

### 7. Limpieza de Testimonios (CRÍTICO de marca)

Eliminar completamente:

* `purple-*`
* `green-*`

Reemplazar cards por:

* `bg-white`
* `bg-pink-50`
* `bg-yellow-100`

Mantener coherencia con marca (rosado + amarillo)

---

### 8. Mejora de contraste (accesibilidad)

Asegurar:

* Texto sobre amarillo:
  → `text-stone-900`

* Nunca usar:
  → texto gris sobre fondo claro sin suficiente contraste

* Mantener mínimo WCAG AA

---

### 9. Introducir consistencia con variables CSS (sin config)

Si es necesario, define en `styles.css`:

```css
:root {
  --color-primary: #ec4899;
  --color-primary-hover: #db2777;
  --color-surface-cream: #fffbf4;
}
```

Y reutilízalas donde sea posible.

---

## 📤 Output esperado

* Cambios directos en clases Tailwind existentes
* Reemplazos claros (antes → después)
* Fragmentos de código modificados
* NO explicaciones largas

---

## 🧠 Criterio de decisión

Cada cambio debe cumplir al menos uno:

* mejorar conversión
* mejorar jerarquía visual
* mejorar consistencia
* mejorar percepción emocional

Si no cumple, no lo hagas.
