import {Redis} from 'ioredis';
require('dotenv').config();

const redisClient = () => {

    if(process.env.REDIS_URL){
        return process.env.REDIS_URL;
    }

    throw new Error('Redis not configured')

};

export const redis = new Redis(redisClient());
