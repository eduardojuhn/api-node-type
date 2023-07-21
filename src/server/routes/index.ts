import {Router} from 'express';
import {StatusCodes} from 'http-status-codes';

const router = Router();


router.get('/', (_, res) => {
    return res.send('Oie');
});

router.post('/teste/:id', (req, res) => {
    console.log(req.query.teste);
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});



export { router };