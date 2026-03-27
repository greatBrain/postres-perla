/**
 * Hero Parallax — single source of truth for background-position.
 *
 * Why JS-only instead of CSS + JS:
 * If CSS sets an initial bg-position and JS sets a different one on first scroll,
 * the browser shows a visible "jump". Owning the position entirely from JS,
 * applied on load + scroll + resize, eliminates that inconsistency.
 *
 * Breakpoints mirror Tailwind's defaults:
 *   < 640px  (mobile)  : cookie upper-right → 65% 18%
 *   640–767px (sm)     : cookie right-upper  → 80% 30%
 *   768–1023px (md)    : cookie right-center → 85% 45%
 *   ≥ 1024px  (lg+)   : cookie far right    → 90% 50%
 */
function getHeroPosition(scrolled) {
    const w = window.innerWidth;
    let x, yBase;

    if (w < 640) {
        x = '55%'; yBase = 45;   // cookie shifted right on narrow viewport, text stays left
    } else if (w < 768) {
        x = '70%'; yBase = 30;
    } else if (w < 1024) {
        x = '85%'; yBase = 45;
    } else {
        x = '90%'; yBase = 50;
    }

    // yBase is a %, parallax offset is px — keeps units separate for correctness
    return `${x} calc(${yBase}% + ${scrolled * 0.3}px)`;
}

function applyParallax() {
    const scrolled = window.scrollY;
    const position = getHeroPosition(scrolled);
    document.querySelectorAll('.parallax-bg').forEach(el => {
        el.style.backgroundPosition = position;
    });
}

// Set initial position immediately on load (scrollY is 0 → no parallax offset yet)
document.addEventListener('DOMContentLoaded', applyParallax);

// Update on scroll (parallax Y motion)
window.addEventListener('scroll', applyParallax, { passive: true });

// Update on resize / orientation change (breakpoint X may change)
window.addEventListener('resize', applyParallax, { passive: true });