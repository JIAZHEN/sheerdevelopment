$(document).ready ->
  $(window).scroll ->
    if $(this).scrollTop() > 100
      $('.navbar').removeClass 'padding-15'
    else
      $('.navbar').addClass 'padding-15'
    return
  return
