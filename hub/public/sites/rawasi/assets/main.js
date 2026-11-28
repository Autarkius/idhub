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
// project request form -> whatsapp
var cf=document.getElementById('cf');
if(cf){
 function setErr(el,msg){var box=el.closest('.f')||el.closest('fieldset');box.classList.toggle('has-err',!!msg);var e=box.querySelector('.err');if(e)e.textContent=msg||''}
 function val(){
  var ok=true,first=null;function bad(el,m){setErr(el,m);ok=false;if(!first)first=el}
  var t=cf.querySelector('fieldset[data-req=t]');cf.querySelector('input[name=t]:checked')?setErr(t,''):bad(t,'اختر نوع المشروع');
  var st=cf.querySelector('fieldset[data-req=stage]');cf.querySelector('input[name=stage]:checked')?setErr(st,''):bad(st,'اختر مرحلة واحدة على الأقل');
  var city=cf.city;city.value.trim().length<2?bad(city,'اكتب اسم المدينة'):setErr(city,'');
  var area=cf.area;if(area.value.trim()&&!/^[0-9\u0660-\u0669,.\s]+$/.test(area.value.trim()))bad(area,'اكتب المساحة بالأرقام فقط');else setErr(area,'');
  var n=cf.n;n.value.trim().length<2?bad(n,'اكتب اسمك'):setErr(n,'');
  var p=cf.p,d=p.value.replace(/[^0-9\u0660-\u0669]/g,'');d.length<9?bad(p,'اكتب رقم جوال صحيح (9 أرقام على الأقل)'):setErr(p,'');
  var e=cf.e;e.value.trim()&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.value.trim())?bad(e,'اكتب بريدًا إلكترونيًا صحيحًا'):setErr(e,'');
  return {ok:ok,first:first};
 }
 cf.addEventListener('change',function(e){if(cf.querySelector('.has-err'))val()});
 cf.addEventListener('submit',function(ev){ev.preventDefault();var r=val();
  if(!r.ok){var f=r.first.closest('.f')||r.first;f.scrollIntoView({behavior:'smooth',block:'center'});var i=f.querySelector('input,select,textarea');i&&i.focus({preventScroll:true});return}
  var g=function(k){return (cf.elements[k].value||'').trim()};
  var stages=[].map.call(cf.querySelectorAll('input[name=stage]:checked'),function(x){return x.value}).join('، ');
  var L=['السلام عليكم، أرغب في طلب مشروع جديد:','','*نوع المشروع:* '+cf.querySelector('input[name=t]:checked').value,'*المدينة:* '+g('city'),'*المساحة التقريبية:* '+(g('area')?g('area')+' م²':'غير محددة'),'*المرحلة المطلوبة:* '+stages,'*الميزانية التقريبية:* '+(g('budget')||'غير محددة'),'*الجدول الزمني:* '+(g('time')||'مرن'),'*تفاصيل المشروع:* '+(g('det')||'-'),'','*الاسم:* '+g('n'),'*الجوال:* '+g('p'),'*البريد:* '+(g('e')||'-')];
  window.open('https://wa.me/966500000000?text='+encodeURIComponent(L.join('\n')),'_blank','noopener');
 });
}
})();
