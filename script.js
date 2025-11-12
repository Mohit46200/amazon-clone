const outer=document.querySelectorAll('#maincontent')
outer.forEach(function(val){
    const inner=val.children;
    Array.from(inner).forEach(function(e){
        Array.from(e.children).forEach(function(f){
            f.addEventListener('click',function(hh){
                console.log(f)
               f.remove()
            });
        }); 
    });
});