Array.prototype.forEach.call(document.querySelectorAll('[data-info]'), (obj) => {
  obj.addEventListener('click', function (e) {
    e.preventDefault();

    const button = this;
    const id = button.getAttribute('data-target');

    if (!id) return;

    const buttons = document.querySelectorAll('.nav-info li > button');

    for (let i=0, len=buttons.length-1; i<=len; i++) {
      let button = buttons[i];
      let parent = button.parentNode;

      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
      }
    }

    const infoBars = document.querySelectorAll('.info-list');

    for (let i=0, len=infoBars.length-1; i<=len; i++) {
      let infoBar = infoBars[i];

      if (infoBar.classList.contains('active')) {
        infoBar.classList.remove('active');
      }
    }

    button.parentNode.classList.add('active');
    document.querySelector(id).classList.add('active');
    
  }, false);
});