document.getElementById('toggleButton').addEventListener('click', function() {
  var iframe = document.getElementById('appointmentIframe');
  if (iframe.style.display === 'none') {
    iframe.style.display = 'block';
  } else {
    iframe.style.display = 'none';
  }
});
