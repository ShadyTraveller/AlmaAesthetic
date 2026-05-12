import { useEffect } from 'react'

const SERVICE_VALUE_TO_TREATMENT = {
  signature: 'Signature Facial',
  radiance: 'Radiance Ritual',
  desincrustation: 'Desincrustation Aesthetic',
  'cosmetic-consult': 'Cosmetic Consult',
}

function syncHeroToFormTreatment() {
  const hero = document.getElementById('service-select')
  const formSel = document.getElementById('booking-treatment')
  if (!hero || !formSel) return
  const label = SERVICE_VALUE_TO_TREATMENT[hero.value]
  if (!label) return
  for (let i = 0; i < formSel.options.length; i += 1) {
    if (formSel.options[i].value === label) {
      formSel.selectedIndex = i
      return
    }
  }
}

export function useBookingPageEffects() {
  useEffect(() => {
    const overlay = document.getElementById('booking-modal-overlay')
    const closeBtn = document.getElementById('booking-modal-close')
    const step1 = document.getElementById('booking-step-1')
    const step2 = document.getElementById('booking-step-2')
    const step3 = document.getElementById('booking-step-3')
    const calLabel = document.getElementById('booking-cal-label')
    const calDays = document.getElementById('booking-cal-days')
    const calPrev = document.getElementById('booking-cal-prev')
    const calNext = document.getElementById('booking-cal-next')
    const slotsWrap = document.getElementById('booking-timeslots-wrap')
    const slotsBox = document.getElementById('booking-timeslots')
    const nextBtn = document.getElementById('booking-next-btn')
    const backBtn = document.getElementById('booking-back-btn')
    const summary = document.getElementById('booking-selected-summary')
    const form = document.getElementById('booking-form')
    const confirmMsg = document.getElementById('booking-confirm-msg')
    const doneBtn = document.getElementById('booking-done-btn')
    const heroBookBtn = document.getElementById('hero-book-btn')
    const mobileStickyBtn = document.getElementById('mobile-sticky-btn')

    if (
      !overlay ||
      !closeBtn ||
      !step1 ||
      !step2 ||
      !step3 ||
      !calLabel ||
      !calDays ||
      !calPrev ||
      !calNext ||
      !slotsWrap ||
      !slotsBox ||
      !nextBtn ||
      !backBtn ||
      !summary ||
      !form ||
      !confirmMsg ||
      !doneBtn
    ) {
      return undefined
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const maxDate = new Date(2040, 11, 31)
    let viewYear = today.getFullYear()
    let viewMonth = today.getMonth()
    let selectedDate = null
    let selectedTime = null

    const MONTHS = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const TIME_SLOTS = [
      '9:00 AM',
      '10:00 AM',
      '11:00 AM',
      '12:00 PM',
      '1:00 PM',
      '2:00 PM',
      '3:00 PM',
      '4:00 PM',
      '5:00 PM',
      '6:00 PM',
      '7:00 PM',
    ]

    function renderCalendar() {
      calLabel.textContent = `${MONTHS[viewMonth]} ${viewYear}`
      calDays.innerHTML = ''
      const firstDay = new Date(viewYear, viewMonth, 1).getDay()
      const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
      for (let i = 0; i < firstDay; i += 1) {
        const blank = document.createElement('span')
        blank.className = 'booking-cal-empty'
        calDays.appendChild(blank)
      }
      for (let d = 1; d <= daysInMonth; d += 1) {
        const btn = document.createElement('button')
        btn.type = 'button'
        btn.textContent = String(d)
        const cellDate = new Date(viewYear, viewMonth, d)
        if (cellDate < today || cellDate > maxDate) {
          btn.disabled = true
          btn.className = 'booking-cal-day disabled'
        } else {
          btn.className = 'booking-cal-day'
          if (
            selectedDate &&
            cellDate.toDateString() === selectedDate.toDateString()
          ) {
            btn.classList.add('selected')
          }
          btn.addEventListener('click', () => {
            selectedDate = cellDate
            selectedTime = null
            renderCalendar()
            renderSlots()
            slotsWrap.style.display = 'block'
            nextBtn.style.display = 'none'
          })
        }
        calDays.appendChild(btn)
      }
      calPrev.disabled =
        viewYear === today.getFullYear() && viewMonth === today.getMonth()
      calNext.disabled = viewYear === 2040 && viewMonth === 11
    }

    function renderSlots() {
      slotsBox.innerHTML = ''
      TIME_SLOTS.forEach((t) => {
        const btn = document.createElement('button')
        btn.type = 'button'
        btn.textContent = t
        btn.className =
          'booking-slot' + (selectedTime === t ? ' selected' : '')
        btn.addEventListener('click', () => {
          selectedTime = t
          document.querySelectorAll('.booking-slot').forEach((b) => {
            b.classList.remove('selected')
          })
          btn.classList.add('selected')
          nextBtn.style.display = 'block'
        })
        slotsBox.appendChild(btn)
      })
    }

    function openModal() {
      step1.style.display = 'block'
      step2.style.display = 'none'
      step3.style.display = 'none'
      selectedDate = null
      selectedTime = null
      slotsWrap.style.display = 'none'
      nextBtn.style.display = 'none'
      form.reset()
      syncHeroToFormTreatment()
      viewYear = today.getFullYear()
      viewMonth = today.getMonth()
      renderCalendar()
      overlay.style.display = 'flex'
      document.body.style.overflow = 'hidden'
      setTimeout(() => overlay.classList.add('active'), 10)
    }

    function closeModal() {
      overlay.classList.remove('active')
      setTimeout(() => {
        overlay.style.display = 'none'
        document.body.style.overflow = ''
      }, 300)
    }

    function onCalPrev() {
      if (viewMonth === 0) {
        viewMonth = 11
        viewYear -= 1
      } else {
        viewMonth -= 1
      }
      renderCalendar()
    }

    function onCalNext() {
      if (viewMonth === 11) {
        viewMonth = 0
        viewYear += 1
      } else {
        viewMonth += 1
      }
      renderCalendar()
    }

    function onNextClick() {
      const treatmentEl = document.getElementById('booking-treatment')
      const hero = document.getElementById('service-select')
      let serviceName = ''
      if (treatmentEl && treatmentEl.value) {
        serviceName = treatmentEl.options[treatmentEl.selectedIndex].text
      } else if (hero) {
        serviceName = hero.options[hero.selectedIndex].text
      }
      if (!selectedDate || !selectedTime) return
      const dateStr = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      summary.textContent = `${serviceName} · ${dateStr} at ${selectedTime}`
      step1.style.display = 'none'
      step2.style.display = 'block'
    }

    function onBackClick() {
      step2.style.display = 'none'
      step1.style.display = 'block'
    }

    async function onFormSubmit(e) {
      e.preventDefault()
      const name = document.getElementById('booking-name').value.trim()
      const phone = document.getElementById('booking-phone').value.trim()
      const email = document.getElementById('booking-email').value.trim()
      const treatmentEl = document.getElementById('booking-treatment')
      const treatment = treatmentEl ? treatmentEl.value : ''
      const errorBox = document.getElementById('booking-form-error')
      errorBox.textContent = ''
      if (!name || !treatment || !phone || !email) {
        errorBox.textContent =
          'Please fill in all required fields before continuing.'
        errorBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        return
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        errorBox.textContent = 'Please enter a valid email address.'
        return
      }
      const selectedAddons = Array.from(
        form.querySelectorAll('[name="booking_addons"]:checked')
      ).map((cb) => cb.value)
      const regionEl = document.getElementById('location-select')
      const dateStr = selectedDate
        ? selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : ''
      const submitBtn = form.querySelector('[type="submit"]')
      submitBtn.disabled = true
      submitBtn.textContent = 'Sending…'
      const payload = {
        fullName: name,
        phone,
        email,
        treatmentType: treatment,
        addOns: selectedAddons,
        preferredDate: dateStr,
        preferredTime: selectedTime || null,
        region: regionEl ? regionEl.value : null,
      }
      try {
        const res = await fetch('/api/booking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok) {
          if (res.status === 503 && data.code === 'NOT_CONFIGURED') {
            errorBox.textContent =
              'Online booking storage is not configured yet. Please call (772) 255-8737 or email book@almaaesthetic.co to complete your reservation.'
          } else {
            errorBox.textContent =
              data.error ||
              'We could not submit your booking. Please try again or call the studio.'
          }
          return
        }
        confirmMsg.textContent = `Hi ${name}, your ${treatment} is tentatively scheduled for ${dateStr} at ${selectedTime}.`
        step2.style.display = 'none'
        step3.style.display = 'block'
      } catch {
        errorBox.textContent =
          'Network error. Check your connection or call (772) 255-8737 to book.'
      } finally {
        submitBtn.disabled = false
        submitBtn.textContent = 'Book Appointment'
      }
    }

    function onEscape(e) {
      if (e.key === 'Escape' && overlay.style.display !== 'none') {
        closeModal()
      }
    }

    function onOverlayClick(e) {
      if (e.target === overlay) closeModal()
    }

    calPrev.addEventListener('click', onCalPrev)
    calNext.addEventListener('click', onCalNext)
    nextBtn.addEventListener('click', onNextClick)
    backBtn.addEventListener('click', onBackClick)
    form.addEventListener('submit', onFormSubmit)
    doneBtn.addEventListener('click', closeModal)
    closeBtn.addEventListener('click', closeModal)
    overlay.addEventListener('click', onOverlayClick)
    document.addEventListener('keydown', onEscape)

    const onHeroBookClick = (ev) => {
      ev.preventDefault()
      openModal()
    }
    const onMobileStickyClick = (ev) => {
      ev.preventDefault()
      openModal()
    }
    if (heroBookBtn) heroBookBtn.addEventListener('click', onHeroBookClick)
    if (mobileStickyBtn) {
      mobileStickyBtn.addEventListener('click', onMobileStickyClick)
    }

    const tiles = document.querySelectorAll('.quick-service-tile')
    const tileHandlers = []
    tiles.forEach((tile) => {
      const fn = (event) => {
        if (event.target.closest('button')) return
        const svc = tile.getAttribute('data-service')
        const sel = document.getElementById('service-select')
        if (sel && svc) {
          sel.value = svc
          syncHeroToFormTreatment()
        }
        openModal()
      }
      tile.addEventListener('click', fn)
      tileHandlers.push({ tile, fn })
    })

    const bookButtons = document.querySelectorAll('.quick-service-tile button')
    const bookBtnHandlers = []
    bookButtons.forEach((btn) => {
      const fn = (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        const tile = btn.closest('.quick-service-tile')
        const svc = tile && tile.getAttribute('data-service')
        const sel = document.getElementById('service-select')
        if (sel && svc) {
          sel.value = svc
          syncHeroToFormTreatment()
        }
        openModal()
      }
      btn.addEventListener('click', fn)
      bookBtnHandlers.push({ btn, fn })
    })

    renderCalendar()

    return () => {
      calPrev.removeEventListener('click', onCalPrev)
      calNext.removeEventListener('click', onCalNext)
      nextBtn.removeEventListener('click', onNextClick)
      backBtn.removeEventListener('click', onBackClick)
      form.removeEventListener('submit', onFormSubmit)
      doneBtn.removeEventListener('click', closeModal)
      closeBtn.removeEventListener('click', closeModal)
      overlay.removeEventListener('click', onOverlayClick)
      document.removeEventListener('keydown', onEscape)
      if (heroBookBtn) {
        heroBookBtn.removeEventListener('click', onHeroBookClick)
      }
      if (mobileStickyBtn) {
        mobileStickyBtn.removeEventListener('click', onMobileStickyClick)
      }
      tileHandlers.forEach(({ tile, fn }) =>
        tile.removeEventListener('click', fn)
      )
      bookBtnHandlers.forEach(({ btn, fn }) =>
        btn.removeEventListener('click', fn)
      )
    }
  }, [])
}
