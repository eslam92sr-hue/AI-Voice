"use strict";

const uploadButton = document.getElementById("uploadButton");
const audioInput = document.getElementById("audioInput");
const fileName = document.getElementById("fileName");

const startButton = document.getElementById("startButton");
const learnButton = document.getElementById("learnButton");
const loginButton = document.getElementById("loginButton");


// اختيار ملف صوتي
uploadButton.addEventListener("click", () => {
    audioInput.click();
});


// عرض اسم الملف بعد اختياره
audioInput.addEventListener("change", () => {

    const file = audioInput.files[0];

    if (!file) {
        fileName.textContent = "لم يتم اختيار ملف";
        return;
    }

    if (!file.type.startsWith("audio/")) {
        fileName.textContent = "الملف المختار ليس ملفًا صوتيًا";
        audioInput.value = "";
        return;
    }

    fileName.textContent = تم اختيار: ${file.name};
});


// زر ابدأ الآن
startButton.addEventListener("click", () => {

    document
        .querySelector(".upload-section")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// زر تعرف على الخدمة
learnButton.addEventListener("click", () => {

    document
        .querySelector("#about")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// تسجيل الدخول - مؤقتًا
loginButton.addEventListener("click", () => {

    alert(
        "نظام تسجيل الدخول سيتم تفعيله في المرحلة القادمة."
    );

});


// أزرار معاينة الأصوات - مؤقتًا
const previewButtons =
    document.querySelectorAll(".preview-btn");

previewButtons.forEach((button) => {

    button.addEventListener("click", () => {

        alert(
            "سنربط الصوت الحقيقي بالذكاء الاصطناعي في المرحلة القادمة."
        );

    });

});
