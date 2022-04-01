const slide1LineNode = document.querySelector('.slide_1__line');
const slide1CircleNode = document.querySelector('.slide_1__circle');
const slide1SvgNode = document.querySelector('.slide__1-svg');
const slide1RightTopTextNode = document.querySelector('.slide_1 .slide__right-top-text');
const slide1TextMotivationNode = document.querySelector('.slide_1 .slide__text-motivation');
const slide1Node = document.querySelector('.slide_1');

const slide2Node = document.querySelector('.slide_2');
const slide2Svg1 = document.querySelector('.slide_2__svg-1');
const slide2Svg2 = document.querySelector('.slide_2__svg-2');
const slide2RightTopTextNode = document.querySelector('.slide_2 .slide__right-top-text');
const slide2TextMotivationNode = document.querySelector('.slide_2 .slide__text-motivation');

const slide3Node = document.querySelector('.slide_3');
const slide3RightTopTextNode = document.querySelector('.slide_3 .slide__right-top-text');
const slide3TextMotivationNode = document.querySelector('.slide_3 .slide__text-motivation');
const slide3SvgNode = document.querySelector('.slide_3__svg');
const slide3SvgSquare2Node = document.querySelector('.slide3-svg-square-2');
const slide3SvgSquare3Node = document.querySelector('.slide3-svg-square-3');
const slide3SvgSquare4Node = document.querySelector('.slide3-svg-square-4');
const slide3SvgSquare5Node = document.querySelector('.slide3-svg-square-5');
const slide3SvgSquare6Node = document.querySelector('.slide3-svg-square-6');

const slide4Node = document.querySelector('.slide_4');
const slide4RightTopTextNode = document.querySelector('.slide_4 .slide__right-top-text');
const slide4TextMotivationNode = document.querySelector('.slide_4 .slide__text-motivation');
const slide4SvgContainerNode = document.querySelector('.slide_4__svg-container');
const slide4SvgCircle1Node = document.querySelector('.slide4-svg-circle-1');
const slide4SvgCircle2Node = document.querySelector('.slide4-svg-circle-2');
const slide4SvgCircle3Node = document.querySelector('.slide4-svg-circle-3');
const slide4SvgCircle4Node = document.querySelector('.slide4-svg-circle-4');
const slide4SvgCircle5Node = document.querySelector('.slide4-svg-circle-5');



const pageNode = document.querySelector('.page');

const centerXCircle = gsap.getProperty(slide1CircleNode, 'cx');
const radiusCircle = gsap.getProperty(slide1CircleNode, 'r');
const leftXCircle = centerXCircle - radiusCircle;

const startXLine = gsap.getProperty(slide1LineNode, 'x1').baseVal.value;
const endXLine = leftXCircle;

gsap.defaults({
	duration: 2,
	ease: Power2.easeIn
});

slide1CircleNode.addEventListener('click', clickSlide1Circle);

function clickSlide1Circle() {
	gsap.to(slide1LineNode, { ease: 'linear', onUpdate: onUpdateSlide1Line, onComplete: () => {
		onCompleteSlide1Line();
	} });
	slide1CircleNode.classList.add('slide_1__circle_active');
	slide1CircleNode.removeEventListener('click', clickSlide1Circle);
}

function onUpdateSlide1Line() {
	const percent = this.ratio;
	const x = Math.max(endXLine * percent, startXLine);
	slide1LineNode.setAttribute('x2', x);
}

function onCompleteSlide1Line() {
	gsap.to(slide1SvgNode, {scale: 0});
	animTextSlide({
		slidePrevNode: slide1Node,
		slidePrevRightTopTextNode: slide1RightTopTextNode,
		slidePrevTextMotivationNode: slide1TextMotivationNode,
		slideNextNode: slide2Node,
		slideNextRightTopTextNode: slide2RightTopTextNode,
		slideNextTextMotivationNode: slide2TextMotivationNode,
		funcAnimSlideNext: animSquareSlide2,
		cssVarBgc: '--bgcSlide2'
	});
}

function animTextSlide({
	slidePrevNode, slidePrevRightTopTextNode, slidePrevTextMotivationNode,
	slideNextNode, slideNextRightTopTextNode, slideNextTextMotivationNode,
	funcAnimSlideNext, cssVarBgc
}) {
	gsap.to(slidePrevRightTopTextNode, {x: '100vmin', opacity: 0});
	gsap.to(slidePrevTextMotivationNode, {x: '-100vmin', opacity: 0, onComplete: funcAnimSlideNext});


	const bgcSlide2 = gsap.getProperty(document.documentElement, cssVarBgc);
	gsap.to(document.documentElement, {'--bgColor': bgcSlide2});

	slidePrevNode.classList.remove('slide_active');
	slideNextNode.classList.add('slide_active');
	gsap.to(slideNextRightTopTextNode, {x: '--100vmin', opacity: 1});
	gsap.to(slideNextTextMotivationNode, {x: '0', opacity: 1});
}


