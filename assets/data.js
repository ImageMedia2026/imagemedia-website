/* ===================================================================
   IMAGE MEDIA — shared data
   Photos are served from the existing Squarespace CDN (public URLs).
   Stock Gallery photographers are placeholder concepts — swap freely.
   =================================================================== */
window.IM = {
  CDN: "https://images.squarespace-cdn.com/content/v1/68d118d75e6bb15424781300/",
  FOTOP: "https://imagemedia.fotop.com",

  SPORTS: ["Marathon","Trail Running","Road Cycling","Gravel","Triathlon","OCR",
           "Hyrox","CrossFit","Surf","Motocross","Jiu-Jitsu","Volleyball",
           "Beach Tennis","Equestrian","Athletics"],

  /* ---- events covered / upcoming ---- */
  EVENTS: [
    {n:"Cursa Ciutat de Vilanova",c:"Running",loc:"Vilanova i la Geltrú, Spain",d:"18 May 2026",iso:"2026-05-18",s:"ready",url:"https://www.imagemedia.one/events/cursa-ciutat-de-vilanova",img:"91427b47-2f62-4580-a68e-67e5d546e93f/%40paulo.nomade-32+2.JPG"},
    {n:"Ganxet Gravel Reus",c:"Cycling",loc:"Reus, Spain",d:"17 May 2026",iso:"2026-05-17",s:"ready",url:"https://www.imagemedia.one/events/ganxet-gravel-reus",img:"0800eee7-eb58-43d1-96fb-3c6bee142f54/%40paulo.nomade_IBR3_-22.jpg"},
    {n:"Trail Rota dos Piratas",c:"Trail",loc:"Portugal",d:"17 May 2026",iso:"2026-05-17",s:"ready",url:"https://www.imagemedia.one/events/trail-rota-dos-piratas",img:"e768fc34-c32d-4ab2-a164-9730637ef3b3/IMGL8514.jpg"},
    {n:"Delphi Half Marathon",c:"Running",loc:"Ireland",d:"16 May 2026",iso:"2026-05-16",s:"ready",url:"https://www.imagemedia.one/events/delphi-half-marathon",img:"5562fa46-6ed7-4052-bfa9-f1e70477a885/wideshotsluis3356.JPG"},
    {n:"Gran Fondo València",c:"Cycling",loc:"València, Spain",d:"1–2 May 2026",iso:"2026-05-01",s:"ready",url:"https://www.imagemedia.one/events/gran-fondo-valencia",img:"cc75a17b-4331-4076-bddb-e28075d93ab7/wideshotsluis3389.JPG"},
    {n:"Hurbax Valladolid",c:"OCR",loc:"Valladolid, Spain",d:"25 Apr 2026",iso:"2026-04-25",s:"ready",url:"https://www.imagemedia.one/events/hurbax-valladolid",img:"f976ce78-6a49-4f14-a0eb-36ff3cd93c98/MX+Vieira+do+Minho_2025+%28458+of+460%29.jpg"},
    {n:"Valencia Throwdown",c:"Functional",loc:"València, Spain",d:"22–24 May 2026",iso:"2026-05-22",s:"upcoming",url:"https://www.imagemedia.one/events/valencia-throwdown",img:"b216261b-5833-4b05-a7d4-ac410d5f155b/GjI4E-tXEAAfiFQ.jpg"},
    {n:"Tri 100 Llanes",c:"Triathlon",loc:"Llanes, Spain",d:"24 May 2026",iso:"2026-05-24",s:"upcoming",url:"https://www.imagemedia.one/events/tri10llanes",img:"8182e9f1-3a74-4563-9a94-f02541c4063e/%40paulo.nomade_IBR_D1-126.jpg"},
    {n:"OCR European Championships",c:"OCR",loc:"Europe",d:"28–31 May 2026",iso:"2026-05-28",s:"upcoming",url:"https://www.imagemedia.one/events/ocr-european-championships",img:"e768fc34-c32d-4ab2-a164-9730637ef3b3/IMGL8514.jpg"},
    {n:"Italian Showdown® 2026",c:"Functional",loc:"Italy",d:"29–31 May 2026",iso:"2026-05-29",s:"upcoming",url:"https://www.imagemedia.one/events/italian-showdown-2026-",img:"50e75b22-f35d-4d46-aa12-57b807cc8a4d/%40paulo.nomade_NATIONAL+OPEN_JIUJITSU-66.jpg"},
    {n:"La Magia del Grial",c:"Trail",loc:"València, Spain",d:"30 May 2026",iso:"2026-05-30",s:"upcoming",url:"https://www.imagemedia.one/events/la-magia-del-grial",img:"b6bcbe9e-60f8-434c-afdd-7c5d894a8dd1/WB24UTM-1499.jpg"},
    {n:"II Avynt Hyrox Simulation",c:"Functional",loc:"Spain",d:"30 May 2026",iso:"2026-05-30",s:"upcoming",url:"https://www.imagemedia.one/events/ihl2dbribk5pmo7egx2sw71cuf0igv",img:"6ddec230-a7d4-4dc7-8384-a7e9fa2929e5/DSC09112-2.JPG"},
    {n:"Santyago 10K",c:"Running",loc:"Spain",d:"30 May 2026",iso:"2026-05-30",s:"upcoming",url:"https://www.imagemedia.one/events/la-magia-del-gria",img:"e58f3214-e7a8-44d1-8d1f-78659770cf48/12_%40paulo.nomade_CNM_Lousada-8215.jpg"},
    {n:"Hurbax Oviedo",c:"OCR",loc:"Oviedo, Spain",d:"13 Jun 2026",iso:"2026-06-13",s:"upcoming",url:"https://www.imagemedia.one/events/hurbax-oviedo",img:"6c74a584-3517-4053-8f35-dbc306c1daed/MX+Vieira+do+Minho_2025+%28382+of+460%29.jpg"},
    {n:"10K Marín",c:"Running",loc:"Marín, Spain",d:"14 Jun 2026",iso:"2026-06-14",s:"upcoming",url:"https://www.imagemedia.one/events/10k-marn",img:"5562fa46-6ed7-4052-bfa9-f1e70477a885/wideshotsluis3356.JPG"},
    {n:"Chandrexa Trail 2026",c:"Trail",loc:"Galicia, Spain",d:"21 Jun 2026",iso:"2026-06-21",s:"upcoming",url:"https://www.imagemedia.one/events/dw8zqog02m3pjahh8yg318hdy2vm6o",img:"e768fc34-c32d-4ab2-a164-9730637ef3b3/IMGL8514.jpg"}
  ],

  /* ---- surf schools (galleries on Fotop) ---- */
  SURF: [
    {n:"Fish School",sub:"Facial-recognition gallery",url:"https://fishsurfschool.fotop.com",img:"08633583-b3b7-47e9-ad84-285423a3ccee/Fish-School.jpg"},
    {n:"Surf Training",sub:"Facial-recognition gallery",url:"https://surftrainingschool.fotop.com",img:"842bfdac-888c-4fdb-9f63-f259b856ce16/Surf-Training.jpg"},
    {n:"Flower Power",sub:"Facial-recognition gallery",url:"https://flowerpower.fotop.com",img:"01d2c822-d85d-45ad-b037-c2b02b68ecc2/Flower+Power"},
    {n:"Onda Pura",sub:"Facial-recognition gallery",url:"https://ondapura.fotop.com",img:"0dac0cba-d902-4ca6-9357-a998b488a8cd/Onda-Pura.jpg"},
    {n:"Surfing Life",sub:"Facial-recognition gallery",url:"https://surfinglifeclub.fotop.com",img:"621208a7-d585-4a04-bb95-08833f3c7ccf/Surfing-Life.jpg"},
    {n:"Matosinhos Beach",sub:"Facial-recognition gallery",url:"https://imagemedia.fotop.com/fotos/eventos/index/evento/254671",img:"c5283ad5-5d2d-456a-a712-f01682f84318/Matosinhos-Beach.jpg"},
    {n:"Surf Aventura",sub:"Facial-recognition gallery",url:"https://imagemedia.fotop.com/fotos/eventos/index/evento/271991",img:"680d8ee6-911e-4874-8841-cb139cea96a5/Prancheta+1.png"},
    {n:"Kiber",sub:"Facial-recognition gallery",url:"https://imagemedia.fotop.com/fotos/eventos/index/evento/286833",img:"8c582688-c456-4345-84c1-282446419da9/kiber.png"},
    {n:"Sitges Surf Club",sub:"Facial-recognition gallery",url:"https://imagemedia.fotop.com/fotos/eventos/index/evento/286855",img:"900ec39f-3f40-4651-b0fd-cf1ba5e770d2/stiges.png"},
    {n:"Escola Catalana de Surf",sub:"Facial-recognition gallery",url:"https://imagemedia.fotop.com/fotos/eventos/index/evento/289453",img:"986aa527-e02c-4e7c-8107-30d643bea00b/catalana.png"},
    {n:"Shaka Surf Castell Defels",sub:"Facial-recognition gallery",url:"https://imagemedia.fotop.com/fotos/eventos/index/evento/292487",img:"659f80ac-e7cc-464f-a661-d92247994b89/WhatsApp+Image+2026-06-08+at+11.39.05.jpeg"}
  ],

  /* ---- STOCK GALLERY ---- */
  PHOTOGRAPHERS: [
    {id:"eduardo-castro",name:"Eduardo Castro",initials:"EC",tag:"Cycling & Triathlon",
     based:"Portugal / Spain",since:"2019",
     portrait:"assets/images/Eduardo-Castro.jpg",
     bio:"Eduardo chases speed on two wheels and in open water. From gran fondos winding through mountains to triathlon transitions at dawn, he finds the decisive frame inside the effort — raw, precise and full of movement.",
     photos:[
       "assets/images/Cycling/EDU19DSV00448.jpg",
       "assets/images/Cycling/educastrosports_dia03_1063_182533_859316_181917.jpg",
       "assets/images/triathon/AY1Q0368.jpg",
       "assets/images/Cycling/educastrosport_dia01_0755_182533_859316_181917.jpg",
       "assets/images/Cycling/educastrosports_dia02_7312_182533_859316_181917.jpg",
       "assets/images/triathon/AY1Q1854.jpg"
     ]},
    {id:"anderson-yamada",name:"Anderson Yamada",initials:"AY",tag:"Sports Photography",
     portrait:"assets/images/Anderson-Yamada.jpg",
     bio:"",photos:[]},
    {id:"luis-moreira",name:"Luis Moreira",initials:"LM",tag:"Sports Photography",
     portrait:"assets/images/Luis-Moreira.jpg",
     bio:"",photos:[]},
    {id:"michael-alexandre",name:"Michael Alexandre",initials:"MA",tag:"Sports Photography",
     portrait:"assets/images/Michael-Alexandre.jpg",
     bio:"",photos:[]},
    {id:"paulo-nomade",name:"Paulo Nomade",initials:"PN",tag:"Sports Photography",
     portrait:"assets/images/Paulo-Nomade.jpg",
     bio:"",photos:[]},
    {id:"sergio-mendes",name:"Sergio Mendes",initials:"SM",tag:"Sports Photography",
     portrait:"assets/images/Sergio-Mendes.jpg",
     bio:"",photos:[]},
    {id:"marco-rivera",name:"Marco Rivera",initials:"MR",tag:"Trail & Endurance",
     based:"Porto, Portugal",since:"2019",
     bio:"Marco lives where the trail gets steepest. He chases endurance athletes across mountain ridges and forest singletrack, hunting the one frame that holds an entire race — the breath, the grit, the summit light.",
     photos:["e768fc34-c32d-4ab2-a164-9730637ef3b3/IMGL8514.jpg","b6bcbe9e-60f8-434c-afdd-7c5d894a8dd1/WB24UTM-1499.jpg","5562fa46-6ed7-4052-bfa9-f1e70477a885/wideshotsluis3356.JPG","91427b47-2f62-4580-a68e-67e5d546e93f/%40paulo.nomade-32+2.JPG","e58f3214-e7a8-44d1-8d1f-78659770cf48/12_%40paulo.nomade_CNM_Lousada-8215.jpg","93b41c73-1bc1-4bf4-80b1-af2313011a65/%40paulo.nomade-Caminha_-22.jpg"]},
    {id:"lucia-ferran",name:"Lucía Ferrán",initials:"LF",tag:"Road & Gravel Cycling",
     based:"València, Spain",since:"2020",
     bio:"Lucía reads a peloton like a sentence. From dawn gran fondos to dust-blown gravel stages, she captures speed with a painter's eye for colour, line and the quiet effort behind every pedal stroke.",
     photos:["8182e9f1-3a74-4563-9a94-f02541c4063e/%40paulo.nomade_IBR_D1-126.jpg","0800eee7-eb58-43d1-96fb-3c6bee142f54/%40paulo.nomade_IBR3_-22.jpg","4d091cc0-0447-4e63-b127-55bad54a9747/Raulrdg_01-1570_181917.jpg","cc75a17b-4331-4076-bddb-e28075d93ab7/wideshotsluis3389.JPG","e545c006-1bf2-440c-9a3f-821f72217807/IMG_3996.JPG","4a563127-0b87-47bf-80d8-e7e7c3c02740/%40paulonomade+%289%29.jpg"]},
    {id:"andre-costa",name:"André Costa",initials:"AC",tag:"Motorsport & MTB",
     based:"Braga, Portugal",since:"2017",
     bio:"André thrives on mud, motion and noise. A specialist in downhill and motocross, he gets impossibly close to the action to deliver frames that feel as loud and fast as the moment itself.",
     photos:["f976ce78-6a49-4f14-a0eb-36ff3cd93c98/MX+Vieira+do+Minho_2025+%28458+of+460%29.jpg","6c74a584-3517-4053-8f35-dbc306c1daed/MX+Vieira+do+Minho_2025+%28382+of+460%29.jpg","4a563127-0b87-47bf-80d8-e7e7c3c02740/%40paulonomade+%289%29.jpg","e545c006-1bf2-440c-9a3f-821f72217807/IMG_3996.JPG","0800eee7-eb58-43d1-96fb-3c6bee142f54/%40paulo.nomade_IBR3_-22.jpg","cc75a17b-4331-4076-bddb-e28075d93ab7/wideshotsluis3389.JPG"]},
    {id:"sofia-marcal",name:"Sofia Marçal",initials:"SM",tag:"Combat & Indoor Sports",
     based:"Lisbon, Portugal",since:"2021",
     bio:"Sofia works the indoor arenas — mats, courts and stages where light is hard and emotion is harder. She is drawn to the split second of decision: the grip, the leap, the held breath before the point.",
     photos:["50e75b22-f35d-4d46-aa12-57b807cc8a4d/%40paulo.nomade_NATIONAL+OPEN_JIUJITSU-66.jpg","6ddec230-a7d4-4dc7-8384-a7e9fa2929e5/DSC09112-2.JPG","d88327f0-128e-46f2-9614-994663ce8332/%40paulo.nomade_WB_C-80.jpg","d219f74b-1d16-4f7e-a0b9-32bcc5cb5d1a/%40paulo.nomade_WB_C-66.jpg","b216261b-5833-4b05-a7d4-ac410d5f155b/GjI4E-tXEAAfiFQ.jpg","d458293e-4755-4389-8571-c7692c266b5f/%40paulo.nomade_M-601.jpg"]},
    {id:"daniel-okafor",name:"Daniel Okafor",initials:"DO",tag:"Surf & Water",
     based:"Matosinhos, Portugal",since:"2018",
     bio:"Daniel shoots from the water more than the sand. Patient with tide and light, he frames surfers inside the wave — the line, the spray and the pure joy that follows a clean ride.",
     photos:["84e215c4-7800-464a-9ff6-c7949282e0f7/paulonomade.jpg","b6bcbe9e-60f8-434c-afdd-7c5d894a8dd1/WB24UTM-1499.jpg","5562fa46-6ed7-4052-bfa9-f1e70477a885/wideshotsluis3356.JPG","e768fc34-c32d-4ab2-a164-9730637ef3b3/IMGL8514.jpg","91427b47-2f62-4580-a68e-67e5d546e93f/%40paulo.nomade-32+2.JPG","d458293e-4755-4389-8571-c7692c266b5f/%40paulo.nomade_M-601.jpg"]},
    {id:"helena-reis",name:"Helena Reis",initials:"HR",tag:"Athletics & Movement",
     based:"Madrid, Spain",since:"2022",
     bio:"Helena is fascinated by the body in motion. On the track and beyond it, she isolates form, rhythm and tension — clean, graphic frames that turn raw athletic effort into something close to dance.",
     photos:["b216261b-5833-4b05-a7d4-ac410d5f155b/GjI4E-tXEAAfiFQ.jpg","e58f3214-e7a8-44d1-8d1f-78659770cf48/12_%40paulo.nomade_CNM_Lousada-8215.jpg","91427b47-2f62-4580-a68e-67e5d546e93f/%40paulo.nomade-32+2.JPG","150e3670-9b8e-4a38-8642-7a214a5f172d/20230211_edu_castro-7248.jpg","d219f74b-1d16-4f7e-a0b9-32bcc5cb5d1a/%40paulo.nomade_WB_C-66.jpg","93b41c73-1bc1-4bf4-80b1-af2313011a65/%40paulo.nomade-Caminha_-22.jpg"]}
  ],

  /* ---- ambient portfolio strips ---- */
  STRIP_A: ["e545c006-1bf2-440c-9a3f-821f72217807/IMG_3996.JPG","b216261b-5833-4b05-a7d4-ac410d5f155b/GjI4E-tXEAAfiFQ.jpg","8182e9f1-3a74-4563-9a94-f02541c4063e/%40paulo.nomade_IBR_D1-126.jpg","f976ce78-6a49-4f14-a0eb-36ff3cd93c98/MX+Vieira+do+Minho_2025+%28458+of+460%29.jpg","e768fc34-c32d-4ab2-a164-9730637ef3b3/IMGL8514.jpg","93b41c73-1bc1-4bf4-80b1-af2313011a65/%40paulo.nomade-Caminha_-22.jpg","6ddec230-a7d4-4dc7-8384-a7e9fa2929e5/DSC09112-2.JPG","4d091cc0-0447-4e63-b127-55bad54a9747/Raulrdg_01-1570_181917.jpg"],
  STRIP_B: ["50e75b22-f35d-4d46-aa12-57b807cc8a4d/%40paulo.nomade_NATIONAL+OPEN_JIUJITSU-66.jpg","91427b47-2f62-4580-a68e-67e5d546e93f/%40paulo.nomade-32+2.JPG","0800eee7-eb58-43d1-96fb-3c6bee142f54/%40paulo.nomade_IBR3_-22.jpg","d458293e-4755-4389-8571-c7692c266b5f/%40paulo.nomade_M-601.jpg","5562fa46-6ed7-4052-bfa9-f1e70477a885/wideshotsluis3356.JPG","150e3670-9b8e-4a38-8642-7a214a5f172d/20230211_edu_castro-7248.jpg","cc75a17b-4331-4076-bddb-e28075d93ab7/wideshotsluis3389.JPG","d219f74b-1d16-4f7e-a0b9-32bcc5cb5d1a/%40paulo.nomade_WB_C-66.jpg"]
};
