// Data for cards
const cardsData = [
  {
    id: 1,
    title: "Projet Xanadu",
    subtitle: "Ted Nelson, 1964",
    year: 1964,
    headerTitle: "The ancestors",
    headerSubtitle: "of Hyperlinks",
    description:
      "The first concept to visually connect two pieces of information...",
  modalDescription: "Project Xanadu was one of the first systems to create visual connections between documents. Instead of colored text or buttons, it used lines to show a link between different pieces of information. These lines weren’t clickable like modern hyperlinks, but they introduced the concept of connecting digital documents in a visual, structured way. This was a major leap toward what would eventually become hypertext as we know it.",
    image:
      "images/1964 – Project Xanadu.webp",
  },
  {
    id: 2,
    title: "HyperTIES System",
    subtitle: "University of Maryland, 1983",
    year: 1983,
    headerTitle: "The ancestors",
    headerSubtitle: "of Hyperlinks",
    description:
      "Used cyan hyperlinks on a black background a rare early use of color to distinguish links...",
        modalDescription: "HyperTIES was an interactive system that introduced color to its interface, using cyan hyperlinks on a black background. It was part of an electronic journal used in academic and professional contexts. Although cyan isn’t the same as dark blue, this marked one of the earliest uses of color to differentiate links. It's a clear step forward in making digital navigation more intuitive, even if the iconic hyperlink blue hadn't appeared just yet.",
    image:
      "images/1987 – HyperCard.jpg",
  },
  {
    id: 3,
    title: "Windows 1.0",
    subtitle: "Microsoft, 1985",
    year: 1985,
    headerTitle: "Visual Foundations",
    headerSubtitle: "of Hyperlinks",
    description:
      "Introduced dark blue in the UI (not yet for links), but most importantly...",
      modalDescription: "Windows 1.0 brought a fully graphical interface to home computers. While hyperlinks weren’t yet common, the interface used dark blue heavily in headings and window borders. Even more interesting, it introduced underlined text to indicate clickable areas—an early design convention that persists today. It also featured hover states, where the interface changed appearance when users moved the mouse over certain elements—another crucial element of modern hyperlink design.",
      image:
      "images/1985 – Windows 1.0.png",
  },
    {
    id: 4,
    title: "Apple HyperCard",
    subtitle: "Apple, 1987",
    year: 1987,
    headerTitle: "Visual Foundations",
    headerSubtitle: "of Hyperlinks",
    description:
      "Hyperlinks between cards/apps, but still black and white. Aesthetic innovation without color...",
    modalDescription: "Apple’s HyperCard allowed users to build and navigate between cards filled with content. It featured clickable areas, similar to hyperlinks, though without color. These links were purely functional and relied on layout and interaction rather than color or underline. Although the design was visually refined, it didn't help users identify links at a glance—making it a key example of how interaction came before visual identity in hyperlink design.",
      image:
      "images/1987 – HyperCard.jpg",
  },
  {
    id: 5,
    title: "Windows 3.0",
    subtitle: "Microsoft, 1992",
    year: 1992,
    headerTitle: "The Road",
    headerSubtitle: "to Interactivity",
    description:
      "Introduced 16 colors, but links remained black...",
     modalDescription: "Windows 3.0 introduced support for 16 colors, which allowed for much richer interfaces. Yet, despite these new capabilities, links were still displayed as black text on a white background, and selected items flipped to white on black. It’s clear that designers were still figuring out how to use color meaningfully. The use of blue for links wasn’t there yet—but the environment was becoming more visually sophisticated.",
      image:
      "images/1990 – Windows 3.0 .png",
  },
   {
    id: 6,
    title: "Windows 3.1",
    subtitle: "Microsoft, 1990",
    year: 1990,
    headerTitle: "The Road",
    headerSubtitle: "to Interactivity",
    description:
      "Crucial moment: Microsoft uses “hyperlink blue” for active selections in the interface...",
  modalDescription: "By this point, Microsoft had been using dark blue in its interfaces for several years. In Windows 3.1, we see blue used not only for layout but for interactive states—like when clicking on a drive or folder. This change suggests a growing link between the color blue and interactivity. It’s not quite a blue hyperlink yet, but it’s an important visual shift that predates Mosaic by about a year.",
    image:
      "images/April 6, 1992 – Windows 3.1 .webp",
  },
  {
    id: 7,
    title: "Mosaic",
    subtitle: "NCSA, 1993",
    year: 1993,
    headerTitle: "The Blue Hyperlink",
    headerSubtitle: "is Born",
    description:
      "Early versions used black underlined links, no blue yet...",
     modalDescription: "The very first version of the Mosaic browser—often considered the ancestor of modern browsers—featured underlined black hyperlinks with an outline. This early interface didn’t include blue yet, but it set the stage for it. The user guide mentioned visual cues like underlining and highlighting, emphasizing the importance of visibility and interaction clarity.",
      image:
      "images/January, 1993 – Mosaic.webp",
  },
 
  {
    id: 8,
    title: "Mosaic Version 0.13",
    subtitle: "NCSA, 1993",
    year: 1993,
    headerTitle: "The Blue Hyperlink",
    headerSubtitle: "is Born",
    description:
      "This is the official birth of the blue hyperlink.",
        modalDescription: "Changed default anchor representations: blue and single solid underline for unvisited, dark purple and single dashed underline for visited. This was the first confirmed appearance of blue hyperlinks in a web browser. That exact color system—blue for unvisited, purple for visited—would go on to become the standard across the web.",
    image:
      "images/1987 – HyperCard.jpg",
  },
  {
    id: 9,
    title: "Mosaic on Macintosh",
    subtitle: "NCSA, 1993",
    year: 1993,
    headerTitle: "The Blue Hyperlink",
    headerSubtitle: "is Born",
    description:
      "First visual proof of a blue hyperlink in action...",
      modalDescription: "A Mosaic port was released for Mac OS 7.1, and a screenshot of this version finally gave us visual confirmation: a blue hyperlink, clearly underlined. This is the first image-based proof that the now-iconic link style was in use. By this point, the visual language of the web—blue for unvisited, purple for visited—was firmly taking root.      ",
      image:
      "images/September, 1993  – Mosaic Ports.webp",
  },
  {
    id: 10,
    title: "Netscape Navigator",
    subtitle: "Marc Andreessen, 1994",
    year: 1994,
    headerTitle: "Standardization",
    headerSubtitle: "and Legacy",
     description:
      "Used the same blue links on gray background as Mosaic...",
    modalDescription: "Created by Marc Andreessen, one of the developers behind Mosaic, Netscape Navigator carried over Mosaic’s visual language. It featured blue underlined hyperlinks on a gray background, instantly familiar to users. With Netscape’s growing popularity, this style became the default for web design. This version helped lock in the blue hyperlink as a web convention, setting the tone for what hyperlinks would look like for decades.",
      image:
      "images/October 13, 1994 – Netscape Navigator.webp",
  },
  {
    id: 11,
    title: "Internet Explorer 1.0",
    subtitle: "Microsoft, 1995",
    year: 1995,
    headerTitle: "Standardization",
    headerSubtitle: "and Legacy",
    description:
      "Blue hyperlinks became a standard as they reached mainstream users...",
    modalDescription: "Microsoft released its own browser, Internet Explorer, alongside Windows 95. Like Netscape, it featured blue links and a gray UI. But this time, it came pre-installed with the operating system—meaning millions of users saw and accepted this design immediately. This moment helped cement the blue hyperlink as a global standard, and marked the beginning of the famous browser wars.",
      image:
      "images/July 1995 – Internet Explorer 1.0.webp",
  },
]

