import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Alma Aesthetic, Toronto` : 'Alma Aesthetic | Skincare & Red Light Therapy, Toronto'
  }, [title])
}