function animSquareSlide2() {
	const tlSlide2Svg1 = gsap.timeline({defaults: {ease: Power2.linear}});
	const tlSlide2Svg2 = gsap.timeline({defaults: {ease: Power2.easeOut}});

	tlSlide2Svg1
	.set(slide2Svg1, { opacity: 1 })
	.fromTo(slide2Svg1, { scale: 0 }, { scale: 0.5 })
	.fromTo(slide2Svg1, {scale: 0.5}, { scale: 1.3, repeat: -1, yoyo: true });

	tlSlide2Svg2
	.set(slide2Svg2, { opacity: 1 })
	.fromTo(slide2Svg2, { scale: 0 }, { scale: 0.5 })
	.fromTo(slide2Svg2, {scale: 0.5}, { scale: 1.5, repeat: -1, yoyo: true });

	const mouseOutSlide2Svg2 = function() {
		tlSlide2Svg2.play();
	};

	slide2Svg2.addEventListener('mouseover', () => {
		tlSlide2Svg2.pause();
	});

	slide2Svg2.addEventListener('mouseout', mouseOutSlide2Svg2);

	slide2Svg2.addEventListener('click', () => {
		slide2Svg2.classList.add('slide_2__svg-2_click');
		slide2Svg2.removeEventListener('mouseout', mouseOutSlide2Svg2);
		tlSlide2Svg1.pause();
		fadeAnimSlide2();
	});

}

function fadeAnimSlide2() {
	gsap.to(slide2Svg2, { scale: 0 });
	gsap.to(slide2Svg1, { scale: 0 });

	animTextSlide({
		slidePrevNode: slide2Node,
		slidePrevRightTopTextNode: slide2RightTopTextNode,
		slidePrevTextMotivationNode: slide2TextMotivationNode,
		slideNextNode: slide3Node,
		slideNextRightTopTextNode: slide3RightTopTextNode,
		slideNextTextMotivationNode: slide3TextMotivationNode,
		funcAnimSlideNext: animSlide3,
		cssVarBgc: '--bgcSlide3'
	});
}


function animSlide3() {

	gsap.to(slide3SvgNode, {x: 0});
	
	const onCompleteAnimSlide3 = () => {
		setTimeout(() => {
			gsap.to(slide3SvgNode, {x: '200vmin', onComplete: animSlide4});
		}, 500);
	};

	const mouseOverSlide3Svg = function() {
		
		const tlSlide3Svg = gsap.timeline({defaults: {ease: Power2.easeOut, duration: 0.4}});
		const colorNext = gsap.getProperty(slide3SvgSquare2Node, '--colorNext');
		
		console.log(slide3SvgSquare2Node);

		tlSlide3Svg
		.to(slide3SvgSquare2Node, {fill: colorNext, stroke: colorNext})
		.to(slide3SvgSquare3Node, {fill: colorNext, stroke: colorNext})
		.to(slide3SvgSquare4Node, {fill: colorNext, stroke: colorNext})
		.to(slide3SvgSquare5Node, {fill: colorNext, stroke: colorNext, onComplete: onCompleteAnimSlide3  });

		slide3SvgSquare6Node.removeEventListener('mouseover', mouseOverSlide3Svg);
	};

	slide3SvgSquare6Node.addEventListener('mouseover', mouseOverSlide3Svg);
}

function animSlide4() {

	gsap.to(document.documentElement, { '--colorText': 'black' });
	gsap.to(slide4SvgContainerNode, { scale: 1.5 });

	animTextSlide({
		slidePrevNode: slide3Node,
		slidePrevRightTopTextNode: slide3RightTopTextNode,
		slidePrevTextMotivationNode: slide3TextMotivationNode,
		slideNextNode: slide4Node,
		slideNextRightTopTextNode: slide4RightTopTextNode,
		slideNextTextMotivationNode: slide4TextMotivationNode,
		funcAnimSlideNext: () => {},
		cssVarBgc: '--bgcSlide4'
	});

	gsap.to(slide4SvgCircle1Node, { repeat: -1, yoyo: true, duration: 'random(0.7, 2)', transformOrigin: '50% 50%', scale: 0.5 });

	gsap.to(slide4SvgCircle2Node, { repeat: -1, yoyo: true, duration: 'random(0.7, 2)', transformOrigin: `0 50%`, scale: 0.5 });
	gsap.to(slide4SvgCircle3Node, { repeat: -1, yoyo: true, duration: 'random(0.7, 2)', transformOrigin: `100% 50%`, scale: 0.5 });
	gsap.to(slide4SvgCircle4Node, { repeat: -1, yoyo: true, duration: 'random(0.7, 2)', transformOrigin: `50% 100%`, scale: 0.5 });
	gsap.to(slide4SvgCircle5Node, { repeat: -1, yoyo: true, duration: 'random(0.7, 2)', transformOrigin: `50% 0`, scale: 0.5 });
	
}


