// JavaScript used for the prototype to show various demo aspects

// show/hide more details if gender other is selected
$(document).on('change', '[name="gender"]', function () {
  var gender = $(this);
  var formGroup = $('#form-group-gender-other');
  var cssClass = 'nhsuk-form-group--hidden';
  if (gender.val() == 'other')
    formGroup.removeClass(cssClass);
  else
    formGroup.addClass(cssClass);
});

// show hospital 2 if add another is clicked
$(document).on('click', '#show-hospital2', function (e) {
  e.preventDefault();
  var element = $(this);
  var formGroup = $('#hospital_number2').parents('.nhsuk-form-group');
  var cssClass = 'nhsuk-form-group--hidden';
  formGroup.removeClass(cssClass);
  element.remove();
});

// disable input if unknown checked
$(document).on('change', '[data-unknown]', function () {
  var target = $(this).attr('data-unknown');
  if ($(this).is(':checked')) {
    $(target).val('').attr('disabled', true);
  } else {
    $(target).removeAttr('disabled');
  }
});

$(document).ready(function () {
  // prevent forms from actually submitting
  // as we have no back-end for the prototype
  $('form').on('submit', function (e) {
    e.preventDefault();
  });
  // validation
  $('#add-case').validate({
    //ignore: 'input[required!=\'required\']',
    errorClass: 'nhsuk-error-message',
    errorElement: 'label',
    errorPlacement: function (error, element) {
      // $(element)
      //   .before(error);
    },
    highlight: function (element) {
      $(element)
        .parents('.nhsuk-form-group')
        .addClass('nhsuk-form-group--error');
      if ($(element).is('textarea'))
        $(element).addClass('nhsuk-textarea--error');
      else if ($(element).is('select'))
        $(element).addClass('nhsuk-select--error');
      else
        $(element).addClass('nhsuk-input--error');
    },
    unhighlight: function (element) {
      $(element)
        .parents('.nhsuk-form-group')
        .removeClass('nhsuk-form-group--error')
      if ($(element).is('textarea'))
        $(element).removeClass('nhsuk-textarea--error');
      else if ($(element).is('select'))
        $(element).removeClass('nhsuk-select--error');
      else
        $(element).removeClass('nhsuk-input--error');
    }
  });
});

// toggle outcome scrutiny
$(document).on('click', '[data-toggle]', function () {
  var target = $(this).attr('data-toggle');
  $(target).toggle();
});

// show extra boxes
$(document).on('click', '[data-show]', function() {
  var target = $(this).attr('data-show');
  $(this).remove();
  $(target).removeClass('hide');
});

// duplicate forms
$(document).on('click', '[data-duplicate-from]', function() {
  var element = $(this).attr('data-duplicate-element');
  var from = $(this).attr('data-duplicate-from');
  var to = $(this).attr('data-duplicate-to');
  var html = $(from).clone().html();
  var count = $(element).length+1;
  html = html.replace(/{number}/g, count);
  $(to).append(html);
});

// remove forms
$(document).on('click', '[data-remove-from]', function() {
  var from = $(this).attr('data-remove-from');
  var element = $(this).attr('data-remove-element');
  if($(element).length > 1)
    $(from).find(element).last().remove();
})

// show/hide more details if value YES selected
$(document).on('change', '[name="cremation_issues"]', function () {
  var element = $(this);
  var formGroup = $('#cremation_issues_details').parents('.nhsuk-form-group');
  var cssClass = 'nhsuk-form-group--hidden';
  if (element.val() == 'yes')
    formGroup.removeClass(cssClass);
  else
    formGroup.addClass(cssClass);
});

$(document).on('change', '[name="personal_effects"]', function () {
  var element = $(this);
  var formGroup = $('#personal_effects_details').parents('.nhsuk-form-group');
  var cssClass = 'nhsuk-form-group--hidden';
  if (element.val() == 'yes')
    formGroup.removeClass(cssClass);
  else
    formGroup.addClass(cssClass);
});