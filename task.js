let clicker__counter = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie');
cookie.onclick = () => {        
    clicker__counter.textContent = Number(clicker__counter.textContent)+1;    
    clicker__counter.textContent%2!==0?cookie.width = 300:cookie.width = 200;    
    }       