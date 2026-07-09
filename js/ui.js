/* ══ UI / INTERACTIONS ══ */

/* ── LOADER ── */
        window.addEventListener('load', () => setTimeout(() => document.getElementById('loader').classList.add('out'), 2100));

        /* ── CURSOR ── */
        const cur = document.getElementById('cur'),
            curf = document.getElementById('cur-f');
        let mx = 0,
            my = 0,
            fx = 0,
            fy = 0;
        document.addEventListener('mousemove', e => {
            mx = e.clientX;
            my = e.clientY;
            cur.style.left = mx + 'px';
            cur.style.top = my + 'px'
        });
        (function loop() {
            fx += (mx - fx) * .1;
            fy += (my - fy) * .1;
            curf.style.left = fx + 'px';
            curf.style.top = fy + 'px';
            requestAnimationFrame(loop)
        })();
        document.querySelectorAll('a,button,.p-card,.br-card,.why-card,.af-item,.ef-item,.cntry,.bm-product-item').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cur.style.transform = 'translate(-50%,-50%) scale(2)';
                curf.style.width = '52px';
                curf.style.height = '52px';
                curf.style.borderColor = 'rgba(245,166,35,.6)'
            });
            el.addEventListener('mouseleave', () => {
                cur.style.transform = 'translate(-50%,-50%) scale(1)';
                curf.style.width = '36px';
                curf.style.height = '36px';
                curf.style.borderColor = 'rgba(245,166,35,.4)'
            });
        });

        /* ── NAV SCROLL ── */
        const nav = document.getElementById('nav');
        window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 60), {
            passive: true
        });

        /* ── MOBILE NAV ── */
        function toggleNav() {
            document.getElementById('nl').classList.toggle('open')
        }
        document.querySelectorAll('#nl a').forEach(a => a.addEventListener('click', () => document.getElementById('nl').classList.remove('open')));

        /* ── SMOOTH SCROLL ── */
        document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
            const t = document.querySelector(a.getAttribute('href'));
            if (t) {
                e.preventDefault();
                t.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        }));

        /* ── SCROLL REVEAL (Stagger) ── */
        const obs = new IntersectionObserver((entries) => entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                const parent = e.target.parentElement;
                [...parent.querySelectorAll('.sr:not(.in)')].forEach((el, i) => {
                    setTimeout(() => el.classList.add('in'), i * 60);
                });
            }
        }), {
            threshold: .12,
            rootMargin: '0px 0px -40px 0px'
        });
        document.querySelectorAll('.sr').forEach(el => obs.observe(el));

        /* ── PRODUCT FILTER ── */
        function filterP(cat, btn) {
            document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cards = [...document.querySelectorAll('.p-card')];
            const show = cards.filter(c => cat === 'all' || c.dataset.cat === cat);
            const hide = cards.filter(c => cat !== 'all' && c.dataset.cat !== cat);

            hide.forEach(c => {
                c.style.transition = 'opacity .22s var(--ease-in), transform .22s var(--ease-in), max-height .38s .15s var(--ease-in), margin .38s .15s var(--ease-in), padding .38s .15s var(--ease-in)';
                c.style.opacity = '0';
                c.style.transform = 'scale(.9) translateY(16px)';
                c.style.pointerEvents = 'none';
                setTimeout(() => {
                    c.style.maxHeight = '0';
                    c.style.margin = '0';
                    c.style.padding = '0';
                    c.style.overflow = 'hidden';
                    c.style.border = 'none'
                }, 150);
            });

            show.forEach((c, i) => {
                setTimeout(() => {
                    c.style.overflow = '';
                    c.style.maxHeight = '';
                    c.style.margin = '';
                    c.style.padding = '';
                    c.style.border = '';
                    c.style.transition = `opacity .5s var(--ease-out), transform .5s var(--ease-spring)`;
                    requestAnimationFrame(() => {
                        c.style.opacity = '1';
                        c.style.transform = 'scale(1) translateY(0)';
                        c.style.pointerEvents = 'auto';
                    });
                }, i * 60);
            });
        }