class StackedCards {
  constructor() {
    this.currentIndex = 0
    this.selectedCard = null
    this.cardsContainer = document.getElementById("cardsContainer")
    this.progressIndicator = document.getElementById("progressIndicator")
    this.modal = document.getElementById("modal")
    this.yearLeft = document.getElementById("yearLeft")
    this.yearRight = document.getElementById("yearRight")
    this.isWheeling = false
    this.wheelTimeout = null

    this.init()
    this.bindEvents()
  }

  init() {
    this.createCards()
    this.createProgressDots()
    this.updateCards()
    this.updateYearHeader()
  }

  createCards() {
    this.cardsContainer.innerHTML = ""
    cardsData.forEach((card, index) => {
      const cardElement = document.createElement("div")
      cardElement.className = "card"
      cardElement.innerHTML = `
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">${card.title}</h3>
            <p class="card-subtitle">${card.subtitle}</p>
          </div>
          <p class="card-description">${card.description}</p>
          <div class="card-image-container">
            <img src="${card.image}" alt="${card.title}" class="card-image">
            <button class="card-eye-button" data-card-index="${index}">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>
      `
      this.cardsContainer.appendChild(cardElement)
    })
  }

  createProgressDots() {
    this.progressIndicator.innerHTML = ""
    cardsData.forEach((_, index) => {
      const dot = document.createElement("div")
      dot.className = "progress-dot"
      if (index === 0) dot.classList.add("active")
      this.progressIndicator.appendChild(dot)
    })
  }

