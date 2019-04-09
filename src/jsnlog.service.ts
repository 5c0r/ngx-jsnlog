import { Injectable, Inject } from '@angular/core'
import { Logger } from './logger.interface'
import { JL } from 'jsnlog'

@Injectable()
export class JSNLogService implements Logger {
    jsnLogger: JL.JSNLogLogger

    constructor(@Inject('JSNLOG') jsnLog: JL.JSNLog) {
        this.jsnLogger = jsnLog()
    }

    public error(err: any): void {
        this.jsnLogger.error(err)
    }

    public info(info: any): void {
        this.jsnLogger.info(info)
    }

    public debug(debugInfo: any): void {
        this.jsnLogger.debug(debugInfo)
    }

    public fatalException(debugInfo: any, exception: Error) {
        this.jsnLogger.fatalException(debugInfo, exception)
    }
}
