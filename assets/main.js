/* ===================================================================
   IMAGE MEDIA — shared behaviour
   Injects nav + footer, runs animations, renders dynamic content.
   =================================================================== */
(function(){
"use strict";
var D=window.IM||{};
var CDN=D.CDN||"";
var $=function(s,c){return (c||document).querySelector(s);};
var $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));};
var img=function(p,w){return CDN+p+"?format="+(w||1200)+"w";};
var page=document.body.getAttribute("data-page")||"home";

/* ---------------- NAV + FOOTER ---------------- */
var NAVLINKS=[
  ["events.html","Event Photos","events"],
  ["surf.html","Surf","surf"],
  ["organizers.html","Organizers","organizers"],
  ["academy.html","Academy","academy"],
  ["stock.html","Stock Gallery","stock"],
  ["about.html","About","about"]
];
function brand(href){
  return '<a class="brand" href="'+href+'" aria-label="Image Media home">'+
    '<span class="brand-mark" aria-hidden="true"><i></i></span>'+
    '<span class="brand-text"><span class="brand-word">IMAGE<em>MEDIA</em></span>'+
    '<span class="brand-tag">frame by frame</span></span></a>';
}
function buildNav(){
  var nav=$("#siteNav"); if(!nav)return;
  var links=NAVLINKS.map(function(l){
    var act=(l[2]===page||(page==="photographer"&&l[2]==="stock"))?" active":"";
    return '<a href="'+l[0]+'" class="'+act.trim()+'">'+l[1]+'</a>';
  }).join("");
  nav.innerHTML=brand("index.html")+
    '<div class="nav-links" id="navLinks">'+links+'</div>'+
    '<div class="nav-cta">'+
      '<a href="organizers.html#contact" class="btn btn-primary btn-sm">Partner with us</a>'+
      '<button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>'+
    '</div>';
}
function buildFooter(){
  var f=$("#siteFoot"); if(!f)return;
  f.innerHTML='<div class="container">'+
    '<div class="foot-top">'+
      '<div class="foot-brand">'+brand("index.html")+
        '<p>A sports-event media partner. We capture every athlete, publish galleries the same day, and hand organisers content built for sponsors and socials.</p></div>'+
      '<div class="foot-col"><h5>Spaces</h5>'+
        '<a href="events.html">Event Photos</a>'+
        '<a href="surf.html">Surf School Photos</a>'+
        '<a href="organizers.html">For Organizers</a>'+
        '<a href="academy.html">Photo Academy</a>'+
        '<a href="stock.html">Stock Gallery</a>'+
        '<a href="about.html">About Image Media</a></div>'+
      '<div class="foot-col"><h5>Get in touch</h5>'+
        '<a href="mailto:contact@imagemedia.one">contact@imagemedia.one</a>'+
        '<a href="tel:+34600680630">+34 600 68 06 30</a>'+
        '<a href="https://www.instagram.com/IMAGEMEDIA.ONE" target="_blank" rel="noopener">Instagram</a>'+
        '<a href="https://fotop.com/?pais=es&lang=en" target="_blank" rel="noopener">Galleries on Fotop</a></div>'+
    '</div>'+
    '<div class="foot-bottom">'+
      '<p>&copy; 2026 Image Media &middot; Powered by Image Media, in partnership with Fotop &middot; Design &copy;imagemedia</p>'+
      '<span class="foot-badge">Proposed redesign &mdash; preview, not the live site</span>'+
    '</div></div>';
}

/* ---------------- NAV behaviour ---------------- */
function navBehaviour(){
  var nav=$("#siteNav"); if(!nav)return;
  function onScroll(){nav.classList.toggle("scrolled",window.scrollY>40);}
  onScroll(); window.addEventListener("scroll",onScroll);
  var b=$("#burger");
  if(b)b.addEventListener("click",function(){nav.classList.toggle("open");});
  $$("#navLinks a").forEach(function(a){
    a.addEventListener("click",function(){nav.classList.remove("open");});
  });
}

/* ---------------- reveal on scroll ---------------- */
var revealIO=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add("in");revealIO.unobserve(e.target);}
  });
},{threshold:.12});
function observeReveals(){
  $$(".reveal:not(.in)").forEach(function(el){revealIO.observe(el);});
}

/* ---------------- count up ---------------- */
var countIO=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(!e.isIntersecting)return;
    var el=e.target,target=+el.getAttribute("data-target"),dur=1400,t0=performance.now();
    (function tick(now){
      var p=Math.min((now-t0)/dur,1),eased=1-Math.pow(1-p,3);
      el.textContent=Math.round(target*eased);
      if(p<1)requestAnimationFrame(tick);
    })(t0);
    countIO.unobserve(el);
  });
},{threshold:.5});
function observeCounts(){$$("[data-target]").forEach(function(el){countIO.observe(el);});}

