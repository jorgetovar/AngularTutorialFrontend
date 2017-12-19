import {Injectable} from '@angular/core';
import {Log} from './log';
import {MOCK_LIST} from './mock-list';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class LogProviderService {

  constructor(private messageService: MessageService) {
  }

  getLogs(): Observable<Log[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(MOCK_LIST);
  }

}
