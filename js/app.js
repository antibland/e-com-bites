const bindClickBad = (path, msg) => {
  const els = document.querySelectorAll(path);
  els.forEach(el => {
    el.addEventListener('click', e => {
      /* We have to prevent default behavior, or else the hash sign appends itself
        to the current URL. And there's that ugly page jump if we forget to prevent
        the default behavior.
      */
      e.preventDefault();
      alert(msg);
    });
  });
};

const bindClickGood = (path, msg) => {
  /*
    Another advantage to buttons: we don't need to prevent default on the event
    object. Simpler code is more readable and less error prone.
  */
  console.log('hi');
  document.querySelector(path).addEventListener('click', () => alert(msg));
};

export { bindClickGood, bindClickBad };
