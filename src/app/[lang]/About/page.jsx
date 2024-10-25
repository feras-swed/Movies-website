import React from 'react'
import Link from 'next/link';

function page() {
  return (
    <div className="container mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold text-center mb-8">
      <Link href="/">
        <div className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out">
          Swed Movies
        </div>
      </Link>
    </h1>
    <p className="text-lg text-center mb-8">
      Swed Movies هو موقع إلكتروني مُصمم خصيصًا لعشاق الأفلام والمسلسلات،  يُقدم تجربة مشاهدة غنية وممتعة.
    </p>

    <h2 className="text-2xl font-bold text-center mb-4">ما الذي يجعل Swed Movies مميزًا؟</h2>
    <ul className="text-lg text-center mb-8 list-disc list-inside">
      <li>مكتبة ضخمة:  يُقدم Swed Movies مجموعة واسعة من الأفلام والمسلسلات من جميع أنحاء العالم،  من الكلاسيكيات إلى أحدث الإصدارات.</li>
      <li>واجهة سهلة الاستخدام:  تم تصميم الموقع بواجهة سهلة الاستخدام،  تُمكنك من العثور على ما تبحث عنه بسهولة.</li>
      <li>دعم اللغات المتعددة:  يُقدم Swed Movies دعمًا للغات المتعددة،  مما يُمكنك من الاستمتاع بالمحتوى بلغتك الأم.</li>
      <li>مُحدث باستمرار:  يتم تحديث مكتبة Swed Movies باستمرار بأحدث الإصدارات،  لضمان حصولك على أفضل تجربة مشاهدة.</li>
      <li>مُجاني تمامًا:  يُمكنك الاستمتاع بجميع ميزات Swed Movies مجانًا،  دون الحاجة إلى اشتراك أو دفع أي رسوم.</li>
    </ul>

    <h2 className="text-2xl font-bold text-center mb-4">ما الذي يُمكنك فعله على Swed Movies؟</h2>
    <ul className="text-lg text-center mb-8 list-disc list-inside">
      <li>مشاهدة الأفلام والمسلسلات:  استمتع بمشاهدة مجموعة واسعة من الأفلام والمسلسلات من جميع أنحاء العالم.</li>
      <li>البحث عن الأفلام والمسلسلات:  ابحث عن الأفلام والمسلسلات المفضلة لديك بسهولة باستخدام شريط البحث.</li>
      <li>تصفح حسب النوع:  تصفح الأفلام والمسلسلات حسب النوع،  مثل الدراما،  الكوميديا،  الخيال العلمي،  إلخ.</li>
      <li>إنشاء قائمة مراقبة:  أضف الأفلام والمسلسلات التي تريد مشاهدتها إلى قائمة مراقبة،  للعودة إليها لاحقًا.</li>
      <li>مشاركة المحتوى:  شارك الأفلام والمسلسلات المفضلة لديك مع أصدقائك وعائلتك على وسائل التواصل الاجتماعي.</li>
    </ul>

    <p className="text-lg text-center mb-8">
      Swed Movies  هو الموقع المثالي لعشاق الأفلام والمسلسلات،  يُقدم تجربة مشاهدة غنية وممتعة.
    </p>

    <p className="text-lg text-center mb-8">
      زور موقع Swed Movies اليوم واستمتع بتجربة مشاهدة لا مثيل لها!
    </p>
  </div>
  )
}

export default page