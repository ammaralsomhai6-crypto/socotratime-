function closeSplash(){
  const s=document.getElementById("splash");
  s.style.opacity=0;
  setTimeout(()=>s.remove(),1000);
}

function updateClock(){
  const d=new Date(Date.now()+3*3600000);
  document.getElementById("clock").innerText=
    d.getUTCHours().toString().padStart(2,'0')+":"+ 
    d.getUTCMinutes().toString().padStart(2,'0')+":"+ 
    d.getUTCSeconds().toString().padStart(2,'0');
}
setInterval(updateClock,1000);
updateClock();

/* HEADER HIDE */
let lastScroll=0;
const header=document.querySelector("header");
window.addEventListener("scroll",()=>{
  const c=window.pageYOffset;
  if(c>lastScroll && c>50){
    header.classList.add("hidden");
  }else{
    header.classList.remove("hidden");
  }
  lastScroll=c;
});

/* ================= ICON ROTATIONS ================= */
window.addEventListener('DOMContentLoaded', () => {
    /* PLANTS ICON */
    const plantsImages = ["images/b1.jpg","images/b3.jpg","images/b1.jpg","images/b1.jpg","images/b1.jpg"];
    let currentPlantIndex = 0;
    const plantsIcon = document.getElementById("plants-icon");
    setInterval(() => {
        currentPlantIndex = (currentPlantIndex + 1) % plantsImages.length;
        plantsIcon.src = plantsImages[currentPlantIndex];
    }, 5000);

    /* BIRDS ICON */
    const birdsImages = ["images/c1.jpg","images/c2.jpg","images/c3.jpg","images/c4.jpg","images/c5.jpg"];
    let currentBirdIndex = 0;
    const birdsIcon = document.getElementById("birds-icon");
    setInterval(() => {
        currentBirdIndex = (currentBirdIndex + 1) % birdsImages.length;
        birdsIcon.src = birdsImages[currentBirdIndex];
    }, 5000);

    /* MOUNTAINS ICON */
    const mountainsImages = ["images/d1.jpg","images/d2.jpg","images/d3.jpg","images/d4.jpg","images/d5.jpg"];
    let currentMountainIndex = 0;
    const mountainsIcon = document.getElementById("mountains-icon");
    setInterval(() => {
        currentMountainIndex = (currentMountainIndex + 1) % mountainsImages.length;
        mountainsIcon.src = mountainsImages[currentMountainIndex];
    }, 5000);

    /* TEAM ICON (طاقم العمل) */
    const teamImages = ["images/t1.jpg","images/t2.jpg","images/t3.jpg","images/t4.jpg","images/t5.jpg"];
    let currentTeamIndex = 0;
    const teamIcon = document.getElementById("team-icon"); // تأكد أن لديك img بالـ id هذا في HTML
    setInterval(() => {
        currentTeamIndex = (currentTeamIndex + 1) % teamImages.length;
        teamIcon.src = teamImages[currentTeamIndex];
    }, 5000);
});
