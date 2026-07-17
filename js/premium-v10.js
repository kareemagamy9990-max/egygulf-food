/* PREMIUM v10 — load with defer AFTER ui.js:
   <script src="js/premium-v10.js" defer></script> */
(function(){
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Scroll progress bar */
  var bar=document.createElement('div');bar.id='scroll-progress';document.body.appendChild(bar);
  /* Spotlight layer */
  var spot=document.createElement('div');spot.id='spotlight';document.body.appendChild(spot);

  var nav=document.getElementById('nav');
  addEventListener('scroll',function(){
    var h=document.documentElement,p=h.scrollTop/(h.scrollHeight-h.clientHeight)*100;
    bar.style.width=p+'%';
    if(nav) nav.classList.toggle('nav-glass', h.scrollTop>60);
  },{passive:true});

  if(!reduced && matchMedia('(hover:hover)').matches){
    addEventListener('mousemove',function(e){
      spot.style.setProperty('--mx',e.clientX+'px');
      spot.style.setProperty('--my',e.clientY+'px');
    },{passive:true});
  }

  /* Auto-apply classes — no HTML edits needed */
  document.querySelectorAll('.p-card,.b-card,.why-card,.exp-card,[class*="card"]').forEach(function(c){
    c.classList.add('tilt-3d','shine','ring-glow');
  });
  document.querySelectorAll('section h2, .section-title, .s-title').forEach(function(t){
    t.classList.add('grad-title');
  });
  document.querySelectorAll('section > *:not(script)').forEach(function(el){
    el.classList.add('reveal-v10');
  });

  /* Reveal on scroll */
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);} });
  },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal-v10').forEach(function(el){io.observe(el);});

  /* 3D tilt */
  if(!reduced && matchMedia('(hover:hover)').matches){
    document.querySelectorAll('.tilt-3d').forEach(function(card){
      card.addEventListener('mousemove',function(e){
        var r=card.getBoundingClientRect(),
            x=(e.clientX-r.left)/r.width-.5,
            y=(e.clientY-r.top)/r.height-.5;
        card.style.transform='perspective(900px) rotateY('+(x*8)+'deg) rotateX('+(-y*8)+'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave',function(){card.style.transform='';});
    });
  }
})();
