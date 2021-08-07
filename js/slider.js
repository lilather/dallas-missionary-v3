
    var subTitle = document.querySelector('.sliderSubTitle');
    var sliderHeader=document.querySelector('.sliderHeader');
    var sliderText=document.querySelector('.sliderText');
    subTitle.innerHTML = subTitle.textContent.replace(/([^\x00-\x80]|\w|\.|)/g, "<span class='letter'>$&</span>");
    sliderHeader.innerHTML = sliderHeader.textContent.replace(/([^\x00-\x80]|\w|\.|\!)/g, "<span class='letter'>$&</span>");
    sliderText.innerHTML = sliderText.textContent.replace(/([^\x00-\x80]|\w|\.|\!)/g, "<span class='letter'>$&</span>");
    
       

  
    anime.timeline().add({
      targets: '.slider',
      easing: 'easeInOutQuad',
      keyframes:
      [{translateX: - 2500, opacity:0},
      {translateX:0, opacity:1},
     ],
     duration: 1500,
    }).add({
      targets: '.sliderSubTitle .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 500,
      delay: (el, i) => 5* (i+1)
    }).add({
      targets: '.sliderHeader .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 500,
      delay: (el, i) =>10 * (i+1)
    },'-=500').add({
      targets: '.sliderText .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 500,
      delay: (el, i) => 15 * (i+1)
    },'-=500');