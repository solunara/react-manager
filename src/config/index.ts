type ENV = "dev" | "uat" | "prd"

const env: ENV = (document.documentElement.dataset.env as ENV) || "dev"

const config = {
  dev: {
    baseApi: "http://localhost:8080",
    uploadApi: "",
    cdn: "",
    mock: true,
    mockApi: "http://localhost:8080"
  },
  uat: {
    baseApi: "/api",
    uploadApi: "",
    cdn: "",
    mock: false,
    mockApi: "/api"
  },
  prd: {
    baseApi: "/api",
    uploadApi: "",
    cdn: "",
    mock: false,
    mockApi: "/api"
  }
}

export default {
  env,
  ...config[env]
}
