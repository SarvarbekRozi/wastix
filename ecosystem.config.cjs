module.exports = {
  apps: [
    {
      name: 'wastixPm2',
      script: '.output/server/index.mjs',
      cwd: '/var/www/wastix',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3055,
        HOST: '127.0.0.1',
        NUXT_PUBLIC_API_BASE: 'https://admin.truststandart.uz/api/v1',
      },
      error_file: '/var/log/pm2/wastix-front-error.log',
      out_file: '/var/log/pm2/wastix-front-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    }
  ]
}
