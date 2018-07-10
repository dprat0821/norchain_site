$(document).ready(function () {
	$('#portfolioModal4')
	.on('hidden.bs.modal',function () {
		$(this).find('#video_modal4').attr('src', '')
	})
	.on('shown.bs.modal',function () {
		$(this).find('#video_modal4').attr('src', 'https://www.youtube.com/embed/TmxKzl1zADU?controls=0&loop=1&autoplay=1')
	});

	$('#portfolioModal7')
	.on('hidden.bs.modal',function () {
		$(this).find('#video_modal7').attr('src', '')
	})
	.on('shown.bs.modal',function () {
		$(this).find('#video_modal7').attr('src', 'https://www.youtube.com/embed/fMhnrMOO1Fo?controls=0&loop=1&autoplay=1')
	});
})
