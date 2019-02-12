var dMenu=new Array();
var dMenuLen=0;
var dmLevel=new Array();
var dmID=new Array();
var dmJump=new Array();
var dmEntry=new Array();
var dmSrc=new Array();
var separator='|';
var isMenuInit=0;

function Add(newEntry) {
  var dmParams=newEntry.split(separator);
  var jumpTemp='';
  var srcTemp='';
  var level=0;
  dMenu[dMenuLen]=newEntry;

  srcTemp=dmParams[0];
  dmID[dMenuLen]=srcTemp;
  for (var i=0; i<srcTemp.length; i++) {
    if (srcTemp.charAt(i)=='.') level +=1;
  }
  level +=1;
  dmLevel[dMenuLen]=level;
  
  dmEntry[dMenuLen]=dmParams[1];
  srcTemp=dmParams[2];
  for (var i=0; i<srcTemp.length; i++) {
    if (srcTemp.charAt(i)=='/') jumpTemp +='../';
  }
  dmJump[dMenuLen]=jumpTemp;
  dmSrc[dMenuLen]=srcTemp;
  dMenuLen += 1;
}

function dMenuInit() { 
Add('1|Fizica 9|left.html');
Add('1.1|Introducere|intro.html');
Add('2|Capitolul I. Optica geometric&#259;|cap1.html');
Add('2.1|A. V&#259;zul|1a.html');
Add('2.1.1|1. C&#226;t de bine vezi?|1a1.html');
Add('2.1.2|2. C&#226;t de aproape mai po&#355;i vedea clar?|1a2.html');
Add('2.1.3|3. Cum dep&#259;&#351;im limitele vederii naturale?|1a3.html');
Add('2.1.4|<I>Alte provoc&#259;ri</I>|1ap.html');
Add('2.2|B. Reflexia &#351;i refrac&#355;ia luminii|1b.html');
Add('2.2.1|1. Surse convenabile de lumin&#259;|1b1.html');
Add('2.2.2|2. Reflexia &#351;i refrac&#355;ia luminii|1b2.html');
Add('2.2.3|3. Colectarea datelor|1b3.html');
Add('2.2.4|4. Prelucrarea datelor|1b4.html');
Add('2.2.5|5. C&#259;utarea regularit&#259;&#355;ilor|1b5.html');
Add('2.2.6|6. Legile reflexiei luminii|1b6.html');
Add('2.2.7|7. Legile refrac&#355;iei luminii|1b7.html');
Add('2.2.8|8. Formarea imaginilor|1b8.html');
Add('2.2.9|9. Reflexia total&#259;|1b9.html');
Add('2.2.10|10. Prisma optic&#259;|1b10.html');
Add('2.2.11|<I>Alte provoc&#259;ri</I>|1bp.html');
Add('2.3|C. Lentile sub&#355;iri|1c.html');
Add('2.3.1|1. Lentile|1c1.html');
Add('2.3.2|2. Lentile convergente|1c2.html');
Add('2.3.3|3. Imagini &#238;n lentile convergente|1c3.html');
Add('2.3.4|4. Formula lentilelor|1c4.html');
Add('2.3.5|5. Lupa|1c5.html');
Add('2.3.6|6. Lentile divergente|1c6.html');
Add('2.3.7|7. Sisteme de lentile|1c7.html');
Add('2.3.8|<I>Alte provoc&#259;ri</I>|1cp.html');
Add('2.4|D. Ochiul|1d.html');
Add('2.4.1|1. Alc&#259;tuirea ochiului|1d1.html');
Add('2.4.2|2. Formarea imaginilor &#238;n ochi|1d2.html');
Add('2.4.3|3. Ochelarii|1d3.html');
Add('2.4.4|<I>Alte provoc&#259;ri</I>|1dp.html');
Add('2.5|E. Instrumente optice|1e.html');
Add('2.5.1|1. Aparatul fotografic|1e1.html');
Add('2.5.2|2. Formarea imaginii fotografice|1e2.html');
Add('2.5.3|3. Microscopul|1e3.html');
Add('2.5.4|4. Formarea imaginii &#238;ntr-un microsop|1e4.html');
Add('2.5.5|<I>Alte provoc&#259;ri</I>|1ep.html');
Add('2.6|<I>Lectur&#259; - C&#259;utarea unei reguli mai profunde</I>|1l.html');
Add('2.7|<I>Sinteza capitolului</I>|1s.html');
Add('2.8|<I>Probleme rezolvate</I>|1r.html');
Add('2.9|<I>Teste</I>|1t.html');
Add('2.9.1|<I>Test A</I>|1ta.html');
Add('2.9.2|<I>Test B</I>|1tb.html');
Add('2.9.3|<I>Test C</I>|1tc.html');

Add('3|Capitolul II. Mecanica newtonian&#259;|cap2.html');
Add('3.1|A. Descrierea mi&#351;c&#259;rii|2a.html');
Add('3.1.1|1. C&#226;t de repede reac&#355;ionezi?|2a1.html');
Add('3.1.2|2. C&#259;derea riglei|2a2.html');
Add('3.1.3|3. M&#259;surarea m&#259;rimilor fizice|2a3.html');
Add('3.1.4|4. M&#259;rimi fizice scalare &#351;i vectoriale|2a4.html');
Add('3.1.5|5. Compunerea m&#259;rimilor fizice vectoriale|2a5.html');
Add('3.1.6|6. Varia&#355;ia m&#259;rimilor fizice vectoriale|2a6.html');
Add('3.1.7|7. Viteza|2a7.html');
Add('3.1.8|8. Accelera&#355;ia|2a8.html');
Add('3.1.9|<I>Alte provoc&#259;ri</I>|2ap.html');
Add('3.2|B. Principiile mecanicii newtoniene|2b.html');
Add('3.2.1|1. Principiul iner&#355;iei|2b1.html');
Add('3.2.2|2. Principiul fundamental|2b2.html');
Add('3.2.3|3. Principiul ac&#355;iunilor reciproce|2b3.html');
Add('3.2.4|4. Suprapunerea for&#355;elor|2b4.html');
Add('3.2.5|<I>Alte provoc&#259;ri</I>|2bp.html');
Add('3.3|C. Legi &#238;n mecanica newtonian&#259;|2c.html');
Add('3.3.1|1. Legea lui Hooke|2c1.html');
Add('3.3.2|2. Tensiunea &#238;n fire|2c2.html');
Add('3.3.3|3. Rezisten&#355;a materialelor|2c3.html');
Add('3.3.4|4. Legile frec&#259;rii la alunecare|2c4.html');
Add('3.3.5|5. Frecarea &#238;n natur&#259; &#351;i tehnic&#259;|2c5.html');
Add('3.3.6|6. Frecarea static&#259; &#351;i frecarea cinetic&#259;|2c6.html');
Add('3.3.7|7. Legea atrac&#355;iei universale|2c7.html');
Add('3.3.8|8. Accelera&#355;ia gravita&#355;ional&#259;|2c8.html');
Add('3.3.9|9. C&#226;mpul gravita&#355;ional|2c9.html');
Add('3.3.10|<I>Alte provoc&#259;ri</I>|2cp.html');
Add('3.4|D. Cinematica punctului material|2d.html');
Add('3.4.1|1. Mi&#351;carea rectilinie uniform&#259;|2d1.html');
Add('3.4.2|2. Mi&#351;carea rectilinie uniform variat&#259;|2d2.html');
Add('3.4.3|3. Mi&#351;carea circular&#259; uniform&#259;|2d3.html');
Add('3.4.4|<I>Alte provoc&#259;ri</I>|2dp.html');
Add('3.5|<I>Teste</I>|2t.html');

Add('4|Capitolul III. Teoreme de varia&#355;ie &#351;i legi de conservare &#238;n mecanica newtonian&#259;|cap3.html');
Add('4.1|A. Energia|3a.html');
Add('4.1.1|1. Lucrul mecanic &#351;i energia cinetic&#259;|3a1.html');
Add('4.1.2|2. Lucrul mecanic al unei for&#355;e variabile|3a2.html');
Add('4.1.3|3. Lucrul mecanic al for&#355;ei gravita&#355;ionale|3a3.html');
Add('4.1.4|4. Lucrul mecanic al for&#355;ei elastice|3a4.html');
Add('4.1.5|5. Energia|3a5.html');
Add('4.1.6|6. Puterea|3a6.html');
Add('4.1.7|7. Randamentul|3a7.html');
Add('4.1.8|<I>Alte provoc&#259;ri</I>|3ap.html');  
Add('4.2|B. Impulsul|3b.html');
Add('4.2.1|1. Impulsul|3b1.html');
Add('4.2.2|2. Teorema varia&#355;iei impulsului|3b2.html');
Add('4.2.3|3. Legea conserv&#259;rii impulsului|3b3.html');
Add('4.2.4|<I>Alte provoc&#259;ri</I>|3bp.html');
Add('4.3|C. Ciocniri|3c.html');
Add('4.3.1|1. Ciocniri plastice|3c1.html');
Add('4.3.2|2. Ciocniri perfect elastice|3c2.html');
Add('4.3.3|<I>Alte provoc&#259;ri|3cp.html');
Add('4.4|D. Momente|3d.html');
Add('4.4.1|1. Momentul cinetic|3d1.html');
Add('4.4.2|2. Momentul for&#355;ei|3d2.html');
Add('4.4.3|<I>Alte provoc&#259;ri</I>|3dp.html');
Add('4.5|<I>Teste</I>|3t.html');

Add('5|Capitolul IV. Elemente de static&#259;|cap4.html');
Add('5.1|A. Echilibrul de transla&#355;ie|4a.html');
Add('5.1.1|1. Transla&#355;ia|4a1.html');
Add('5.1.2|2. Centrul de mas&#259;|4a2.html');
Add('5.1.3|3. Echilibrul de transla&#355;ie|4a3.html');
Add('5.1.4|<I>Alte provoc&#259;ri</I>|4ap.html');
Add('5.2|B. Echilibrul de rota&#355;ie|4b.html');
Add('5.2.1|1. Rota&#355;ia|4b1.html');
Add('5.2.2|2. Echilibrul de rota&#355;ie &#238;n jurul unei axe|4b2.html');
Add('5.2.3|3. Echilibrul de rota&#355;ie &#351;i momentul cinetic|4b3.html');
Add('5.2.4|4. Echilibrul &#351;i energia poten&#355;ial&#259;|4b4.html');
Add('5.2.5|<I>Alte provoc&#259;ri</I>|4bp.html');
Add('5.3|<I>Teste</I>|4t.html'); 

dMenuLen=dMenu.length;
}

