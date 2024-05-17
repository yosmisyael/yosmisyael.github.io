export default function setupObserver(screenWidth) {
    const navItemsMap = new Map()
    $(".nav-item").each(function() {
        navItemsMap.set($(this).data("section"), $(this))
    })
    let prevElement = null
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            let section = screenWidth < 768 ? entry.target.id : entry.target.dataset.section;
            const result = navItemsMap.get(section)
            if (entry.isIntersecting) {
                if (prevElement) prevElement.removeClass("active")
                result.addClass("active")
                prevElement = result
            } else {
                result.removeClass("active")
            }
        })
    }, {
        rootMargin: screenWidth < 768 ? "-38% 0% -10% 0%" : "0% 0% -10% 0%",
    })
    if (screenWidth < 768) {
        $(".section-title").parent().each(function () {
            observer.observe(this)
        })
    } else {
        $(".section-title").each(function () {
            observer.observe(this)
        })
    }
    return observer
}


