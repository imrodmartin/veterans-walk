document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (!/^[a-z]$/i.test(event.key)) return;

  const link = document.querySelector(`.alphabet-nav a[href="letter-${event.key.toLowerCase()}.html"]`);
  if (link) window.location.href = link.href;
});
