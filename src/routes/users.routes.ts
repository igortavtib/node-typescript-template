import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    return response.send('teste')
  } catch(err) {
    return response.status(400).json({ message: err.message })
  }
})

export default usersRouter;
