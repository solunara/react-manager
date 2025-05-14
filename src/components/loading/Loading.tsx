import ReactDom from "react-dom/client"
import Loading from "@/components/loading/Spin"

let count: number = 0
let loadingContainer: HTMLDivElement | null = null

export const showLoading = (tip: string = "") => {
  if (count === 0) {
    loadingContainer = document.createElement("div")
    loadingContainer.setAttribute("id", "loading")
    document.body.appendChild(loadingContainer)
    if (tip) {
      ReactDom.createRoot(loadingContainer).render(<Loading tip={tip} />)
    } else {
      ReactDom.createRoot(loadingContainer).render(<Loading />)
    }
  }
  count++
}

export const hidenLoading = () => {
  count--
  if (count <= 0 || loadingContainer) {
    document.body.removeChild(document.getElementById("loading") as HTMLDivElement)
    loadingContainer = null
    count = 0
  }
}
