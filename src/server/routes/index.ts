import { Router } from 'express';

const router = Router();


router.get('/teste', (req, res) => {
    return res.send('Oie');
});







export { router };