  updateCards() {
    const cards = this.cardsContainer.querySelectorAll(".card")
    const dots = this.progressIndicator.querySelectorAll(".progress-dot")
    const N = cardsData.length
    const visibleRange = 2

    cards.forEach((card, actualIndex) => {
      let displayOffset = actualIndex - this.currentIndex
      if (displayOffset > N / 2) displayOffset -= N
      else if (displayOffset < -N / 2) displayOffset += N

      let translateY = displayOffset * 15
      let scale = 1 - Math.abs(displayOffset) * 0.05
      let opacity = Math.abs(displayOffset) <= visibleRange ? 1 - Math.abs(displayOffset) * 0.25 : 0
      let zIndex = displayOffset === 0 ? N + 1 : N - Math.abs(displayOffset)

      card.style.transform = `translateY(${translateY}px) scale(${scale})`
      card.style.opacity = opacity
      card.style.zIndex = zIndex
    })

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex)
    })

    this.updateYearHeader()
  }

  updateYearHeader() {
    const card = cardsData[this.currentIndex]
    const year = card.year.toString()
    const left = year.slice(0, 2)
    const right = year.slice(2)

    const titleEl = document.getElementById("headerTitle")
    const subtitleEl = document.getElementById("headerSubtitle")

    this.yearLeft.classList.add("fade")
    this.yearRight.classList.add("fade")
    titleEl.classList.add("fade")
    subtitleEl.classList.add("fade")

    setTimeout(() => {
      this.yearLeft.textContent = left
      this.yearRight.textContent = right
      titleEl.textContent = card.headerTitle
      subtitleEl.textContent = card.headerSubtitle
    }, 150)

    setTimeout(() => {
      this.yearLeft.classList.remove("fade")
      this.yearRight.classList.remove("fade")
      titleEl.classList.remove("fade")
      subtitleEl.classList.remove("fade")
    }, 300)
  }

  handleWheel(event) {
    event.preventDefault()
    if (this.isWheeling) return
    this.isWheeling = true
    clearTimeout(this.wheelTimeout)
    this.wheelTimeout = setTimeout(() => (this.isWheeling = false), 900)

    const N = cardsData.length
    if (event.deltaY > 0) this.currentIndex = (this.currentIndex + 1) % N
    else if (event.deltaY < 0) this.currentIndex = (this.currentIndex - 1 + N) % N
    this.updateCards()
  }

  handleSwipe(startY, endY, threshold) {
    const swipeDistance = startY - endY
    if (Math.abs(swipeDistance) > threshold) {
      if (swipeDistance > 0) this.currentIndex = (this.currentIndex + 1) % cardsData.length
      else this.currentIndex = (this.currentIndex - 1 + cardsData.length) % cardsData.length
      this.updateCards()
    }
  }

  openModal(cardIndex) {
    this.selectedCard = cardsData[cardIndex]
    document.getElementById("modalTitleMobile").textContent = this.selectedCard.title
    document.getElementById("modalTitleDesktop").textContent = this.selectedCard.title
    document.getElementById("modalSubtitleMobile").textContent = this.selectedCard.subtitle
    document.getElementById("modalSubtitleDesktop").textContent = this.selectedCard.subtitle
    document.getElementById("modalImage").src = this.selectedCard.image
    document.getElementById("modalImage").alt = this.selectedCard.title
document.getElementById("modalDescription").textContent = this.selectedCard.modalDescription || this.selectedCard.description

    this.modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }

  closeModal() {
    this.modal.classList.remove("active")
    document.body.style.overflow = "hidden"
    this.selectedCard = null
  }

  bindEvents() {
    this.cardsContainer.addEventListener("wheel", this.handleWheel.bind(this), { passive: false })

    this.cardsContainer.addEventListener("click", (e) => {
      const eyeButton = e.target.closest(".card-eye-button")
      if (eyeButton) {
        e.preventDefault()
        const cardIndex = Number.parseInt(eyeButton.dataset.cardIndex, 10)
        this.openModal(cardIndex)
      }
    })

    document.getElementById("modalBackdrop").addEventListener("click", () => this.closeModal())
    document.getElementById("modalCloseMobile").addEventListener("click", () => this.closeModal())
    document.getElementById("modalCloseDesktop").addEventListener("click", () => this.closeModal())
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal.classList.contains("active")) this.closeModal()
    })
    document.getElementById("modalContent").addEventListener("click", (e) => e.stopPropagation())

    let touchStartY = 0
    let touchEndY = 0
    const swipeThreshold = 50

    this.cardsContainer.addEventListener("touchstart", (e) => {
      touchStartY = e.changedTouches[0].screenY
    }, { passive: true })

    this.cardsContainer.addEventListener("touchend", (e) => {
      touchEndY = e.changedTouches[0].screenY
      this.handleSwipe(touchStartY, touchEndY, swipeThreshold)
    }, { passive: true })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new StackedCards()
})
