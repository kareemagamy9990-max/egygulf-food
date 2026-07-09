# EgyGulf Foods — Website

موقع جاهز للرفع على GitHub (GitHub Pages).

## هيكل المشروع
```
index.html          الصفحة الرئيسية
css/styles.css       التنسيقات
js/                  ملفات الجافاسكريبت (data.js فيه بيانات المنتجات والصور base64)
images/              كل صور الموقع (تم تسميتها وتنظيمها في مكان واحد)
assets-extra/        صور أصلية موجودة في الأرشيف بس مش مستخدمة فعليًا في الموقع (احتياطي)
```

## إيه اللي اتعمل
- كل الصور بقت في مجلد `images/` بأسماء واضحة من غير مسافات (كانت متفرقة في الجذر وبأسماء فيها مسافات).
- تم حذف الصور المكررة (نفس الصورة كانت موجودة مرتين بمكانين).
- تم ضغط كل صور PNG (تقليل الحجم من ~15MB لـ ~4.2MB) من غير فقدان ملحوظ في الجودة.
- تم ضغط الصور المدمجة (base64) جوه `js/data.js` (كان 60MB بقى ~20MB).
- تم التأكد إن كل الروابط في `index.html` و`js/modals.js` شغالة وبتشاور على أماكن الصور الصح.
- الحجم الكلي للمشروع نزل من **78MB لحوالي 26MB**.

## طريقة الرفع على GitHub

### الطريقة الأسهل (من المتصفح)
1. روح على github.com وسجل دخول.
2. اعمل Repository جديد (New repository).
3. من صفحة الـ repo الفاضية دوس **uploading an existing file**.
4. اسحب كل الملفات والمجلدات اللي جوه المجلد ده وارفعهم.
5. اكتب commit message واضغط Commit changes.

### الطريقة عن طريق Git (Terminal)
```bash
cd اسم-المجلد-ده
git init
git add .
git commit -m "Initial commit - EgyGulf Foods website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

### لو عايز تشغل الموقع مجانًا (GitHub Pages)
1. من إعدادات الـ repo (Settings) → Pages.
2. من Source اختار branch: `main` وFolder: `/ (root)`.
3. احفظ (Save)، وهياخد دقيقة لحد ما يظهر لينك الموقع.

## ملاحظة
ملف `js/data.js` لسه كبير نسبيًا (~20MB) لأنه فيه صور المنتجات كلها مدمجة جواه كـ base64.
ده أعلى من حد GitHub الموصى بيه للملف الواحد (تحذير بيظهر بعد 50MB) لكنه أقل من الحد الأقصى (100MB) فهيترفع عادي.
