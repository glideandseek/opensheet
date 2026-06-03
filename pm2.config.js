module.exports = [
    {
        name: 'opensheet',
        script: 'index.ts',
        interpreter: 'bun',
        max_restarts: 10,
        cron_restart: '39 20 * * *',
    },
];
