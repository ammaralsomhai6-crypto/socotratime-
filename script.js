/* =============================================
RESET & GENERAL STYLES
============================================= */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Cairo', sans-serif;
    background: url("images/a1.jpg") center/cover no-repeat;
    color: white;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

/* =============================================
SPLASH SCREEN
============================================= */
#splash {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.splash-box {
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(20px);
    padding: 20px;
    border-radius: 250px;
    text-align: center;
    width: 100%;
    max-width:400px;
}

#splash-logo {
    width: 50vw;
    max-width: 100px;
    height: auto;
    border-radius: 50%;
    animation: logo-glow 2.5s infinite alternate;
}

.splash-box h1 {
    font-size: 10vw;
    max-font-size: 50px;
    margin: 0px 0;
    background: linear-gradient(90deg,#ff3cac,#784ba0,#2b86c5);
    -webkit-background-clip: text;
    color: transparent;
}

.splash-box p {
    font-size: 2.5vw;
    max-font-size: 2px;
    margin-bottom: 80px;
}

.splash-box button {
    padding: 2.5vw 3.5vw;
    font-size: 2.3vw;
    max-font-size: 40px;
    border: none;
    border-radius: 50px;
    color: white;
    background: linear-gradient(45deg,#ff3cac,#784ba0,#2b86c5);
    cursor: pointer;
    box-shadow: 0 0 30px rgba(255,60,172,0.6);
}

/* =============================================
HEADER
============================================= */
header {
    position: fixed;
    top: 35px;
    width: 100%;
    padding: 1.5vw 3vw;
    z-index: 1000;
    background: rgba(0,0,0,0.35);
    backdrop-filter: blur(2px);
    transition: top 1s ease, opacity 1s ease;
    opacity: 1000;
}

header.hidden { top: -500px; opacity: 50; }

.top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-clock {
    display: flex;
    align-items: center;
    gap: -30vw;
}

.logo-clock img {
    width: 15vw;
    max-width: 180px;
    height: auto;
    border-radius: 50%;
    cursor: pointer;
    margin-top: 0;
    animation: logo-float 4s infinite ease-in-out;
}

#clock {
    background: rgba(0,0,0,0.5);
    padding: 0vw 0.3vw;
    border-radius: 20px;
    font-size: 1vw;
}

#clock::before { content:" 🕒 "; }

.lang-btns {
    display: flex;
    gap: 1vw;
}

.lang-btn {
    padding: 1vw 1vw;
    border-radius: 10px;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(90px);
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    font-size: 1.5vw;
}

.lang-btn:hover { background: rgba(255,152,0,0.6); }

nav {
    display: flex;
    justify-content: center;
    gap: 0.5vw;
    margin-top: 0vw;
}

nav a {
    padding: 1.0vw 2.5vw;
    font-size: 2.0vw;
    font-weight: 800;
    border-radius: 100px;
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 25px rgba(0,0,0,0.6);
    transition: 0.4s ease;
}

nav a:hover {
    transform: translateY(-0.5vw) scale(1.08);
    color: #ff9800;
    box-shadow: 0 0 35px #ff9800;
    background: rgba(255,152,0,0.25);
}



/* =============================================
HERO SECTION
============================================= */
.hero {
    min-height: 100vh;
    background: url("images/socotra.jpg") center / cover no-repeat;
    position: relative;
}

.hero h1 {
    position: absolute;
    top: 2vw;
    left: 50%;
    transform: translateX(-50%);
    font-size: 8vw;
    background: linear-gradient(90deg,#ff3cac,#784ba0,#2b86c5);
    -webkit-background-clip: text;
    color: transparent;
    z-index: 998;
}

.hero .overlay {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 10vw;
    padding: 35vw 2vw 2vw 2vw;
    justify-items: center;
    align-items: start;
    animation: fadeIn 1s ease forwards;
    opacity: 10;
}

.hero .card {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 80vh;
    border-radius: 150px;
    overflow: hidden;
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 50px rgba(255,255,255,0.15);
    transition: 0.5s ease, transform 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;
    animation: floatCard 4s ease-in-out infinite;
}

.hero .card img {
    width: 150%;
    height: 75%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.hero .card .text {
    padding: 2.5vw;
    font-size: 0.2vw;
    font-weight: 90;
    text-align: center;
    color: white;
    background: rgba(0,0,0,0.35);
}

.hero .card:hover {
    transform: translateY(-0.5vw) scale(1.05) rotate(-1deg);
}

.hero .card:hover img { transform: scale(1.1); }



.hero h1 {
    position: absolute;
    top: 50%; /* منتصف القسم عموديًا */
    left: 50%; /* منتصف القسم أفقيًا */
    transform: translate(-50%, -50%);
    font-size: 1vw;
    font-weight: 90;
    color: white;
    text-align: center;

    /* الخلفية الشفافة */
    background: rgba(0, 0, 0, 0.35); /* لون أسود شفاف */
    padding: 1vw 2vw;
    border-radius: 20px;

    /* تحسين المظهر */
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
}





/* =============================================
HERO CARDS - تعديل حجم الصور الأربع الأولى لتكون أصغر وفي سطر واحد
============================================= */
.hero .overlay {
    display: flex;           /* جعل الصور في سطر واحد */
    justify-content: center; /* توسيط الصور */
    flex-wrap: nowrap;       /* منع الانتقال لسطر آخر */

    gap: 2vw;                /* مسافة بين الصور */
    padding: 10vw 2vw 2vw 2vw; /* تخفيف المساحة العليا */
}

.hero .overlay .card {
    width: 300px;            /* تصغير حجم كل بطاقة */
    height: 280px;           /* تصغير ارتفاع كل بطاقة */
    border-radius: 40px;     /* تقليل الانحناء ليناسب الحجم الجديد */
}

.hero .overlay .card img {
    width: 100%;             /* ملء البطاقة أفقياً */
    height: 100%;            /* ملء البطاقة رأسياً */
    object-fit: cover;       /* المحافظة على نسبة الصورة */
    border-radius: 30px;     /* نفس انحناء البطاقة */
}


/* =============================================
HERO TEXT BOX ABOVE CARDS
============================================= */
.hero h1 {
    position: relative; /* بدل absolute حتى يكون داخل التدفق الطبيعي */
    top: 0; /* إزالة أي ازاحة سابقة */
    left: 0;
    transform: none; /* إزالة التحويل القديم */
    margin: 0 auto 3vw auto; /* مركز أفقي + مسافة أسفل المربع */
    display: inline-block;
    font-size: 0vw;
    font-weight: 500;
    text-align: center;
    color: white;

    /* الخلفية الشفافة */
    background: rgba(0, 0, 0, 0.40);
    padding: 30vw 0vw;
    border-radius: 10px;

    /* تحسين المظهر */
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
    z-index: 999;
}

/* =============================================
HERO OVERLAY - الصور الأربع تتحرك أسفل النص
============================================= */
.hero .overlay {
    margin-top: -25vw; /* مسافة بين المربع الشفاف والصور */
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10vw;
    padding: 100 2vw 2vw 2vw; /* إزالة ال padding العلوي القديم */
}


/* =============================================
SECTIONS WITH ICONS (ABOUT, TEAM, PLANTS, BIRDS, MOUNTAINS)
============================================= */
.about-socotra,
.plants-section,
.birds-section,
.mountains-section,
.team-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4vw;
    padding: 2.5vw 15vw;
    position: relative;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(15px);
    width: 98%;
    margin: 3vw auto;
    border-radius: 60px;
}

.about-socotra h2,
.plants-section h2,
.birds-section h2,
.mountains-section h2,
.team-section h2 {
    font-size: 3.5vw;
    font-weight: 900;
    text-align: center;
    background: linear-gradient(90deg,#ff3cac,#784ba0,#2b86c5);
    -webkit-background-clip: text;
    color: transparent;
}

/* CONTENT BOXES */
.about-content,
.plants-content,
.birds-content,
.mountains-content,
.team-content {
    display: flex;
    align-items: center;
    gap: 2vw;
    flex-wrap: wrap;
    justify-content: center;
}

.icon-box {
    width: 850px;
    height: 500px;
    border-radius: 22px;
    overflow: hidden;
    background: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 40px rgba(0,0,0,0.3);
    animation: icon-bounce 3s infinite ease-in-out;
}

.icon-box img { width: 100%; height: 100%; object-fit: cover; }

.text-box {
    max-width: 500px;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(250px);
    padding: 1.5vw;
    border-radius: 25px;
    box-shadow: 0 0 25px rgba(0,0,0,0.2);
    color: white;
    font-size: 1vw;
    line-height: 1;
}

.discover-btn {
    margin-top: 1vw;
    padding: 9vw 1vw;
    font-size: 2vw;
    border: none;
    border-radius: 150px;
    background: linear-gradient(45deg,#ff3cac,#784ba0,#2b86c5);
    color: white;
    cursor: pointer;
    font-weight: 900;
    box-shadow: 0 0 30px rgba(255,60,172,0.5);
    transition: 0.4s;
}

.discover-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(255,60,172,0.7);
}

/* =============================================
ABOUT SOCOTRA IMAGE ONLY
تصغير الصورة + حواف مستديرة + مناسب للجوال
============================================= */

.about-socotra .icon-box img {
    width: 100%;
    max-width: 220px;     /* تصغير الصورة */
    height: auto;
    border-radius: 20px;  /* حواف مستديرة */
    display: block;
    margin: 0 auto;       /* توسيط */
}

/* للجوال فقط */
@media (max-width: 768px) {
    .about-socotra .icon-box img {
        max-width: 300px; /* أصغر على الهاتف */
        border-radius: 20px;
    }
}

/* =============================================
ABOUT, TEAM, PLANTS, BIRDS, MOUNTAINS - نص فوق الصورة
============================================= */
.about-content .text-box,
.plants-content .text-box,
.birds-content .text-box,
.mountains-content .text-box,
.team-content .text-box {
    position: absolute;       /* يجعل الصندوق فوق الصورة */
    top: 50%;                 /* منتصف الصورة رأسياً */
    left: 80%;                /* منتصف الصورة أفقياً */
    transform: translate(-50%, -50%); /* لضبط التمركز تمام */
    z-index: 10;              /* فوق الصورة */
    background: rgba(0,0,0,0.35); /* نفس الخلفية الشفافة */
    padding: 1.8vw;           /* الحفاظ على البادينغ */
    border-radius: 25px;      /* نفس الحواف */
    max-width: 50%;           /* حجم مناسب للجوال */
    text-align: center;
}

/* تحريك الصورة قليلًا نحو اليمين */
.about-content .icon-box {
    position: relative;   /* ضروري لتحريكها */
    left: -65px;           /* تحريك 100px نحو اليمين، غيّر الرقم حسب رغبتك */
}


/* ============================
   SERVICES SECTION
============================ */
.services-section {
    width: 100%;
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
}

/* Title */
.services-section .section-title {
    font-size: clamp(1.8rem, 3vw, 3rem);
    font-weight: 800;
    text-align: center;
    background: linear-gradient(90deg,#ff3cac,#784ba0,#2b86c5);
    -webkit-background-clip: text;
    color: transparent;
}

/* Cards Container */
.services-scroll {
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 دوائر في الصف */
    gap: 2.5rem;
    justify-items: center;
}

/* Service Card (Circle) */
.service-card {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 30px rgba(0,0,0,0.25);
    border: 1px solid rgba(255,255,255,0.2);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    color: white;
    text-align: center;
    transition: 0.4s ease;
    cursor: pointer;
}

/* Icon */
.service-card i {
    font-size: 2.8rem;
    background: linear-gradient(90deg,#ff3cac,#784ba0,#2b86c5);
    -webkit-background-clip: text;
    color: transparent;
    transition: 0.4s ease;
}

/* Text */
.service-card p {
    font-size: 0.95rem;
    font-weight: 600;
    max-width: 80%;
    line-height: 1.3;
}

/* Hover Effect */
.service-card:hover {
    transform: translateY(-10px) scale(1.07);
    box-shadow: 0 0 45px rgba(255,60,172,0.6);
}

.service-card:hover i {
    transform: scale(1.2) rotate(6deg);
}



/* خلفية شفافة لقسم الخدمات فقط */
.services-section {
    background: rgba(255, 255, 255, 0.06); /* شفافية خفيفة */
    backdrop-filter: blur(10px);
    border-radius: 60px;
    padding: 4vw 2vw;
}


@media (max-width: 768px) {
    .services-section {
        border-radius: 30px;
        padding: 6vw 3vw;
    }
}




/* ============================
   RESPONSIVE
============================ */
@media (max-width: 1024px) {
    .services-scroll {
        grid-template-columns: repeat(3, 1fr); /* 3 في الصف */
    }
}

@media (max-width: 768px) {
    .services-scroll {
        grid-template-columns: repeat(4, 1fr); /* 2 في الصف */
        gap: 2rem;
    }

    .service-card {
        width: 170px;
        height: 170px;
    }

    .service-card i {
        font-size: 2.4rem;
    }

    .service-card p {
        font-size: 0.9rem;
    }
}


.pricing-section {
    margin: 5vw auto;
    padding: 3vw 2vw;
    text-align: center;
}

.pricing-title {
    font-size: 2rem;
    margin-bottom: 2vw;
    background: linear-gradient(90deg,#ff3cac,#784ba0,#2b86c5);
    -webkit-background-clip: text;
    color: transparent;
}

/* الصندوق الشفاف */
.pricing-box {
    display: flex;
    gap: 1.5vw;
    padding: 2.5vw;
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(20px);
    border-radius: 35px;
    overflow-x: auto;
    flex-wrap: nowrap;
}

/* البطاقة */
.price-card {
    min-width: 230px;
    height: 280px;
    border-radius: 28px;
    padding: 1.8vw;
    color: white;

    background: rgba(255,255,255,0.12);   /* شفافية */
    backdrop-filter: blur(15px);
    box-shadow: 0 0 30px rgba(255,255,255,0.12);

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;

    transition: all 0.45s ease;
}

/* الأيقونة */
.price-icon {
    font-size: 2.5rem;
    margin-bottom: 5px;
}

/* النص */
.price-card h3 {
    font-size: 1.2rem;
}

.price-card span {
    font-size: 2.1rem;
    font-weight: 900;
}

.price-card p {
    font-size: 0.9rem;
    opacity: 0.9;
}

/* ألوان خفيفة لكل بطاقة */
.card-1 { border: 1px solid rgba(255,80,150,0.4); }
.card-2 { border: 1px solid rgba(255,200,50,0.4); color:#222; }
.card-3 { border: 1px solid rgba(80,150,255,0.4); }
.card-4 { border: 1px solid rgba(100,220,120,0.4); color:#222; }

/* Hover */
.price-card:hover {
    transform: translateY(-12px) scale(1.07);
    box-shadow: 0 0 45px rgba(255,255,255,0.35);
}

/* جوال */
@media(max-width:768px){
    .pricing-box {
        gap: 4vw;
        padding: 4vw;
    }

    .price-card {
        min-width: 250px;
        height: 300px;
    }
}



.contact-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3vw 1vw;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(15px);
    border-radius: 30px;
    margin: 2vw auto;
    max-width: 400px;
    flex-direction: column;
}

.contact-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5vw;
}

.contact-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255,255,255,0.3);
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.contact-image:hover {
    transform: scale(1.1);
    box-shadow: 0 0 35px rgba(255,152,0,0.6);
}

.contact-icons {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: nowrap;
}

.contact-icon {
    width: 50px;
    height: 50px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(60px);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.contact-icon:hover {
    transform: scale(1.2) translateY(-5px);
    box-shadow: 0 0 25px rgba(255,152,0,0.8);
    background: linear-gradient(45deg, #ff3cac, #784ba0, #2b86c5);
}

/* Responsive للجوّال */
@media(max-width:768px){
    .contact-section { max-width: 90%; padding: 4vw 2vw; }
    .contact-image { width: 100px; height: 100px; }
    .contact-icons { gap: 3vw; }
    .contact-icon { width: 50px; height: 50px; font-size: 4vw; }
}

/* ======== Responsive ======== */
@media(max-width:768px){
    .contact-section { max-width: 90%; padding: 5vw 2vw; }
    .contact-image img { width: 150px; height: 150px; }
    .contact-icon { width: 40px; height: 40px; font-size: 1.2rem; }
}
@media(max-width:768px){
    .contact-icons {
        flex-direction: row !important;   /* أجبر الاتجاه أفقي */
        justify-content: center;
        gap: 3vw;                         /* تباعد مناسب للجوال */
    }

    .contact-icon {
        width: 60px;     /* حجم مناسب للأيقونات */
        height: 60px;
        font-size: 5vw;  /* تكبير الأيقونة قليلاً لتناسب الجوال */
    }
}


/* =============================================
FOOTER
============================================= */
footer {
    background: #062b32;
    padding: 2vw;
    text-align: center;
    font-size: 1vw;
}

/* =============================================
ANIMATIONS
============================================= */
@keyframes fadeIn { to { opacity: 1; } }
@keyframes floatCard { 0%{transform:translateY(0);} 50%{transform:translateY(-1vw);} 100%{transform:translateY(0);} }
@keyframes logo-glow { from{transform:scale(1);} to{transform:scale(1.08) rotate(6deg);} }
@keyframes logo-float { 0%{transform:translateY(0);} 50%{transform:translateY(-1vw);} 100%{transform:translateY(0);} }
@keyframes icon-bounce { 0%{transform:translateY(0);} 50%{transform:translateY(-15px);} 100%{transform:translateY(0);} }

/* =============================================
RESPONSIVE
============================================= */
@media(max-width:768px){

    .about-content,
    .plants-content,
    .birds-content,
    .mountains-content,
    .team-content {
        flex-direction: column; 
        gap: 0vw; 
    }

    .icon-box { width: 290px; height: 250px; }

    .text-box { max-width: 90%; font-size: 3vw; padding: 4vw; }

    .discover-btn { font-size: 4vw; padding: 2vw 4vw; }

    .price-cards { flex-direction: column; gap: 5vw; }

    .price-card { width: 90%; height: auto; padding: 5vw 3vw; }

    .price-card h3 { font-size: 4vw; }

    .price-card p { font-size: 3.5vw; }

    .price-section h2 { font-size: 6vw; }

    .contact-icons { flex-direction: column; gap: 5vw; }

    .contact-icon { width: 80%; height: 80px; font-size: 5vw; }

    .contact-section h2 { font-size: 6vw; }

}
/* =============================================
RESPONSIVE FIXED FOR MOBILE VS LAPTOP
============================================= */
@media(max-width:1024px){
    /* الاحتفاظ بنفس نسب اللابتوب */
    .hero h1 { font-size: 5vw; top: 7vw; }
    .hero .overlay { padding: 35vw 2vw 2vw 2vw; gap: 4vw; }
    .hero .card { width: 90%; height: 80vh; border-radius: 150px; }
    .hero .card .text { font-size: 1.2vw; padding: 2.5vw; }

    .about-content,
    .plants-content,
    .birds-content,
    .mountains-content,
    .team-content { flex-direction: column; gap: 3vw; }
    .icon-box { width: 85%; height: auto; max-height: 500px; }
    .text-box { max-width: 90%; font-size: 1vw; padding: 1.5vw; }
    .discover-btn { font-size: 2vw; padding: 1.5vw 2.5vw; }

    .services-cards, .price-cards, .pricing-cards { gap: 2.5vw; }
    .service-card, .price-card, .pricing-card { width: 90%; height: auto; padding: 2vw; }

    .service-card h3, .price-card h3, .pricing-card h3 { font-size: 2vw; }
    .service-card p, .price-card p, .pricing-card p { font-size: 1.5vw; }
    .service-card i { font-size: 3vw; }

    .contact-section, .contact-icon { width: 90%; height: auto; font-size: 4vw; }
    .contact-section h2 { font-size: 5vw; }
}


