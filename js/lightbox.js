/* ══ IMAGE ZOOM LIGHTBOX ══ */
    (function(){
      var lb = document.getElementById('img-lightbox');
      var lbImg = document.getElementById('lb-img');
      var lbPct = document.getElementById('lb-zoom-pct');
      if(!lb || !lbImg) return;

      var scale = 1, tx = 0, ty = 0;
      var dragging = false, sx = 0, sy = 0;
      var lastTouchDist = null;

      function updatePct(){ if(lbPct) lbPct.textContent = Math.round(scale*100)+'%'; }
      function applyT(animated){
        lbImg.style.transition = animated ? 'transform .3s cubic-bezier(.34,1.56,.64,1)' : 'none';
        lbImg.style.transform = 'translate('+tx+'px,'+ty+'px) scale('+scale+')';
        updatePct();
      }
      function clampScale(v){ return Math.min(Math.max(0.3, v), 6); }

      function openLb(src, alt){
        lbImg.src = src; lbImg.alt = alt||'';
        scale=1; tx=0; ty=0; applyT(false);
        lb.classList.add('open');
        document.body.style.overflow='hidden';
      }
      function closeLb(){
        lb.classList.remove('open');
        document.body.style.overflow='';
        setTimeout(function(){ lbImg.src=''; }, 320);
      }

      lb.addEventListener('click', function(e){ if(e.target===lb) closeLb(); });
      document.getElementById('lb-close').addEventListener('click', closeLb);
      document.getElementById('lb-btn-in').addEventListener('click', function(){ scale=clampScale(scale+0.25); applyT(true); });
      document.getElementById('lb-btn-out').addEventListener('click', function(){ scale=clampScale(scale-0.25); applyT(true); });
      document.getElementById('lb-btn-reset').addEventListener('click', function(){ scale=1;tx=0;ty=0; applyT(true); });
      document.addEventListener('keydown', function(e){
        if(!lb.classList.contains('open')) return;
        if(e.key==='Escape') closeLb();
        if(e.key==='+') { scale=clampScale(scale+0.2); applyT(true); }
        if(e.key==='-') { scale=clampScale(scale-0.2); applyT(true); }
      });

      lbImg.addEventListener('wheel', function(e){
        e.preventDefault();
        var delta = e.deltaY > 0 ? -0.12 : 0.12;
        scale = clampScale(scale + delta);
        applyT(false);
      }, { passive:false });

      lbImg.addEventListener('mousedown', function(e){
        dragging=true; sx=e.clientX-tx; sy=e.clientY-ty;
        lbImg.classList.add('grabbing'); e.preventDefault();
      });
      document.addEventListener('mousemove', function(e){
        if(!dragging) return;
        tx=e.clientX-sx; ty=e.clientY-sy; applyT(false);
      });
      document.addEventListener('mouseup', function(){ dragging=false; lbImg.classList.remove('grabbing'); });

      lbImg.addEventListener('dblclick', function(e){
        if(scale>1){ scale=1;tx=0;ty=0; }
        else {
          scale=2.5;
          var r=lbImg.getBoundingClientRect();
          tx=(r.width/2-(e.clientX-r.left))*(1-1/scale);
          ty=(r.height/2-(e.clientY-r.top))*(1-1/scale);
        }
        applyT(true);
      });

      lbImg.addEventListener('touchstart', function(e){
        if(e.touches.length===2){
          lastTouchDist=Math.hypot(e.touches[1].clientX-e.touches[0].clientX,e.touches[1].clientY-e.touches[0].clientY);
          dragging=false;
        } else if(e.touches.length===1){
          dragging=true; sx=e.touches[0].clientX-tx; sy=e.touches[0].clientY-ty;
        }
      },{passive:true});
      lbImg.addEventListener('touchmove', function(e){
        e.preventDefault();
        if(e.touches.length===2){
          var d=Math.hypot(e.touches[1].clientX-e.touches[0].clientX,e.touches[1].clientY-e.touches[0].clientY);
          if(lastTouchDist){ scale=clampScale(scale*(d/lastTouchDist)); applyT(false); }
          lastTouchDist=d; dragging=false;
        } else if(dragging&&e.touches.length===1){
          tx=e.touches[0].clientX-sx; ty=e.touches[0].clientY-sy; applyT(false);
        }
      },{passive:false});
      lbImg.addEventListener('touchend', function(){ dragging=false; lastTouchDist=null; });

      /* Wire up to product modal image */
      function wireModal(){
        var pmImg = document.getElementById('pm-img');
        if(pmImg && !pmImg._lbWired){
          pmImg._lbWired = true;
          pmImg.addEventListener('click', function(){
            if(pmImg.src && pmImg.src !== window.location.href) openLb(pmImg.src, pmImg.alt);
          });
          /* Watch for src changes */
          var obs = new MutationObserver(function(){
            pmImg.style.cursor = pmImg.src ? 'zoom-in' : '';
          });
          obs.observe(pmImg, {attributes:true, attributeFilter:['src']});
        }
      }
      /* Try immediately and also after DOM is ready */
      wireModal();
      document.addEventListener('DOMContentLoaded', wireModal);
      /* Also expose globally so openPModal can call it if needed */
      window.openLightboxImage = openLb;
    })();
