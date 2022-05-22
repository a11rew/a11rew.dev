const scrollTo = (target: string): void => {
  document.querySelector(`${target}`)?.scrollIntoView({
    behavior: 'smooth',
    block: window.innerWidth < 425 ? 'start' : 'center',
  })
}

export default scrollTo
