const text = document.querySelector(".sec-text");
const textLoad = () =>{
    setTimeout(()=>{
        text.textContent ="Suman";
    },1000);
    setTimeout(()=>{
        text.textContent = "Web Developer";
    },4000);
    setTimeout(()=>{
        text.textContent = "Learner";
    },8000);
    setTimeout(()=>{
        text.textContent = "Explorer";
    },12000);
}
textLoad();
setInterval(textLoad, 15000);

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  