import kernel from './scheduler-kernel'
import BaseApp from '../common/make-base-app'

const app = new BaseApp(kernel)

app
  .init()
  .then((container) => {
    const schedulerService = container.get('app.service.scheduler')

    schedulerService.start()
  })
