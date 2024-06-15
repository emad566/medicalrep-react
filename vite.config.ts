import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const cherryPickedKeys = [
  "SOME_KEY_IN_YOUR_ENV_FILE",
  "SOME_OTHER_KEY_IN_YOUR_ENV_FILE",
  "PUBLIC_URL",
];

// Define the type for the processEnv object
type ProcessEnv = {
  [key: string]: string;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv: ProcessEnv = {};
  cherryPickedKeys.forEach(key => processEnv[key] = env[key] as string);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
  }
});
