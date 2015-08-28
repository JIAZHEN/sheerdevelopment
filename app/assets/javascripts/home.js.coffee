$(document).ready ->
  $(window).scroll ->
    if $(this).scrollTop() > 100
      $('.navbar').addClass 'opaque'
      # adding the opaque class
    else
      $('.navbar').removeClass 'opaque'
      # removing the opaque class
    return
  return
