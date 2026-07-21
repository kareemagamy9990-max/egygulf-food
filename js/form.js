/* ══ CONTACT FORM (mailto) ══
   الفورم بيفتح برنامج الإيميل عند العميل برسالة جاهزة موجّهة لينا.
   العميل بيدوس Send من عنده والرسالة توصل على: */
const CONTACT_EMAIL = 'export@egygulf-foods.com';

function showToast(msg, type) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = 'show ' + type;
    setTimeout(() => { t.className = ''; }, 5000);
}

function submitForm(btn) {
    const first   = (document.getElementById('f-first')   ? document.getElementById('f-first').value   : '').trim();
    const last    = (document.getElementById('f-last')    ? document.getElementById('f-last').value    : '').trim();
    const company = (document.getElementById('f-company') ? document.getElementById('f-company').value : '').trim();
    const country = (document.getElementById('f-country') ? document.getElementById('f-country').value : '').trim();
    const email   = (document.getElementById('f-email')   ? document.getElementById('f-email').value   : '').trim();
    const inquiry = (document.getElementById('f-inquiry') ? document.getElementById('f-inquiry').value : '');
    const message = (document.getElementById('f-message') ? document.getElementById('f-message').value : '').trim();

    if (!first || !email || !message) {
        showToast('⚠️ Please fill in your name, email & message.', 'error');
        return;
    }
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(email)) {
        showToast('⚠️ Please enter a valid email address.', 'error');
        return;
    }

    const fullName = (first + ' ' + last).trim();
    const subject = encodeURIComponent('[EgyGulf] ' + (inquiry || 'Inquiry') + ' — ' + fullName);
    const body = encodeURIComponent(
        'Name: '      + fullName +
        '\nCompany: ' + (company || '—') +
        '\nCountry: ' + (country || '—') +
        '\nEmail: '   + email +
        '\nType: '    + (inquiry || '—') +
        '\n\nMessage:\n' + message
    );

    window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body;

    showToast('📧 Opening your email app — please press Send to reach us.', 'success');

    ['f-first', 'f-last', 'f-company', 'f-country', 'f-email', 'f-message'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}