/* ---------------- marquee + photo strips ---------------- */
function fillMarquee(){
  var m=$("#marquee"); if(!m||!D.SPORTS)return;
  var one=D.SPORTS.map(function(s){return "<span>"+s+"</span>";}).join("");
  m.innerHTML=one+one;
}
function fillStrips(){
  $$(".pstrip").forEach(function(strip){
    var which=strip.getAttribute("data-strip")==="b"?D.STRIP_B:D.STRIP_A;
    var track=$(".pstrip-track",strip); if(!track||!which)return;
    var html=which.concat(which).map(function(p){
      return '<img src="'+img(p,520)+'" alt="" loading="lazy">';
    }).join("");
    track.innerHTML=html;
  });
}

/* ---------------- hero intro ---------------- */
function heroReady(){
  var h=$(".hero");
  if(h){window.addEventListener("load",function(){h.classList.add("ready");});
        setTimeout(function(){h.classList.add("ready");},650);}
}

/* ---------------- LIGHTBOX ---------------- */
var lbList=[],lbIndex=0,lbEl,lbImg;
function buildLightbox(){
  var d=document.createElement("div");
  d.className="lightbox";d.id="lightbox";d.setAttribute("aria-hidden","true");
  d.innerHTML='<button class="lb-close" aria-label="Close">&times;</button>'+
    '<button class="lb-nav lb-prev" aria-label="Previous">&#8249;</button>'+
    '<img alt="">'+
    '<button class="lb-nav lb-next" aria-label="Next">&#8250;</button>';
  document.body.appendChild(d);
  lbEl=d;lbImg=$("img",d);
  $(".lb-close",d).addEventListener("click",closeLb);
  $(".lb-prev",d).addEventListener("click",function(e){e.stopPropagation();moveLb(-1);});
  $(".lb-next",d).addEventListener("click",function(e){e.stopPropagation();moveLb(1);});
  d.addEventListener("click",function(e){if(e.target===d)closeLb();});
  window.addEventListener("keydown",function(e){
    if(!lbEl.classList.contains("open"))return;
    if(e.key==="Escape")closeLb();
    if(e.key==="ArrowLeft")moveLb(-1);
    if(e.key==="ArrowRight")moveLb(1);
  });
}
function openLb(list,i){lbList=list;lbIndex=i;lbImg.src=lbList[i];lbEl.classList.add("open");}
function moveLb(d){lbIndex=(lbIndex+d+lbList.length)%lbList.length;lbImg.src=lbList[lbIndex];}
function closeLb(){lbEl.classList.remove("open");}

/* ---------------- EVENTS page ---------------- */
var evStatus="all",evCat="all",evQuery="";
function eventCard(e){
  return '<article class="ev-card reveal">'+
    '<a href="'+e.url+'" target="_blank" rel="noopener" class="ev-thumb">'+
      '<img src="'+img(e.img,900)+'" alt="'+e.n+'" loading="lazy">'+
      '<span class="ev-status '+e.s+'">'+(e.s==="ready"?"Photos ready":"Upcoming")+'</span>'+
      '<span class="ev-cat">'+e.c+'</span></a>'+
    '<div class="ev-body">'+
      '<span class="ev-date">'+e.d+'</span>'+
      '<h3 class="ev-name">'+e.n+'</h3>'+
      '<span class="ev-loc">&#9678; '+e.loc+'</span>'+
      '<a href="'+e.url+'" target="_blank" rel="noopener" class="ev-link">'+
        (e.s==="ready"?"View gallery":"Event details")+' <span class="arw">&rarr;</span></a>'+
    '</div></article>';
}
function renderEvents(){
  var grid=$("#evGrid"); if(!grid)return;
  var list=D.EVENTS.filter(function(e){
    var okS=evStatus==="all"||e.s===evStatus;
    var okC=evCat==="all"||e.c===evCat;
    var okQ=!evQuery||(e.n+" "+e.loc+" "+e.c).toLowerCase().indexOf(evQuery)>-1;
    return okS&&okC&&okQ;
  }).sort(function(a,b){
    if(a.s!==b.s)return a.s==="upcoming"?-1:1;
    return a.s==="upcoming"?a.iso.localeCompare(b.iso):b.iso.localeCompare(a.iso);
  });
  var c=$("#evCount");
  if(c)c.textContent=list.length+" "+(list.length===1?"event":"events");
  grid.innerHTML=list.length?list.map(eventCard).join(""):
    '<div class="ev-empty">No events match your search yet — try a different sport or keyword.</div>';
  observeReveals();
}
function initEvents(){
  if(!$("#evGrid"))return;
  renderEvents();
  var s=$("#evSearch");
  if(s)s.addEventListener("input",function(e){evQuery=e.target.value.toLowerCase().trim();renderEvents();});
  $$("#evStatus .chip").forEach(function(c){
    c.addEventListener("click",function(){
      $$("#evStatus .chip").forEach(function(x){x.classList.remove("active");});
      c.classList.add("active");evStatus=c.getAttribute("data-v");renderEvents();
    });
  });
  $$("#evCats .chip").forEach(function(c){
    c.addEventListener("click",function(){
      $$("#evCats .chip").forEach(function(x){x.classList.remove("active");});
      c.classList.add("active");evCat=c.getAttribute("data-v");renderEvents();
    });
  });
}

