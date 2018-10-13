var $ = require('jquery');
window.jQuery = window.$ = $;
var ScrollMagic = require("scrollmagic");
require('../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min');

// porto
var controllerPorto = new ScrollMagic.Controller();
var tweenPorto = new TimelineMax ()
    .add([
        TweenMax.fromTo(".porto .title h3", 1, {scale: 1.5, autoAlpha: 0.05, top: "-40vw"}, {top: "50vw", ease: Linear.easeNone}),
        TweenMax.fromTo(".porto .title h4", 1, {scale: 3.5, autoAlpha: 0.3, top: "40vw"}, {top: "-5vw", ease: Linear.easeNone})
    ]);
var scenePorto = new ScrollMagic.Scene({triggerElement: ".porto .trigger", duration: $(window).height()})
                .setTween(tweenPorto)
                .addTo(controllerPorto);

var controllerPortoContent = new ScrollMagic.Controller();
var tweenPortoContent = new TimelineMax ()
    .add([
        TweenMax.fromTo(".porto .desktop", 1, {opacity: 0, right: "-100vw"}, {opacity: 1, right: "1vw", ease: Linear.easeNone}),
        TweenMax.fromTo(".porto .mobile", 1, {opacity: 0, bottom: "-60vw"}, {opacity: 1, bottom: "-10vw", ease: Linear.easeNone}),
        TweenMax.fromTo(".porto .info", 1, {bottom: "10vw"}, {bottom: "6vw", ease: Linear.easeNone})
    ]);
var scenePortoContent = new ScrollMagic.Scene({triggerElement: ".porto .triggerContent", duration: $(window).height()})
    .setTween(tweenPortoContent)
    .addTo(controllerPortoContent);

var controllerPortoExit = new ScrollMagic.Controller();
var tweenPortoExit = new TimelineMax ()
    .add([
        TweenMax.fromTo(".porto .desktop", 1, {right: "1vw"}, {opacity: 0, right: "-100vw", ease: Linear.easeNone}),
        TweenMax.fromTo(".porto .mobile", 1, {bottom: "-10vw"}, {opacity: 0, bottom: "-60vw", ease: Linear.easeNone}),
    ]);
var scenePortoExit = new ScrollMagic.Scene({triggerElement: ".porto .triggerExit", duration: $(window).height()})
    .setTween(tweenPortoExit)
    .addTo(controllerPortoExit);

// contesta
var controllerContesta = new ScrollMagic.Controller();
var tweenContesta = new TimelineMax ()
    .add([
        TweenMax.fromTo(".contesta .title h3", 1, {scale: 1.5, autoAlpha: 0.05, top: "-40vw"}, {top: "50vw", ease: Linear.easeNone}),
        TweenMax.fromTo(".contesta .title h4", 1, {scale: 3.5, autoAlpha: 0.3, top: "40vw"}, {top: "-5vw", ease: Linear.easeNone}),
    ]);
var sceneContesta = new ScrollMagic.Scene({triggerElement: ".contesta .trigger", duration: $(window).height()})
                .setTween(tweenContesta)
                .addTo(controllerContesta);

var controllerContestaContent = new ScrollMagic.Controller();
var tweenContestaContent = new TimelineMax ()
    .add([
        TweenMax.fromTo(".contesta .desktop", 1, {opacity: 0, right: "-100vw"}, {opacity: 1, right: "1vw", ease: Linear.easeNone}),
        TweenMax.fromTo(".contesta .mobile", 1, {opacity: 0, bottom: "-60vw"}, {opacity: 1, bottom: "-10vw", ease: Linear.easeNone}),
        TweenMax.fromTo(".contesta .info", 1, {bottom: "10vw"}, {bottom: "6vw", ease: Linear.easeNone})
    ]);
var sceneContestaContent = new ScrollMagic.Scene({triggerElement: ".contesta .triggerContent", duration: $(window).height()})
    .setTween(tweenContestaContent)
    .addTo(controllerContestaContent);

var controllerContestaExit = new ScrollMagic.Controller();
var tweenContestaExit = new TimelineMax ()
    .add([
        TweenMax.fromTo(".contesta .desktop", 1, {right: "1vw"}, {opacity: 0, right: "-100vw", ease: Linear.easeNone}),
        TweenMax.fromTo(".contesta .mobile", 1, {bottom: "-10vw"}, {opacity: 0, bottom: "-60vw", ease: Linear.easeNone}),
    ]);
var sceneContestaExit = new ScrollMagic.Scene({triggerElement: ".contesta .triggerExit", duration: $(window).height()})
    .setTween(tweenContestaExit)
    .addTo(controllerContestaExit);