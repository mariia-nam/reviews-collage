while ($('.testimonial-container > .testimonial-item').length) {
    $('.testimonial-container > .testimonial-item:lt(2)').wrapAll('<div class="testimonial-row" />');
}