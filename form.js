(function(){var f=document.getElementById('vf');if(!f)return;var m=document.getElementById('m'),b=f.querySelector('button[type=submit]');
var CALL=' Please call Holliday Real Estate at 601-795-9371 or Elijah at 601-215-9766.';
function show(t){m.textContent=t;m.style.display='block';m.focus()}
f.addEventListener('submit',function(e){e.preventDefault();if(!f.checkValidity()){f.reportValidity();return}
var d={};new FormData(f).forEach(function(v,k){d[k]=v});if(d.botcheck){return}
if(!d.access_key||d.access_key.indexOf('YOUR_')===0){show('This form is not connected yet.'+CALL);return}
b.disabled=true;
fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)})
.then(function(r){return r.json()}).then(function(j){if(!j.success)throw 0;f.reset();show('Thanks. Your message was sent and Elijah will reply personally.')})
.catch(function(){show('Something went wrong and your message may not have been sent.'+CALL)}).then(function(){b.disabled=false})})})();
