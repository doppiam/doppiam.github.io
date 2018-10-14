var $ = require('jquery');
window.jQuery = window.$ = $;
var ScrollMagic = require("scrollmagic");
require('../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min');

$(".section").each(function( index ) {
    var name = $(this).attr('data-content');
    var controller = new ScrollMagic.Controller();
    var tween = new TimelineMax ()
        .add([
            TweenMax.fromTo(`.${name} .title h3`, 1, {scale: 1.5, autoAlpha: 0.05, top: "30vw"}, {top: "-30vw", ease: Linear.easeNone}),
            TweenMax.fromTo(`.${name} .title h4`, 1, {scale: 3.5, autoAlpha: 0.3, top: "50vw"}, {top: "5vw", ease: Linear.easeNone})
        ]);
    var scene = new ScrollMagic.Scene({triggerElement: `.${name} .trigger`, duration: $(`.${name}`).height()})
                    .setTween(tween)
                    .addTo(controller);

    var controllerContent = new ScrollMagic.Controller();
    var tweenContent = new TimelineMax ()
        .add([
            TweenMax.fromTo(`.${name} .desktop`, 1, {opacity: 0, right: "-90vw"}, {opacity: 1, visibility: "visible", right: "1vw", ease: Linear.easeNone}),
            TweenMax.fromTo(`.${name} .mobile`, 1, {opacity: 0, bottom: "-50vw"}, {opacity: 1, visibility: "visible", bottom: "-10vw", ease: Linear.easeNone}),
            TweenMax.fromTo(`.${name} .info`, 1, {bottom: "-10vw", opacity: 0}, {bottom: "6vw", opacity: 1, ease: Linear.easeNone})
        ]);
    var sceneContent = new ScrollMagic.Scene({triggerElement: `.${name} .triggerContent`, duration: $(`.${name}`).height()})
        .setTween(tweenContent)
        .addTo(controllerContent);

    var controllerExit = new ScrollMagic.Controller();
    var tweenExit = new TimelineMax ()
        .add([
            TweenMax.fromTo(`.${name} .desktop`, 1, {right: "1vw"}, {opacity: 0, right: "-100vw", ease: Linear.easeNone}),
            TweenMax.fromTo(`.${name} .mobile`, 1, {bottom: "-10vw"}, {opacity: 0, bottom: "-60vw", ease: Linear.easeNone}),
            TweenMax.fromTo(`.${name} .info`, 1, {left: 0}, {left: "-100%", ease: Linear.easeNone}),
        ]);
    var sceneExit = new ScrollMagic.Scene({triggerElement: `.${name} .triggerExit`, duration: $(`.${name}`).height()})
        .setTween(tweenExit)
        .addTo(controllerExit);
});