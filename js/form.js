/* ══ EMAILJS CONTACT FORM ══ */

/* ════════════════════════════════════════════
           EGYGULF — EMAILJS CONFIG
           ════════════════════════════════════════════
           خطوات الربط (5 دقائق):
           1. روح emailjs.com وعمل حساب مجاني
           2. اضغط "Add New Service" واختار Gmail
              وربط ayman.ashraf102003@gmail.com
              — هتاخد SERVICE_ID زي "service_abc123"
           3. روح Email Templates → Create New Template
              Template 1 (ليك): اسمه "egygulf_notify"
              Template 2 (للزبون): اسمه "egygulf_catalog"
              (الـ templates جاهزة في الكومنت تحت)
           4. من Account → API Keys انسخ الـ Public Key
           5. حط الـ 3 IDs في المتغيرات دي:
        ════════════════════════════════════════════ */
        const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // ← من Account > API Keys
        const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // ← من Email Services
        const EMAILJS_NOTIFY_TPL = 'YOUR_NOTIFY_TEMPLATE_ID'; // ← Template اللي بيجيلك
        const EMAILJS_CATALOG_TPL = 'YOUR_CATALOG_TEMPLATE_ID'; // ← Template اللي بيروح للزبون

        /* ── رابط الكاتالوج PDF ──
           1. ارفع الـ PDF على Google Drive
           2. اضغط عليه بالزر الأيمن → Share → "Anyone with the link"
           3. انسخ الرابط والصقه هنا بدل YOUR_CATALOG_LINK
        */
        const CATALOG_LINK = 'YOUR_CATALOG_LINK'; // ← مثال: https://drive.google.com/file/d/ABC.../view

        /* ════════════════════════════════════════════
           EMAILJS TEMPLATES — انسخهم في الموقع

           ── Template 1: egygulf_notify (ليك أنت) ──
           Subject: 🔔 New Inquiry — {{from_name}} — {{inquiry_type}}
           Body:
             New inquiry received from EgyGulf website.
             Name:    {{from_name}}
             Company: {{company}}
             Country: {{country}}
             Email:   {{from_email}}
             Type:    {{inquiry_type}}
             Message: {{message}}

           ── Template 2: egygulf_catalog (للزبون) ──
           Subject: EgyGulf Foods — Your Product Catalog 📦
           Body (HTML):
             Dear {{to_name}},
             Thank you for your interest in EgyGulf Foods!
             Please find our product catalog at the link below:
             {{catalog_link}}
             Our export team will contact you within 24–48 hours.
             Best regards,
             EgyGulf Foods Export Team
             export@egygulf-foods.com | +20 109 928 1170
        ════════════════════════════════════════════ */

        // Init EmailJS
        try {
            emailjs.init({
                publicKey: EMAILJS_PUBLIC_KEY
            });
        } catch (e) {}

        function showToast(msg, type) {
            const t = document.getElementById('toast');
            t.textContent = msg;
            t.className = 'show ' + type;
            setTimeout(() => {
                t.className = '';
            }, 5000);
        }

        async function submitForm(btn) {
            const first = (document.getElementById('f-first') ? document.getElementById('f-first').value : '').trim();
            const last = (document.getElementById('f-last').value || '').trim();
            const company = (document.getElementById('f-company').value || '').trim();
            const country = (document.getElementById('f-country').value || '').trim();
            const email = (document.getElementById('f-email').value || '').trim();
            const inquiry = document.getElementById('f-inquiry').value || '';
            const message = (document.getElementById('f-message').value || '').trim();

            if (!first || !email || !message) {
                showToast('⚠️ Please fill in your name, email & message.', 'error');
                return;
            }
            const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRx.test(email)) {
                showToast('⚠️ Please enter a valid email address.', 'error');
                return;
            }

            btn.classList.add('loading');
            btn.textContent = '⏳ Sending…';

            // ── إيميل 1: ليك — إشعار باللي بعت ──
            const notifyParams = {
                from_name: first + ' ' + last,
                from_email: email,
                company: company || '—',
                country: country || '—',
                inquiry_type: inquiry,
                message: message,
                to_email: 'ayman.ashraf102003@gmail.com'
            };

            // ── إيميل 2: للزبون — الكاتالوج ──
            const catalogParams = {
                to_name: first,
                to_email: email,
                company: company || 'your company',
                catalog_link: CATALOG_LINK,
                inquiry_type: inquiry
            };

            const configured = EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID';

            if (configured) {
                try {
                    // بعت الإيميلين بالتوازي
                    await Promise.all([
                        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_NOTIFY_TPL, notifyParams),
                        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CATALOG_TPL, catalogParams)
                    ]);
                    onSuccess(btn, email);
                } catch (err) {
                    console.error('EmailJS error:', err);
                    fallbackMailto(btn, notifyParams);
                }
            } else {
                // لو لسه ما ربطتش EmailJS — افتح mailto كـ fallback
                fallbackMailto(btn, notifyParams);
            }
        }

        function onSuccess(btn, clientEmail) {
            btn.classList.remove('loading');
            btn.classList.add('success');
            btn.textContent = '✅ Catalog Sent!';
            showToast('✅ Catalog sent to ' + clientEmail + '! We\'ll follow up shortly.', 'success');
            ['f-first', 'f-last', 'f-company', 'f-country', 'f-email', 'f-message'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });
            setTimeout(() => {
                btn.classList.remove('success');
                btn.textContent = 'Send Message →';
            }, 5000);
        }

        function fallbackMailto(btn, p) {
            btn.classList.remove('loading');
            btn.textContent = 'Send Message →';
            const sub = encodeURIComponent('[EgyGulf] ' + p.inquiry_type + ' — ' + p.from_name);
            const body = encodeURIComponent(
                'Name: ' + p.from_name + '\nCompany: ' + p.company +
                '\nCountry: ' + p.country + '\nEmail: ' + p.from_email +
                '\nType: ' + p.inquiry_type + '\n\nMessage:\n' + p.message
            );
            window.open('mailto:ayman.ashraf102003@gmail.com?subject=' + sub + '&body=' + body);
            showToast('📧 Opening email client… (Connect EmailJS to auto-send catalog)', 'success');
        }
