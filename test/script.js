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
      "The first concept to visually connect two pieces of information. Not clickable yet, but the idea of linking was born.",
    image:
      "images/1964 – Project Xanadu.webp",
  },
  {
    id: 1,
    title: "HyperTIES",
    subtitle: "University of Maryland, 1983",
    year: 1983,
    headerTitle: "The ancestors",
    headerSubtitle: "of Hyperlinks",
    description:
      "Used cyan hyperlinks on a black background — a rare early use of color to distinguish links.",
    image:
      "images/1987 – HyperCard.jpg",
  },
  {
    id: 2,
    title: "Windows 1.0",
    subtitle: "Microsoft, 1985",
    year: 1985,
    headerTitle: "Windows goes",
    headerSubtitle: "graphical and underlined",
    description:
      "Windows 1.0 introduced underlined text for clickable elements within its graphical user interface. The color was typically system-dependent but marked an early visual cue for interactivity beyond plain text.",
    image:
      "https://images.unsplash.com/photo-1587573265920-f6d738099211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "HyperTIES",
    subtitle: "University of Maryland, 1983",
    year: 1983,
    headerTitle: "Color enters",
    headerSubtitle: "the hyperlink story",
    description:
      "The HyperTIES system, developed at the University of Maryland Human-Computer Interaction Lab, used cyan-colored text for its hyperlinks on a black background. This was one of the earliest instances of using color to distinguish links.",
    image:
      "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Apple HyperCard",
    subtitle: "Apple, 1987",
    year: 1987,
    headerTitle: "Stacks of",
    headerSubtitle: "clickable ideas",
    description:
      "HyperCard used various visual cues for buttons and links, often allowing creators to define their appearance. While not strictly blue, it popularized the concept of easily navigable, interlinked information stacks.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "Mosaic Browser",
    subtitle: "NCSA, 1993",
    year: 1993,
    headerTitle: "Blue links",
    headerSubtitle: "become the standard",
    description:
      "The Mosaic web browser was instrumental in popularizing the web...",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
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
    document.getElementById("modalDescription").textContent = this.selectedCard.description
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
