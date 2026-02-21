  module.exports = {
    apps: [
      {
        name: "wastixPm2",
        cwd: "/var/www/wastix",
        script: ".output/server/index.mjs",
        interpreter: "node",
        exec_mode: "fork",
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: "500M",
        env: {
          NODE_ENV: "production",
          NITRO_HOST: "127.0.0.1",
          NITRO_PORT: "3055"
        }
      }
    ]
  }
