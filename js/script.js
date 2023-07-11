$(document).ready(function () {

  // make nav bar static on scroll
  var navbar = document.getElementsByTagName("nav");
  var sticky = navbar[0].offsetHeight;
  window.addEventListener("scroll", function () {
    if (this.document.documentElement.scrollTop >= sticky) {
      $(navbar).css("background", "#fff");
    } else {
      $(navbar).css("background", "transparent");
    }
  });

  // autoplay background video
  $(".jquery-background-video").bgVideo({ fadeIn: 2000 });

  // ------
  $(function () {
    if($("#your-rate").length>0){
      $("#your-rate").rateYo({
        starWidth: "15px",
        ratedFill: "#FFC107",
        rating: 0,
        fullStar: true,
        rtl: true
      });
    }
    
    if($("#your-rate-provider").length>0){
      $("#your-rate-provider").rateYo({
        starWidth: "15px",
        ratedFill: "#FFC107",
        rating: 0,
        fullStar: true,
        rtl: true
      }); 
    }
  })
  //loader
  setTimeout(function () {$(".loader").fadeOut(1000);})

  // toggle fav item
  $(".serv-card-hover .icon").click(function () {
    $(this).toggleClass("fav");
    $(this).children('i:nth-child(1)').toggleClass("fa-regular fa-solid");
    console.log($(this).children('svg:nth-child(1)'))
  })

  //when we choose a pic to upload
  if($('#photo').length>0){
    const img = document.querySelector('#photo');
    const file = document.querySelector('#file');
  
    file.addEventListener('change', function(){
      const choosedFile = this.files[0];
      if (choosedFile) {
          const reader = new FileReader(); 
          reader.addEventListener('load', function(){
              img.setAttribute('src', reader.result);
          });
          reader.readAsDataURL(choosedFile);
      }
    });
  }
  
  // carousel
  $('.partners .owl-carousel').owlCarousel({
    center: true,
    loop: true,
    nav: false,
    dots: true,
    rtl: true,
    margin: 20,
    items: 6,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      900: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
  $(".rev-client .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      }
    }
  });
  $('.most-wanted-slider .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    margin: 10,
    items: 4,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  
  $('.single-img .owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    rtl: true,
    margin: 10,
    items: 1,
  });
  
});
  // =========================
  new WOW().init();
  $('select').select2();
  // $('.multi-select').selectize();
