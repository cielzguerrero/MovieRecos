$(window).scroll(function(){
    if($(window).scrollTop() > 900) {
      $('.navbar').css('background', '#ffc107');
    } else {
      $('.navbar').css('background', 'rgba(0,0,0,0.4)');
    }
  });
  
  $('.recommend-slider').owlCarousel({
      loop:false,
      margin:10,
      nav:true,
      items:1,
      smartSpeed:600,
      autoplay:false,
      autoplayTimeout:3000,
      autoplayHoverPause:false
  });

  $('.newrecommend-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:3,
    smartSpeed:600,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        }
    }
});
  $('.oldbutgold-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items:3,
    smartSpeed:600,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        }
    }
  });
  $('.toptvseries-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items:3,
    smartSpeed:600,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        }
    }
  });
  $('.news-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items:1,
    smartSpeed:600,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:false
  });
 
  // $('.watch-slider').owlCarousel({
  //     loop:true,
  //     margin:10,
  //     nav:false,
  //     items:3,
  //     smartSpeed:550,
  //     autoplay:true,
  //     autoplayTimeout:2500,
  //     autoplayHoverPause:true
  // });
  
  $('.watch-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      smartSpeed:550,
      autoplay:true,
      autoplayTimeout:2500,
      autoplayHoverPause:true,
      responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
  });

  var x = document.getElementById("moviethumbnail1");
  var xy = document.getElementById("moviecard1");
  var xyz = document.getElementById("movievideo1");
  var y = document.getElementById("moviethumbnail2");
  var yy = document.getElementById("moviecard2");
  var yyz = document.getElementById("movievideo2");
  var z = document.getElementById("moviethumbnail3");
  var zy = document.getElementById("moviecard3");
  var zyz = document.getElementById("movievideo3");
  var zz = document.getElementById("mcoverlay");

  function imageHover1() {
    x.style.filter = "none";
    xy.style.backgroundColor = "rgba(0,0,0,0.4)";
    var myTimeout = setTimeout(delaystuff, 2000);

    function delaystuff(){
      x.style.opacity = "0";
      x.style.display = "none";
      xyz.play();
      xyz.style.opacity = "1";
      xyz.style.display = "block";
    }

  }
  
  function imageHL1() {
    xy.style.backgroundColor = "rgba(0,0,0,0)";
    var myTimeout = setTimeout(delaystuff1, 2000);

    function delaystuff1(){
      x.style.filter = "blur(5px)";
      x.style.display = "block";
      x.style.opacity = "1";
      xyz.style.opacity = "0";
      xyz.style.display = "none";
      xyz.pause();
    }


    // xyz.currentTime = 0;
  }
  
  function imageHover2() {
    y.style.filter = "none";
    yy.style.backgroundColor = "rgba(0,0,0,0.4)";
    var myTimeout = setTimeout(delaystuff, 2000);

    function delaystuff(){
      y.style.opacity = "0";
      y.style.display = "none";
      yyz.play();
      yyz.style.opacity = "1";
      yyz.style.display = "block";
    }

  }
  
  function imageHL2() {
    yy.style.backgroundColor = "rgba(0,0,0,0)";
    var myTimeout = setTimeout(delaystuff, 2000);

    function delaystuff(){
      y.style.filter = "blur(5px)";
      y.style.display = "block";
      y.style.opacity = "1";
      yyz.style.opacity = "0";
      yyz.style.display = "none";
      yyz.pause();
    }
    
  }

  function imageHover3() {
    z.style.filter = "none";
    zy.style.backgroundColor = "rgba(0,0,0,0.4)";
    var myTimeout = setTimeout(delaystuff, 2000);

    function delaystuff(){
      z.style.opacity = "0";
      z.style.display = "none";
      zyz.play();
      zyz.style.opacity = "1";
      zyz.style.display = "block";
    }
  }
  function imageHL3() {
    zy.style.backgroundColor = "rgba(0,0,0,0)";
    var myTimeout = setTimeout(delaystuff, 2000);

    function delaystuff(){
      z.style.filter = "blur(5px)";
      z.style.display = "block";
      z.style.opacity = "1";
      zyz.style.opacity = "0";
      zyz.style.display = "none";
      zyz.pause();
    }

  }

  function Mail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    Email.send({
      SecureToken: "f570b5d5-33c6-4ea1-9e53-a1734a694a3b",
      To: "cielzguerrero@gmail.com",
      From: "cielzguerrero@gmail.com",
      Subject: "Email From Portfolio Contact Form",
      Body:
        "Name: " +
        name +
        "<br/><br/> Email: " +
        email +
        "<br/><br/> Message: " +
        message,
    }).then((message) =>
      alert(
        "Thank you for sending your message. I will get back to you as soon as possible."
      )
    );
  }