function displayDMenu(selID) {
  var cLevel=0;
  var refLevel=0;
  var cID='';
  var refID='';
  var refJump='';
  var cParent='';
  var refParent='';
  var cEntry='';
  var cSrc='';
  var leadin='';
  var writeEntry=0;
  var posID=0;
  var selIndex=0;
  
  if (isMenuInit==0) {dMenuInit();}

  for(i=0;i<dMenuLen;i++) {
    if (dmID[i]==selID) {selIndex=i;}
  }

  parent.dmenuframe.document.write('<html><HEAD>'+
    '<style type="text/css"><!--'+
    'a:link{text-decoration: none}'+
    'a:visited{text-decoration: none}'+
    'a:hover{text-decoration: underline}'+
    '--></style></head>'+
    '<body bgcolor=#d0d0d0><font size=-1><b>');

  for(i=0;i<dMenuLen;i++) {
    refLevel=parseInt(dmLevel[selIndex]);
    refID=dmID[selIndex];
    refJump=dmJump[selIndex];
    cLevel=parseInt(dmLevel[i]);
    cID=dmID[i];
    cParent=cID.substring(0,cID.lastIndexOf('.'));
    refParent=refID.substring(0,refID.lastIndexOf('.'));
 
    writeEntry=0;

    if (cLevel==1) {writeEntry=1;}
    else { 
      posID=refID.indexOf(cID);
      if (posID == 0) {writeEntry=1;}
      else {
        if ((cLevel==refLevel+1) && (cParent==refID)) {writeEntry=1;}
        if ((cLevel==refLevel) && (cParent==refParent)) {writeEntry=1;}
      }
    }
    
    if (writeEntry>0) {
      cEntry=dmEntry[i];
      cSrc=dmSrc[i];
      leadin='&nbsp;&nbsp;&nbsp;';
      for(j=1;j<cLevel;j++) {leadin +='&nbsp;&nbsp;&nbsp;'; }
      if ((cLevel==1) && (cID != '1')) {parent.dmenuframe.document.write('<BR>');}
      if (cID==refID){
        leadin='<u>'+leadin+'</u>';
        cEntry='<u>'+cEntry+'</u>';
      }
      parent.dmenuframe.document.write(leadin+'<a href='+refJump+cSrc+' target=pageframe>'+cEntry+'</a><BR>');
    }
  }
  parent.dmenuframe.document.write('</b></font></body></html>');
  parent.dmenuframe.document.close();
}
























