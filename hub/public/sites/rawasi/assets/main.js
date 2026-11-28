(function(){
var hd=document.getElementById('hd');
function sc(){hd.classList.toggle('sc',window.scrollY>40)}sc();addEventListener('scroll',sc,{passive:true});
var b=document.getElementById('burger'),n=document.getElementById('nav');
b&&b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''});
n&&n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded',false);document.body.style.overflow=''}});
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
els.forEach(function(el,i){io.observe(el)});}else els.forEach(function(el){el.classList.add('in')});
setTimeout(function(){document.querySelectorAll('.hero .rv,.pagehero .rv,.pj-hero .rv').forEach(function(e){e.classList.add('in')})},60);
// counters
var cs=document.querySelectorAll('[data-count]');
if('IntersectionObserver' in window&&cs.length){var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var el=e.target,t=+el.dataset.count,p=el.dataset.plus?'+':'',s=performance.now();(function f(now){var k=Math.min(1,(now-s)/1600),v=Math.round(t*(1-Math.pow(1-k,3)));el.textContent=v+p;if(k<1)requestAnimationFrame(f)})(s)})},{threshold:.5});cs.forEach(function(c){co.observe(c)})}
// project filter
var ch=document.getElementById('chips');
if(ch)ch.addEventListener('click',function(e){var c=e.target.closest('.chip');if(!c)return;ch.querySelectorAll('.chip').forEach(function(x){x.classList.toggle('on',x===c)});var f=c.dataset.f;document.querySelectorAll('#pgrid .pc').forEach(function(p){p.classList.toggle('hide',f!=='الكل'&&p.dataset.cat!==f)})});
// contact form -> whatsapp
var cf=document.getElementById('cf');
if(cf)cf.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(cf);var m='السلام عليكم، أنا '+(d.get('n')||'')+'\nنوع المشروع: '+d.get('t')+'\nجوالي: '+(d.get('p')||'')+'\n'+(d.get('m')||'');window.open('https://wa.me/966500000000?text='+encodeURIComponent(m),'_blank')});
})();
