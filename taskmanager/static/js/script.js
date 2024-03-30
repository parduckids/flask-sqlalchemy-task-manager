document.addEventListener('DOMContentLoaded', function() {
    // mobile navbar script
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker init
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });
    // select init
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsibles init
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
  });
    
