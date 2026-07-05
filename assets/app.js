// Ringan: interaksi prototipe (tanpa framework)
document.addEventListener('click', function (e) {
  // Checklist Pojok Cinta / Pembiasaan
  var check = e.target.closest('.check');
  if (check) {
    check.classList.toggle('done');
    var box = check.querySelector('.box');
    if (box) box.textContent = check.classList.contains('done') ? '✓' : '';
    return;
  }
  // Pilihan kuis
  var opt = e.target.closest('.opt');
  if (opt && !opt.closest('.locked')) {
    var wrap = opt.parentElement;
    wrap.querySelectorAll('.opt').forEach(function (o) { o.classList.remove('correct','wrong'); });
    if (opt.dataset.correct === 'true') {
      opt.classList.add('correct');
      var fb = document.querySelector('.feedback');
      if (fb) { fb.style.display = 'block'; fb.textContent = '✅ Benar! +10 poin 🎉'; fb.style.background = 'var(--green)'; }
    } else {
      opt.classList.add('wrong');
      var fb2 = document.querySelector('.feedback');
      if (fb2) { fb2.style.display = 'block'; fb2.textContent = '💡 Coba lagi ya, kamu pasti bisa!'; fb2.style.background = 'var(--gold)'; }
    }
    return;
  }
  // Pemilih peran (login)
  var role = e.target.closest('.role');
  if (role) {
    role.parentElement.querySelectorAll('.role').forEach(function (r) { r.classList.remove('sel'); });
    role.classList.add('sel');
  }
});
