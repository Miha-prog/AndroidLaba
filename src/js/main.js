document.addEventListener('DOMContentLoaded',function(){
  var chips=document.querySelectorAll('.chip');
  chips.forEach(function(c){c.addEventListener('click',function(){
    chips.forEach(function(x){x.classList.remove('is-active');x.setAttribute('aria-pressed','false')});
    c.classList.add('is-active');c.setAttribute('aria-pressed','true')})});
  var sw=document.querySelector('.switch');
  if(sw)sw.addEventListener('click',function(){
    var on=sw.classList.toggle('is-on');sw.setAttribute('aria-checked',on)});
  var cp=document.querySelector('.copy');
  if(cp)cp.addEventListener('click',function(){
    var t=document.querySelector('.link__url').textContent;
    if(navigator.clipboard)navigator.clipboard.writeText('https://'+t);
    cp.textContent='Готово ✓';setTimeout(function(){cp.textContent='Копировать'},1500)});
});
