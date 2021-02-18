function toggleMobileMenu() {
    const navigation = document.getElementById("navigation");
    const overlay = document.getElementById("overlay");
    const html = document.getElementsByTagName("html")[0];

    const mobileMenuVisible = html.classList.contains("overflow-hidden");

    navigation.classList.add("transition-transform");
    navigation.classList.add("duration-300");

    if (mobileMenuVisible) {
        html.classList.remove("overflow-hidden");
        navigation.classList.add("-translate-x-64");
        overlay.classList.remove("opacity-30");
        overlay.classList.add("opacity-0");

        setTimeout(function() {
            navigation.classList.remove("transition-transform");
            navigation.classList.remove("duration-300");
            overlay.classList.add("invisible");
        }, 300);
    } else {
        html.classList.add("overflow-hidden");
        navigation.classList.remove("-translate-x-64");
        overlay.classList.remove("invisible");
        overlay.classList.add("opacity-30");
        overlay.classList.remove("opacity-0");

        setTimeout(function() {
            navigation.classList.remove("transition-transform");
            navigation.classList.remove("duration-300");
        }, 300);
    }
}
