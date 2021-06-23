const cta = document.querySelector(".cta");

cta.addEventListener('click', function() {
    TweenMax.to('.two', 1, {scaleY: 0, height:'0', ease: Elastic.easeOut });
    TweenMax.to('.one', 1, {scaleY: 0, height:'0', ease: Elastic.easeInOut });
    TweenMax.to('.three', 1, {scale: 1, height:'100vh', display: "flex", delay: 1.5,ease: Bounce.easeOut });
    TweenMax.to('.alert', 1, {opacity: 1, y: '40%', delay: 2, ease: SteppedEase.config(5)});
  
})

TweenMax.to('.two', 1, {scaleY: 1, height:'100vh', ease: Bounce.easeOut });
TweenMax.to('.icon', 1, {opacity: 1, y: '30%', delay: 0.5, ease: Back.easeOut});
TweenMax.to('.copy', 1, {opacity: 1, y: '15%', delay: 0.5});
TweenMax.to('.outbox', 2, {opacity: 1, scale: 1, ease: Elastic.easeOut});

