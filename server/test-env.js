import 'dotenv/config';
console.log('Secret starts with:', process.env.CLERK_WEBHOOK_SECRET?.substring(0, 10));
console.log('Secret ends with:', process.env.CLERK_WEBHOOK_SECRET?.substring(process.env.CLERK_WEBHOOK_SECRET.length - 1));