/* ---------------- SURF page ---------------- */
function renderSurf(){
  var grid=$("#surfGrid"); if(!grid)return;
  grid.innerHTML=D.SURF.map(function(s){
    return '<article class="ev-card reveal">'+
      '<a href="'+s.url+'" target="_blank" rel="noopener" class="ev-thumb">'+
        '<img src="'+img(s.img,900)+'" alt="'+s.n+'" loading="lazy">'+
        '<span class="ev-status ready">Gallery open</span></a>'+
      '<div class="ev-body">'+
        '<span class="ev-date">Surf School</span>'+
        '<h3 class="ev-name">'+s.n+'</h3>'+
        '<span class="ev-loc">&#9678; '+s.sub+'</span>'+
        '<a href="'+s.url+'" target="_blank" rel="noopener" class="ev-link">Find your photos <span class="arw">&rarr;</span></a>'+
      '</div></article>';
  }).join("");
  observeReveals();
}

/* ---------------- STOCK GALLERY ---------------- */
function avatar(p){
  return '<span class="ava">'+(p.portrait?
    '<img src="'+p.portrait+'" alt="'+p.name+'">':
    '<span class="mono">'+p.initials+'</span>')+'</span>';
}
function renderShooters(){
  var grid=$("#shooterGrid"); if(!grid)return;
  grid.innerHTML=D.PHOTOGRAPHERS.map(function(p){
    return '<a class="shooter reveal" href="photographer.html?id='+p.id+'">'+
      avatar(p)+
      '<span class="shooter-name">'+p.name+'</span>'+
      '<span class="shooter-tag">'+p.tag+'</span>'+
      '<span class="shooter-view">View portfolio <span class="arw">&rarr;</span></span>'+
    '</a>';
  }).join("");
  observeReveals();
}

/* ---------------- PHOTOGRAPHER PROFILE ---------------- */
function renderProfile(){
  var mount=$("#profileMount"); if(!mount)return;
  var qs=new URLSearchParams(window.location.search);
  var id=qs.get("id");
  var p=null,i;
  for(i=0;i<D.PHOTOGRAPHERS.length;i++){if(D.PHOTOGRAPHERS[i].id===id){p=D.PHOTOGRAPHERS[i];break;}}
  if(!p)p=D.PHOTOGRAPHERS[0];
  document.title=p.name+" — Stock Gallery — IMAGE MEDIA";
  var full=p.photos.map(function(ph){return img(ph,2000);});
  var shots=p.photos.map(function(ph,idx){
    return '<figure class="pf-shot" data-i="'+idx+'">'+
      '<img src="'+img(ph,1000)+'" alt="'+p.name+' photograph '+(idx+1)+'" loading="lazy"></figure>';
  }).join("");
  mount.innerHTML=
    '<a href="stock.html" class="backlink">&larr; All photographers</a>'+
    '<div class="profile-head reveal">'+avatar(p)+
      '<div><div class="profile-tag">'+p.tag+'</div>'+
      '<h1 class="profile-name display">'+p.name+'</h1></div></div>'+
    '<p class="profile-bio reveal">'+p.bio+'</p>'+
    '<div class="profile-meta reveal">'+
      '<div><div class="k">Based in</div><div class="v">'+p.based+'</div></div>'+
      '<div><div class="k">With Image Media since</div><div class="v">'+p.since+'</div></div>'+
      '<div><div class="k">Specialty</div><div class="v">'+p.tag+'</div></div>'+
    '</div>'+
    '<div class="profile-photos reveal" id="profilePhotos" style="margin-top:46px">'+shots+'</div>'+
    '<div class="profile-cta reveal">'+
      '<div><h3>See the full collection</h3>'+
      '<p>These are six selected frames. Browse '+p.name.split(" ")[0]+"'s"+' complete archive and buy any photo securely through Fotop.</p></div>'+
      '<a href="'+(D.FOTOP)+'" target="_blank" rel="noopener" class="btn btn-primary">View all photos on Fotop <span class="arw">&rarr;</span></a>'+
    '</div>';
  $$("#profilePhotos .pf-shot").forEach(function(el){
    el.addEventListener("click",function(){openLb(full,+el.getAttribute("data-i"));});
  });
  observeReveals();
}

/* ---------------- INIT ---------------- */
buildNav();
buildFooter();
buildLightbox();
navBehaviour();
fillMarquee();
fillStrips();
heroReady();
initEvents();
renderSurf();
renderShooters();
renderProfile();
observeReveals();
observeCounts();

/* contact forms (any page) */
$$("form[data-contact]").forEach(function(f){
  f.addEventListener("submit",function(e){
    e.preventDefault();
    var el=f.elements,g=function(n){return el[n]?(""+el[n].value).trim():"";};
    var subject=encodeURIComponent("Event coverage enquiry — "+(g("org")||"New enquiry"));
    var body=encodeURIComponent(
      "Name: "+g("name")+"\nOrganisation / event: "+g("org")+"\nEmail: "+g("email")+
      "\nEvent type: "+g("etype")+"\n\nMessage:\n"+g("msg"));
    window.location.href="mailto:contact@imagemedia.one?subject="+subject+"&body="+body;
  });
});
})();
