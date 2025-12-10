// small interactive scripts: year, theme toggle, mock contact handler
document.getElementById('year').textContent = new Date().getFullYear();

const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  if(document.documentElement.classList.contains('light')){
    toggleBtn.textContent = '☀️ Light mode';
    document.body.style.background = 'linear-gradient(180deg,#f7fbff,#eef6ff)';
    document.body.style.color = '#052935ff';
  } else {
    toggleBtn.textContent = '🌙 Dark mode';
    document.body.style.background = 'linear-gradient(180deg,#071022,#071524)';
    document.body.style.color = '';
  }
});

// mock contact form handler (replace with real backend or Formspree)
function handleForm(e){
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);
  // simple validation
  alert('ขอบคุณ! ข้อความของคุณถูกส่งเรียบร้อย (ตัวอย่าง demo)\\nName: ' + data.get('name'));
  form.reset();
  return false;
}
