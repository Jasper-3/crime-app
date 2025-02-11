import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // Frontend will run on port 3000
        proxy: {
            "/api": {
                target: "http://localhost:8000", // Laravel backend runs on port 8000
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
