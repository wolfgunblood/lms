require("dotenv").config();
import express, {Request, Response,NextFunction } from 'express';
export const app = express();
import cookieParser from 'cookie-parser';
import cors from 'cors';

//body parser
app.use(express.json({ limit: "50mb" }));

//cookie parser

app.use(cookieParser());

//cors => cross origin resource sharing

app.use(cors({
    origin: process.env.ORIGIN,
}));


// testing routes 

app.get("/",(req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "This is app"
    })
} )

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success: true,
        message: "API is working fine"
    });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {

    const err = new Error(`Route ${req.originalUrl} not found`) as any ;
    err.statusCode = 404
    next(err)
});
