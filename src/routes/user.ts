import Router from 'koa-router';
import UserController from '@controller/user'

const router: Router = new Router<any, {}>()

router.get('/:id', UserController.get)
router.post('/', UserController.create)

export default router.routes()