/* ── RIPPLE EFFECT ── */
        document.addEventListener('click', e => {
            const btn = e.target.closest('.ripple-host');
            if (!btn) return;
            const r = document.createElement('span');
            r.className = 'ripple-wave';
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
            btn.appendChild(r);
            r.addEventListener('animationend', () => r.remove());
        });

        /* ── SCROLL PROGRESS BAR ── */
        const scrollBar = document.getElementById('scroll-progress');
        window.addEventListener('scroll', () => {
            const pct = (scrollY / (document.body.scrollHeight - innerHeight)) * 100;
            if (scrollBar) scrollBar.style.width = pct + '%';
        }, {
            passive: true
        });



        /* ── 3D TILT on Product Cards ── */
        document.querySelectorAll('.p-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const r = card.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - 0.5;
                const y = (e.clientY - r.top) / r.height - 0.5;
                card.style.transform = `perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-6px) scale(1.02)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });

        /* ── COUNT-UP ANIMATION ── */
        function countUp(el, target, suffix) {
            let start = 0;
            const inc = target / 60;
            const timer = setInterval(() => {
                start += inc;
                if (start >= target) {
                    start = target;
                    clearInterval(timer);
                }
                el.textContent = Math.floor(start) + suffix;
            }, 20);
        }
        const counterObs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                counterObs.unobserve(e.target);
                const el = e.target;
                const raw = el.dataset.count || el.textContent;
                const suffix = raw.replace(/[\d.]/g, '');
                const num = parseFloat(raw);
                if (!isNaN(num)) countUp(el, num, suffix);
            });
        }, {
            threshold: 0.5
        });
        document.querySelectorAll('.hst-n, .bc-stat .num').forEach(el => {
            el.dataset.count = el.textContent;
            counterObs.observe(el);
        });

        /* ── MAGNETIC BUTTONS ── */
        document.querySelectorAll('.btn-primary,.btn-ghost,.nav-btn').forEach(btn => {
            btn.classList.add('btn-magnetic');
            btn.addEventListener('mousemove', e => {
                const r = btn.getBoundingClientRect();
                const x = (e.clientX - r.left - r.width / 2) * 0.25;
                const y = (e.clientY - r.top - r.height / 2) * 0.25;
                btn.style.transform = `translate(${x}px,${y}px) translateY(-3px) scale(1.02)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });

        /* ── ACTIVE NAV SECTION ── */
        const sections = [...document.querySelectorAll('section[id]')];
        const navLinks = [...document.querySelectorAll('.nav-links a')];
        const secObs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    navLinks.forEach(l => l.classList.remove('active-section'));
                    const match = navLinks.find(l => l.getAttribute('href') === '#' + e.target.id);
                    if (match) match.classList.add('active-section');
                }
            });
        }, {
            threshold: .35
        });
        sections.forEach(s => secObs.observe(s));

        /* ── HERO SHIMMER TEXT ── */
        const goldT = document.querySelector('.gold-t');
        if (goldT) goldT.classList.add('shimmer-text');

        /* ── LOADER ring replacement ── */
        const ldBar = document.querySelector('.ld-bar');
        if (ldBar) {
            const ring = document.createElement('div');
            ring.className = 'ld-ring';
            ring.style.marginTop = '0.5rem';
            ldBar.parentElement.insertBefore(ring, ldBar);
        }

        /* ── PREMIUM v10: STAGGER REVEAL (IntersectionObserver) ── */
        const staggerObs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    staggerObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });
        document.querySelectorAll('.stagger-in').forEach(el => staggerObs.observe(el));

        /* ── Apply stagger-in to key elements ── */
        document.querySelectorAll('.why-card').forEach((el, i) => {
            el.classList.add('stagger-in', `d${(i%6)+1}`);
            staggerObs.observe(el);
        });
        document.querySelectorAll('.p-card').forEach((el, i) => {
            el.classList.add('stagger-in', `d${(i%6)+1}`);
            staggerObs.observe(el);
        });
        document.querySelectorAll('.br-card').forEach((el, i) => {
            el.classList.add('stagger-in', `d${(i%6)+1}`);
            staggerObs.observe(el);
        });
        document.querySelectorAll('.ab-card').forEach((el, i) => {
            el.classList.add('stagger-in', `d${(i%6)+1}`);
            staggerObs.observe(el);
        });
        document.querySelectorAll('.bento-card').forEach((el, i) => {
            el.classList.add('stagger-in', `d${(i%4)+1}`);
            staggerObs.observe(el);
        });

        /* ── SPLIT TEXT REVEAL for section headings ── */
        document.querySelectorAll('.sec-h2').forEach(el => {
            const words = el.innerHTML.split(/(<[^>]+>|[^<]+)/g).filter(Boolean);
            // Only split plain text runs
            const wrapped = el.innerHTML.replace(/([^<>]+)(?=<|$)/g, (match) => {
                if (!match.trim()) return match;
                return match.split(' ').map(word =>
                    word ? `<span class="split-word"><span class="inner">${word}</span></span> ` : ''
                ).join('');
            });
            el.innerHTML = wrapped;

            const obs = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.split-word').forEach((w, i) => {
                            setTimeout(() => w.classList.add('revealed'), i * 60);
                        });
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            obs.observe(el);
        });

        /* ── CURSOR HOVER ENHANCEMENT ── */
        const hoverTargets = document.querySelectorAll('a, button, .p-card, .br-card, .why-card, .bento-card, .ab-card');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cur.classList.add('hovering');
                curf.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                cur.classList.remove('hovering');
                curf.classList.remove('hovering');
            });
        });

        /* ── GOLD CURSOR TRAIL ── */
        let trailCount = 0;
        document.addEventListener('mousemove', e => {
            trailCount++;
            if (trailCount % 3 !== 0) return; // throttle
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = (e.clientX - 3) + 'px';
            trail.style.top = (e.clientY - 3) + 'px';
            document.body.appendChild(trail);
            trail.addEventListener('animationend', () => trail.remove());
        });

        /* ── PARALLAX on section backgrounds ── */
        const parallaxSections = document.querySelectorAll('#about, #products, #brands, #export, #why, #contact');
        window.addEventListener('scroll', () => {
            const sy = window.scrollY;
            parallaxSections.forEach(sec => {
                const rect = sec.getBoundingClientRect();
                const rel = (rect.top + rect.height / 2) / window.innerHeight;
                const shift = (rel - 0.5) * 30;
                sec.style.backgroundPositionY = `${shift}px`;
            });
        }, { passive: true });

        /* ── SMOOTH SECTION DIVIDERS insertion ── */
        document.querySelectorAll('section + section, section + div.ticker').forEach(el => {
            if (!el.previousElementSibling) return;
            const div = document.createElement('div');
            div.className = 'section-divider';
            el.parentNode.insertBefore(div, el);
        });

        /* ── HOVER TILT on Why cards ── */
        document.querySelectorAll('.why-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const r = card.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - 0.5;
                const y = (e.clientY - r.top) / r.height - 0.5;
                card.style.transform = `perspective(600px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-4px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });

        /* ── TYPED HEADLINE EFFECT on hero subtitle ── */
        const hSub = document.querySelector('.h-sub');
        if (hSub) {
            const originalText = hSub.textContent;
            hSub.textContent = '';
            let charIdx = 0;
            const typeTimer = setInterval(() => {
                if (charIdx < originalText.length) {
                    hSub.textContent += originalText[charIdx];
                    charIdx++;
                } else {
                    clearInterval(typeTimer);
                    hSub.classList.add('cursor-blink');
                    setTimeout(() => hSub.classList.remove('cursor-blink'), 3000);
                }
            }, 22);
            // Start typing after loader
            setTimeout(() => {
                hSub.textContent = '';
                charIdx = 0;
            }, 100);
        }

        /* ── NOISE TEXTURE ANIMATION ── */
        let noiseOfs = 0;
        const noiseEl = document.querySelector('.noise');
        if (noiseEl) {
            setInterval(() => {
                noiseOfs = (noiseOfs + 1) % 100;
                noiseEl.style.backgroundPosition = `${noiseOfs}px ${noiseOfs}px`;
            }, 80);
        }

        /* ── ENHANCED LOADER: progress numbers ── */
        const ldWordmark = document.querySelector('.ld-wordmark');
        if (ldWordmark) {
            let pct = 0;
            const pctEl = document.createElement('div');
            pctEl.style.cssText = 'font-size:0.72rem;letter-spacing:0.18em;color:rgba(240,244,255,0.4);margin-top:0.5rem;text-transform:uppercase;font-weight:700;';
            pctEl.textContent = 'Loading 0%';
            ldWordmark.parentNode.appendChild(pctEl);
            const pctTimer = setInterval(() => {
                pct = Math.min(100, pct + Math.random() * 12 + 4);
                pctEl.textContent = `Loading ${Math.round(pct)}%`;
                if (pct >= 100) clearInterval(pctTimer);
            }, 160);
        }

        /* ── SCROLL-TRIGGERED section labels ── */
        document.querySelectorAll('section').forEach(sec => {
            const id = sec.id;
            if (!id) return;
            const label = document.createElement('div');
            label.className = 'sec-label sr';
            const labels = {
                about: 'Our Story',
                products: 'Portfolio',
                brands: 'Our Brands',
                export: 'Global Reach',
                why: 'Why EgyGulf',
                contact: 'Get in Touch'
            };
            if (labels[id]) {
                label.textContent = labels[id];
                const firstH = sec.querySelector('h2, h3, .sec-h2');
                if (firstH && firstH.parentNode) {
                    firstH.parentNode.insertBefore(label, firstH);
                    obs.observe(label);
                }
            }
        });


/* ── LOLLY SUB-FILTERS ── */
function showLollyFilters() {
    const el = document.getElementById('lolly-subfilter');
    if (el) { el.style.display = 'flex'; }
    // reset to all lollipops
    const subBtns = [...document.querySelectorAll('#lolly-subfilter .pf-sub')];
    subBtns.forEach(b => b.classList.remove('active'));
    const allBtn = subBtns[0];
    if (allBtn) allBtn.classList.add('active');
    filterLolly('all', allBtn);
}

function hideLollyFilters() {
    const el = document.getElementById('lolly-subfilter');
    if (el) { el.style.display = 'none'; }
}

function filterLolly(type, btn) {
    document.querySelectorAll('#lolly-subfilter .pf-sub').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const cards = [...document.querySelectorAll('.p-card[data-cat="lolly"]')];
    cards.forEach(c => {
        const show = type === 'all' || c.dataset.lollyType === type;
        c.style.transition = 'opacity .22s ease, transform .22s ease';
        c.style.opacity = show ? '1' : '0';
        c.style.transform = show ? '' : 'scale(0.9)';
        c.style.pointerEvents = show ? 'auto' : 'none';
        setTimeout(() => {
            if (!show) { c.style.maxHeight = '0'; c.style.margin = '0'; c.style.padding = '0'; c.style.overflow = 'hidden'; c.style.border = 'none'; }
            else { c.style.maxHeight = ''; c.style.margin = ''; c.style.padding = ''; c.style.overflow = ''; c.style.border = ''; }
        }, show ? 0 : 200);
    });
}

/* ── SNACK SUB-FILTERS ── */
function showSnackFilters() {
    const el = document.getElementById('snack-subfilter');
    if (el) { el.style.display = 'flex'; }
    // reset to chips
    const subBtns = [...document.querySelectorAll('#snack-subfilter .pf-sub')];
    subBtns.forEach(b => b.classList.remove('active'));
    const chipsBtn = subBtns[0];
    if (chipsBtn) chipsBtn.classList.add('active');
    filterSnack('chips', chipsBtn);
}

function hideSnackFilters() {
    const el = document.getElementById('snack-subfilter');
    if (el) { el.style.display = 'none'; }
}

function filterSnack(type, btn) {
    document.querySelectorAll('#snack-subfilter .pf-sub').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const cards = [...document.querySelectorAll('.p-card[data-cat="snack"]')];
    cards.forEach(c => {
        const show = c.dataset.snackType === type;
        c.style.transition = 'opacity .22s ease, transform .22s ease';
        c.style.opacity = show ? '1' : '0';
        c.style.transform = show ? '' : 'scale(0.9)';
        c.style.pointerEvents = show ? 'auto' : 'none';
        setTimeout(() => {
            if (!show) { c.style.maxHeight = '0'; c.style.margin = '0'; c.style.padding = '0'; c.style.overflow = 'hidden'; c.style.border = 'none'; }
            else { c.style.maxHeight = ''; c.style.margin = ''; c.style.padding = ''; c.style.overflow = ''; c.style.border = ''; }
        }, show ? 0 : 200);
    });
}
