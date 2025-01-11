import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScroll(target: string | React.MouseEvent<HTMLAnchorElement>, id?: string) {
  if (typeof target === 'string') {
    // If target is a string, treat it as an ID
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Changed to center for better UX
        inline: 'nearest'
      })
    }
  } else {
    // If target is an event, prevent default and use the id parameter
    target.preventDefault()
    if (id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center', // Changed to center for better UX
          inline: 'nearest'
        })
      }
    }
  }
}

