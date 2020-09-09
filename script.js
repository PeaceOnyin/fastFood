let boxWrap = document.getElementById('boxWrap');

boxWrap.addEventListener('click', function(){
	let childTarg = event.target
  if(childTarg.matches('.box')){
  	childTarg.classList.toggle('scale-back')
    childTarg.classList.toggle('fa-check')
  }
})